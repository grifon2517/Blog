import { setPostData } from './set-post-data';

export const removeCommentAsync = (requestServer, id, postId) => (dispatch) => {
	requestServer('removePostComment', postId, id).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
