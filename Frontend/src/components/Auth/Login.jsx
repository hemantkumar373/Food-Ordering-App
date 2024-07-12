import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(userName, password);
	};
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-bold text-center text-black'>
					Login
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base text-black label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input text-black bg-white input-bordered h-10'
							value={userName}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-black label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input bg-white text-black input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline text-black hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div className="flex flex-col">
						<button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;