import React , {useContext} from 'react'
import { myContext } from '../../context'
import RegComponent from '../RegComponent'
import MyModal from './MyModal'


function RegModal() {
  const {setShowModal} = useContext(myContext)
    
  return (
    <div>
      <MyModal title='Register' body={<RegComponent/>} close={()=> setShowModal(false)} />
    </div>
  )
}

export default RegModal