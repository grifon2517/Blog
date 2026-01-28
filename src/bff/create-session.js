import { removeComment } from './session/remove-comment';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	let session = {
		logOut() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
		// ничего не делать
	}

	return session;
};
