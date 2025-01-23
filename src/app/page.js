export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl text-indigo-500 font-semibold">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.slice(0, 20).map((post) => (
          <li key={post.id}>
            <a
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}