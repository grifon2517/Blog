import { deleteComment, getPost, getComments, getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	const users = await getUsers();

	// 2. "Обогащаем" комментарии именами авторов (как в fetchPost.js)
	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);
		return {
			...comment,
			author: user.login, // Добавляем поле author
		};
	});
	// --- КОНЕЦ ИСПРАВЛЕНИЯ ---

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor, // <-- Отправляем "обогащенные" комментарии
		},
	};
};
