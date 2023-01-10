import Post from "./Post";

const PostList = ({ posts }) => {
	return posts.map((post) => <Post key={post.id} {...post} />);
};

export default PostList;
