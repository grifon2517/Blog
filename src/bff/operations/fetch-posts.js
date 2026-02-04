import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils/get-comments-count';

export const fetchUsers = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	};
};
