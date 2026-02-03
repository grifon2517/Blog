// import { addComment, getPost, getComments } from '../api';
// import { sessions } from '../sessions';
// import { ROLE } from '../constants';

// export const addPostComment = async (hash, userId, postId, content) => {
// 	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

// 	const access = await sessions.access(hash, accessRoles);
// 	if (!access) {
// 		return {
// 			error: 'Доступ запрещен',
// 			res: null,
// 		};
// 	}

// 	await addComment(userId, postId, content);

// 	const post = await getPost(postId);

// 	const comments = await getComments(postId);

// 	return {
// 		error: null,
// 		res: {
// 			...post,
// 			comments,
// 		},
// 	};
// };
// Добавьте getUsers в импорты!
import { addComment, getPost, getComments, getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await addComment(userId, postId, content);

	const post = await getPost(postId);
	const comments = await getComments(postId);

	// --- НАЧАЛО ИСПРАВЛЕНИЯ ---
	// 1. Получаем всех пользователей (как в fetchPost.js)
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
