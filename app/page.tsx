

export default async function Home() {
  const post = await fetchPost({ postID: 1 });

  return (
    <>
      <div>
        <div>Title: {post.title}</div>
        <div>Content: {post.content}</div>
      </div>
    </>
  );
}

async function fetchPost({ postID }: { postID: number }) {
 
  const baseUrl = process.env.APP_URL;

  try {
    const response = await fetch(`${baseUrl}/api/posts/${postID}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const role = await response.json();
    return role;
  } catch (error) {
    console.error("Error fetching engineer role:", error);
    return null;
  }
}
