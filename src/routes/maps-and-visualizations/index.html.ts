export async function get() {
  return {
    headers: { Location: '/gallery' },
    status: 301
  }
}