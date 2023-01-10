import { useState } from "react";
const Login = ({ setUser }) => {
	const [username, setUserName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser(username);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="username"
					onChange={(event) => setUserName(event.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
