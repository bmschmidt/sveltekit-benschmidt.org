import * as duckdb from '@duckdb/duckdb-wasm';
import duckdb_wasm from '/node_modules/@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import duckdb_wasm_eh from '/node_modules/@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import Worker from 'web-worker';
globalThis.Worker = Worker; // polyfill Worker for node.

import duckdb_worker from '/node_modules/@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?worker';
import duckdb_worker_eh from '/node_modules/@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?worker';

const DUCKDB_BUNDLES: duckdb.DuckDBBundles = {
	mvp: {
		mainModule: duckdb_wasm,
		mainWorker: duckdb_worker
	},
	eh: {
		mainModule: duckdb_wasm_eh,
		mainWorker: duckdb_worker_eh
	}
};

let db = null;
export const initDB = async (path: string, fname: string | undefined) => {
	if (db) {
		return db;
	}
	const logger = new duckdb.ConsoleLogger();
	const worker = new duckdb_worker();
	db = new duckdb.AsyncDuckDB(logger, worker);
	await db.instantiate(duckdb_wasm);
	await add_table(path, fname);
	console.log({ conn: await db.connect() });
	return db;
};

export async function add_table(path: string, fname: string | undefined) {
	if (fname == undefined) {
		fname = path.split('/').pop();
	}
	const parquet = await fetch(path).then((d) => d.arrayBuffer());
	return db.registerFileBuffer(fname, new Uint8Array(parquet));
}
