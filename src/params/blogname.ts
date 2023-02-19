export const blogs = ['post', 'sappingattention', 'posts', 'prochronism'];

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return blogs.includes(param);
}
