// import React, { useEffect, useState, useContext } from 'react';
// import { Api } from '../api';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import logo from '../assets/logo.png';
// import { NavLink } from 'react-router-dom';
// import illustration from '../assets/login-illustration.png';
// import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// import { myContext } from '../context';
// import { useNavigate } from 'react-router-dom';

// function Login() {
// 	const [show, setShow] = useState('password');
// 	const [data, setData] = useState({})
// 	const [errormsg, setErrormsg] = useState(null);
// 	// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// 	const loginSchema = Yup.object().shape({
// 		email: Yup.string().email('Provide a valid email').required(),
// 		password: Yup.string()
// 			.required('Password is required')
// 			.min(5, 'Password should be a minimum 5 characters')
// 			.max(16, 'Password should not be more than 16 characters long'),
	
// 	});
// 	const { user, setUser, isLoggedIn } = useContext(myContext)
// 	const initials = {
// 		email: '',
// 		password: '',
// 	};

// 	const navigate = useNavigate()

// 	const handleLogin = async (values) => {
// 		try {
// 			const log = await Api.post(
// 				'auth/login',
// 				JSON.stringify({ email: values.email, password: values.password }),
// 				{
// 					headers: {
// 						'Content-Type': 'application/json',
// 						'Access-Control-Allow-Origin': '*'
// 					},
					
// 				}
// 			)
// 			setUser({ rt: JSON.stringify(log.data.refresh_token), at: log.data.access_token })
// 			navigate('/dashboard')
			
// 		} catch (error) {
// 			if(error.response.status === 403) return setErrormsg('invalid credentials')
// 			setErrormsg('Login failed. Please try again')
// 			return errormsg
// 		}

		
// 	};


// 	let myformik = useFormik({
// 		initialValues: initials,
// 		validationSchema: loginSchema,
// 		onSubmit: handleLogin,
// 	});

// 	return (
// 		<section className="flex flex-col md:flex-row h-screen w-screen h-[calc(h-screen - h-7)]">
// 			<div className="h-screen md:w-[60%] p-4 px-4 md:px-20">
// 				<NavLink to="/">
// 					<img src={logo} alt="Kejepay image" />{' '}
// 				</NavLink>
// 				<div className="mt-7">
// 					{' '}
// 					<h3> Login to Kejepay</h3>
					
// 					{errormsg ? <p className=' text-red-500 h-12  p-4 '> {errormsg} </p> : null} 
// 					<form onSubmit={myformik.handleSubmit}>
// 						<input
// 							type="email"
// 							name="email"
// 							id="email"
// 							autoComplete="off"
// 							placeholder="Email"
// 							className="p-4 w-[100%] rounded-full border-2 mt-6 md:mt-12"
// 							{...myformik.getFieldProps('email')}
// 						/>
// 						{myformik.errors.email && myformik.touched.email ? (
// 							<small className="text-red-500"> {myformik.errors.email} </small>
// 						) : null}

// 						<div className="relative">
// 							<input
// 								type={show}
// 								name="password"
// 								id="password"
// 								autoComplete="off"
// 								placeholder="Password"
// 								className="p-4 w-[100%] rounded-full border-2 mt-6 md:mt-12"
// 								{...myformik.getFieldProps('password')}
// 							/>
// 							<div className=" absolute right-10 bottom-4">
// 								{' '}
// 								{show === 'password' ? (
// 									<button type="button" onClick={() => setShow('text')}>
// 										{' '}
// 										<AiOutlineEye />{' '}
// 									</button>
// 								) : (
// 									<button type="button" onClick={() => setShow('password')}>
// 										<AiOutlineEyeInvisible />{' '}
// 									</button>
// 								)}{' '}
// 							</div>
// 						</div>

// 						{myformik.errors.password && myformik.touched.password ? (
// 							<small className="text-red-500">
// 								{' '}
// 								{myformik.errors.password}{' '}
// 							</small>
// 						) : null}

// 						<small className="text-[#7725C9] mt-4 float-right">
// 							<NavLink to="/reset"> Forgot password? </NavLink>
// 						</small>
// 						<button
// 							type="submit"
// 							className="rounded-full bg-[#7725C9] text-white p-4 w-[100%] mt-6 md:mt-12">
// 							{' '}
// 							Login
// 						</button>

// 						<small className="mt-4 float-right">
// 							{' '}
// 							Don't have an account yet?{' '}
// 							<span className="">
// 								<NavLink to="/register" className="text-[#7725C9]">
// 									{' '}
// 									Register{' '}
// 								</NavLink>
// 							</span>{' '}
// 						</small>
// 						<br />

// 						<br />
// 					</form>
// 				</div>
// 			</div>
// 			<div className="md:bg-[#7725C9] hidden md:flex flex-col h-screen w-[100%] md:w-[40%] p-4 gap-4 content-center justify-center align-middle">
// 				<img
// 					src={illustration}
// 					alt="Ill"
// 					className="h-[70%] justify-center content-center"
// 				/>
// 				<h3 className="text-white text-center font-extrabold ">
// 					Make your business dealings transparent{' '}
// 				</h3>
// 				<p className="text-white text-center">
// 					Do business and buy things from anywhere or anyone with no fears of
// 					shady or scam dealings.
// 				</p>
// 			</div>
// 		</section>
// 	);
// }

// export default Login;
