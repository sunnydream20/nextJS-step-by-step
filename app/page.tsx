'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
      <button type="button" className='btn btn-danger p-l' onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </>
  )
}