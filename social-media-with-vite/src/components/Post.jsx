import { useContext } from "react";
import { PostContext, UserContext } from "../App";

const Post = ({ image, content, user, id }) => {
	const userValue = useContext(UserContext);
	const { dispatch } = useContext(PostContext);

	const isCurrentUser = user === userValue;

	const handleDeletePost = () => {
		dispatch({ type: "DELETE_POST", payload: { postId: id } });
	};

	return (
		<>
			<h3>{content}</h3>
			{image && (
				<img
					style={{ width: 200, height: 100, objectFit: "cover" }}
					src={URL.createObjectURL(image)}
					alt="post image"
				/>
			)}
			<p style={{ color: isCurrentUser && "green" }}>{user}!</p>
			{isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
		</>
	);
};

export default Post;
