import { authorize, fetchUsers, fetchRoles, register, logout } from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
};
