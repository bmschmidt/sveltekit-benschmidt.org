/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return /^(post|sappingattention)$/.test(param);
}
