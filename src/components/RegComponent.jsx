import React, { useState } from 'react'
import { Api} from '../api'

function RegComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) return setError('Please enter a valid email address')
      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){return setError('Please enter a valid email address')}
      if (!password) return setError('Please enter password')
     
      const response = await Api.post('/auth/signup', JSON.stringify({ email, password }), {
        headers: { 'Content-Type': 'application/json' },
        // withCredentials: true
      })
      console.log(response.data)
      const at = response?.data?.access_token;
      const rt = response?.data?.refresh_token;
      console.log(rt, at)
    } catch (err) {
      if (!err.response) {
        setError("No server response")
      } else if (err.response === 400) {
        setError("Missing email address or password")
      } else {
        return setError("Registration failed")
      }
    }
    setEmail('')
    setPassword('')
    setSuccess(true)

}

  return (
    <section className='min-h-[50%] rounded-md flex justify-center items-center p-8 flex-col'>
      <section >
        {success && <h5 className='text-green-500'> Succesfully registered</h5>}
        {error && <h5 className='text-red-500'> { error}</h5>}
      
      </section>
      <form onSubmit={(e) => e.preventDefault() } className=''>
        <label htmlFor="email" className='text-white'> Email:</label>
        <br />
        <input type="text" id="email"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-2 rounded-md'
        />
        <br/>
        <label htmlFor="password" className='text-white'> Password:</label>
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-2 rounded-md' />
        <br />
        <button onClick={HandleSubmit } className='mt-2 float-right text-white border-2 border-white p-2 rounded-md'> Submit </button>
      </form>
    </section>
  )
}

export default RegComponent