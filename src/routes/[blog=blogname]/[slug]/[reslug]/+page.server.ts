import { redirect } from "@sveltejs/kit";
export async function load({ params, fetch }) {
	const slug = params.reslug;
	throw redirect(301, `/post/${slug}`);
}
