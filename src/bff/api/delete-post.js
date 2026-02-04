export const deletePost = async (postId) => {
	fetch(`http://localhost:3000/posts/${postId}`, {
		method: 'DELETE',
	});
};
