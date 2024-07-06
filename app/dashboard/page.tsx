import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'
import Loading from "./loading";
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Loading />
      </Suspense>
      <br />
      <Suspense fallback={<p>Loading weather...</p>}>
        <Loading />
      </Suspense>
    </section>
  )
}