import { promisify } from 'util';
import { exec as raw_exec } from 'child_process';
import { promises as fs } from 'fs';
import yaml from 'js-yaml';

const exec = promisify(raw_exec);

function fold_spaces(array) {
  const r = array.reduceRight((accumulator, one_before) => {
    const [first, ...rest] = accumulator;
    if (one_before === null) {
      // Not sure why this happens, but it does
      return accumulator
    }
    if (one_before.t === "Space" || one_before.t === "SoftBreak") {
      one_before = {t: "Str", c: " "}
    }
    if (first && first.t === "Str" && one_before.t === "Str") {
      return [{t: "Str", c: one_before.c + first.c }, ...rest]
    } else {
      const collapsed = collapse_spaces(one_before)
      return [collapsed, first, ...rest]
    }
  }, [])
  return r.filter(d => d !== undefined)
}
function collapse_spaces(ast) {
  if (Array.isArray(ast)) {
    return fold_spaces(ast)
  }
  if (typeof(ast) !== 'object') {
    return ast
  }
  const output = {}
  // eslint-disable-next-line prefer-const
  for (let [k, v] of Object.entries(ast)) {
    if (Array.isArray(v)) {
      v = fold_spaces(v)
    } else if (typeof(v) !== 'object') {
      //pass
    } else {
      v = collapse_spaces(v)
    }
    output[k] = v
  }
  return output
}

async function parse_path(path) {
	const command = `pandoc -t json ${path}`;
	const { stdout } = await exec(command);
	return collapse_spaces(JSON.parse(stdout));
}
async function parse_slug(slug) {
	return parse_path(`./src/content/${slug}.md`);
}

export async function run_pandoc(path) {
	return parse_slug(path);
}

async function yaml_metadata(path) : Promise<Record<string, any>> {
	const raw = await fs.readFile(path, 'utf-8');
  const candidate = raw.split('---')[1];
  if (candidate === undefined) {
    return {}
  }
	const attributes = yaml.load(candidate);
	return attributes || {};
}

export async function json_with_meta(path) {
	const pandocced = parse_path(path);
	const metadata = await yaml_metadata(path);
	return Promise.all([pandocced, metadata]).then(([document, metadata]) => ({
		metadata,
		document
	}));
}
