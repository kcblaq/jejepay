import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Api } from '../api/axios';
import toast, {Toaster} from 'react-hot-toast'


function ComingSoon() {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  async function sendEmail(e) {
    e.preventDefault();

    console.log(email)
   
      const isValid = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

      if (!isValid) {

        toast(" Please enter a valid email address")
      } else {
        
        try {
          await Api.post("/notify",
            JSON.stringify({ email }),
            {
              headers: {
                'Content-Type': 'application/json'
              },

            }

          )
          toast("We recieved your email")
          setEmail('')
        } catch (error) {

          toast("Seems we already have your detail")
       }
      }
      
    
  }
  return (
    <div className="bg-[#BBC4D9] h-screen w-screen flex flex-col ">
      <img src={logo} alt='logo' className=' w-40 p-4' />

      <div className="flex flex-col mt-32 md:mt-52 items-center p-2">
        <h1 className='text-4xl font-bold'> Launching Soon </h1>
        <p className='font-mono text-center'> Kejepay is an escrow service to ensure trust for every of your online transaction</p>
        <h1 className='text-2xl font-bold'> Notify me on launch </h1>
        <form className='flex xs:flex-col md:flex-row'>
          <input type="email" className="bg-white text-black border-1 rounded-lg mt-2 px-4 py-2" placeholder='Enter Email' value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='button' className='bg-black text-white rounded-lg px-4 py-2 float-right mt-2' onClick={sendEmail}> NOTIFY ME</button>
</form>
      </div>
      <Toaster/>
    </div>
  );
}

export default ComingSoon;