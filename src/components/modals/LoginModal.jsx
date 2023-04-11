import React, { useContext } from 'react'
import { myContext } from '../../context'
import MyModal from './MyModal'
import Login from '../Login'

function LoginModal() {
    const { setLoginModal } = useContext(myContext)
    return (
        <div>
            <MyModal title='Login' body={<Login />} close={()=> setLoginModal(false)} />
        </div>
      )
    }

export default LoginModal