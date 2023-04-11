import React, { useContext } from "react";
import Modal from "react-overlays/Modal";
import { myContext } from "../../context";

const MyModal = (props) => {
//   const {setShowModal} = useContext(myContext)

 return (
     <section className="fixed top-10 right-0 bottom-0 left-0 bg-gray-300 flex justify-center rounded-md min-w-[150px]">
         <div className=" h-max mt-4 items-center bg-blue-500 rounded-">
            <div className="p-4 text-white"> {props.title} </div>
             <div className="p-4 border-t-2 border-t-slate-100 border-b-slate-100 border-b-2 ">
               {props.body}
            </div>
            <div className="p-4">
                <button className="button text-white" onClick={props.close}> 
                    Close
                </button>
            </div>
            
        </div>

    </section>
 )
};

export default MyModal;
