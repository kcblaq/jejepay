import { useContext } from 'react'
import { myContext } from '../context'

export function useAuth() {
    const { user} = useContext(myContext)
  return  useContext(myContext)
}

