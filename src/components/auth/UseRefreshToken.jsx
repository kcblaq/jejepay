import React from 'react'
import { useAuth } from '../../utils'

function UseRefreshToken() {
    const { setUser, user } = useAuth()
    console.log("Muna user m wuu: ",user)
  return (
    <div> Hello </div>
  )
}

export default UseRefreshToken