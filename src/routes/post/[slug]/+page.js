export const prerender = true;
export async function load({ params, fetch }) {
	const slug = params.slug;
	const article = await fetch(`/post/${slug}/raw.json`).then((d) => d.json());
	return {
		html: article.html,
		attributes: article.attributes
	};
}
