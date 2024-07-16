import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'
import Loading from "./loading";
import PostList from "../blog/PostList";  

export default function Posts() {
  const data = [{
    id: 1,
    name: "val"
  }, 
  {
    id: 2,
    name: "dave"
  }
];
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Loading />
      </Suspense>
      <br />
      <Suspense fallback={<p>Loading weather...</p>}>
        <Loading />
      </Suspense>
      <br />
      <PostList posts = {data} />
    </section>
  )
}