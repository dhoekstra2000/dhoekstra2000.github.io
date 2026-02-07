import { getCollection } from "astro:content";

export async function getAllBlogPosts() {
    const posts = await getCollection("blog");
    const sortedByDateDesc = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
    return sortedByDateDesc;
}