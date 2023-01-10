import { useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { createContext } from "react";
import postReducer from "./postReducer";

export const UserContext = createContext();
export const PostContext = createContext({
	posts: [], //initialPostState
});

function App() {
	const [user, setUser] = useState("Mcdev");
	const [posts, setPosts] = useState([]);

	// use the context of the post
	const initialPostState = useContext(PostContext);
	//use Reducer returns two of array elements
	const [state, dispatch] = useReducer(postReducer, initialPostState);

	// to change the title of the page
	useEffect(() => {
		document.title = user ? `${user}'s Feed` : "Please Login";
	}, [user]);

	// if user is not logged in redirect to login
	if (!user) return <Login setUser={setUser} />;

	return (
		<PostContext.Provider value={{ state, dispatch }}>
			<UserContext.Provider value={user}>
				<div className="App">
					{/* to greet our user and make logout if he want so we will pass down the user and setUser to do so. */}
					<Header user={user} setUser={setUser} />
					<CreatePost user={user} posts={posts} setPosts={setPosts} />
					<PostList posts={state.posts} user={user} />
					{/* {posts.map((post, i) => (
				<>
					<p>{post.content}</p>
					{post.image && (
						<img
							style={{ width: 100 }}
							src={URL.createObjectURL(post.image)}
							alt=""
						/>
					)}
				</>
			))} */}
				</div>
			</UserContext.Provider>
		</PostContext.Provider>
	);
}
export default App;
