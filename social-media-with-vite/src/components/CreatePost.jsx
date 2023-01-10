import { useContext, useRef, useState } from "react";
import { PostContext } from "../App";
const CreatePost = ({ posts, setPosts, user }) => {
	const [content, setContent] = useState("");
	const [image, setImage] = useState("");
	const imageRef = useRef();
	const { dispatch } = useContext(PostContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		// object short hand if we have key same as value
		// we can use object short hand
		const newPost = { content, image, user, id: Date.now() };
		// before reducer
		// object spread to append what we have already
		// setPosts([newPost, ...posts]);

		// after we implement reducer to add a new post
		dispatch({ type: "ADD_NEW_POST", payload: { post: newPost } });

		//input controlled value
		setContent("");
		//clear out the file
		imageRef.current.value = "";
	};

	return (
		<div>
			<h1>Create new post</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="post content"
					onChange={(event) => setContent(event.target.value)}
					value={content}
				/>
				<input
					ref={imageRef}
					type="file"
					onChange={(event) => setImage(event.target.files[0])}
				/>
				<button type="submit">Submit</button>
			</form>

			{/* to show our state is updating display the values down */}

			{/* <p>{content}</p>
			{image && (
				<img
					src={URL.createObjectURL(image)}
					alt="post"
					style={{ width: 100 }}
				/>
			)} */}
		</div>
	);
};

export default CreatePost;
