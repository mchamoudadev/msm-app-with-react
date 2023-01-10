/*reducer is a javascript function takes two arguments 
1-prevState = old Data
2-action = what we want to do for example we want to delete the post from or add newPost

action has a properties of type and paylod

1- type is the type of the action that we want to do
2- payload is the data that we want to add or change fro example 
when wen want to add new post we will pass data of the new post as payload
*/


const postReducer = (state, action) => {

    // we will switch statement to identify the cases
    switch (action.type) {
        case "ADD_NEW_POST": {
            const newPost = action.payload.post;
            return { posts: [newPost, ...state.posts] };
        }

        case "DELETE_POST": {
            const newPosts = state.posts.filter(post => post.id !== action.payload.postId);
            return { posts: newPosts };
        }

        default:
            return state;
    }

};

export default postReducer;