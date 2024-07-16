import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.name}`}>{post.name}</Link>
        </li>
      ))}
    </ul>
  )
}