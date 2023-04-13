// import { useContext , useState, useEffect} from "react"
// import { NavLink } from "react-router-dom"
// import { myContext } from "../context"
// import Modal from "./modals/MyModal"
// import RegComponent from "./RegComponent"
// import RegModal from "./modals/RegModal"
// import LoginModal from "./modals/loginModal"
// import { Api } from "../api"
// import UseRefreshToken from "./auth/UseRefreshToken"
// import Nav from "./nav/Nav"


// function Home() {
//   const { user, showModal, loginModal } = useContext(myContext)
//   const [data, setData] = useState()

//   useEffect(() => {
//     try {
//       Api.get('').then((data) => setData(data.data))
//       // console.log(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }, [data])

//   return (
//     <Nav>
//       <div className="h-screen bg-gray-100 w-screen p-2 overflow-hidden">
//         <section> Welcome home </section>
//         <UseRefreshToken />

//         {showModal && <RegModal />}
//         {loginModal && <LoginModal />}
//       </div>
//     </Nav>
//   )
// }

// export default Home