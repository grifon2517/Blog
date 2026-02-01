// import { useDispatch } from 'react-redux';
import { H2 } from '../../components';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { Content } from '../../components';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState();
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				console.log(usersRes, rolesRes);
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<>
					<H2>Пользователи</H2>
					<div>
						<TableRow>
							<div className="login-column">Логин</div>
							<div className="registered-at-column">Дата регистрации</div>
							<div className="role-column">Роль</div>
						</TableRow>
					</div>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 570px;
`;
