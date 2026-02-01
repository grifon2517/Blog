import {
	authorize,
	fetchUsers,
	fetchRoles,
	register,
	logout,
	updateUserRole,
	removeUser,
} from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
