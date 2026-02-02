import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServer, postId) => (dispatch) => {
	console.log(postId);
	requestServer('fetchPost', postId).then((postData) => {
		console.log(postData);
		dispatch(setPostData(postData.res));
	});
};
