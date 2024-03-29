import { Post, db, like } from "astro:db"

export async function GET({ params, request }) {
    const post = await db.select().from(Post).where(like(Post.endpoint, params.endpoint))
    return new Response(`${post[0].content}`)
}