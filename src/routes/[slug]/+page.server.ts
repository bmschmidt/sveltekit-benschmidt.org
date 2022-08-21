import { pages } from '$lib/markdown';

export async function GET({ params }) {
  const matches = pages.filter(d =>
    d.slug === params.slug
  ).filter( d => d.type !== 'post')
  if (matches.length) {
    const this_post = matches[0]
    console.log({this_post})
    return {
      status: 200,
      body: {...this_post}
    }
  } else {
    return {
      status: 404,
      body: "Page not found"
    }
  }
}