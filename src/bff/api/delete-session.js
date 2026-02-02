export const deleteSession = async (sessionId) => {
	fetch(`http://localhost:3000/users/${sessionId}`, {
		method: 'DELETE',
	});
};
