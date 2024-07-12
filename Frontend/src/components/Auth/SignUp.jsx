import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		userName: "",
		password: "",
	});

	const { loading, signup } = useSignup();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	}
	return (
		<div className='flex flex-col items-center shadow-md justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-black text-center'>
					Sign Up
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base text-black label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='Name' className='w-full input bg-white text-black input-bordered  h-10' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base text-black label-text'>Username</span>
						</label>
						<input type='text' placeholder='Username' className='w-full bg-white text-black input input-bordered h-10' value={inputs.userName} onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} />
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-black label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input bg-white text-black input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<Link to='/login' className='text-sm hover:underline text-black hover:text-blue-600 mt-2 inline-block'>
						Already have an account?
					</Link>

					<div className='flex flex-col'>
						<button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;