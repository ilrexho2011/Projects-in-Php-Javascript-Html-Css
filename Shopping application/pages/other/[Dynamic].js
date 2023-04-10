import React from 'react'
import { useRouter } from 'next/router'
const Dynamic = () => {
    const router=useRouter()
    const { Dynamic } = router.query

  return <p>Post: {Dynamic}</p>
  
}

export default Dynamic