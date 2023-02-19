export const prerender = true;
import { redirect } from '@sveltejs/kit';
export async function GET() {
	throw redirect(301, '/gallery');
}
