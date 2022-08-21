import { promises as fs } from 'fs';
import { promisify } from 'util'
import { exec as raw_exec} from 'child_process'
const exec = promisify(raw_exec)

async function parse(slug) {
  const command = `pandoc -t json src/content/${slug}.md`
  const  { stdout } = await exec(command);
  return stdout
}

export async function get() {
  const text = await parse("_index");
  console.log({text})
  return {
    body: {
      document: JSON.parse(text)
    }
  }
}