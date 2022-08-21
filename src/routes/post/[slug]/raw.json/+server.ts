import { posts } from '$lib/markdown';

export async function get({ params }) {
  const this_post = posts.filter(d => d.slug === params.slug)[0]
  if (!this_post) {
    return {
      status: 404,
      body: 'Not found',
    }
  }
  return {
    status: 200,
    body: {...this_post}
  }
}