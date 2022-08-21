export async function load({params, fetch}) {
  console.log(params.slug)
  if (params.slug === 'maps-and-visualizations') {
    return {
      redirect: '/gallery',
      status: 302
    }
  }

  const p = await fetch(`/${params.slug}.json`).then(r => r.json());
  return {
    status: 200,
    props: {
      html: p.html,
      slug: p.slug,
      attributes: p.attributes
    }
  }
}
