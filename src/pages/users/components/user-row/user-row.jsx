import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';

const UserRowContainer = ({
	className,
	login,
	registredAt,
	roleId: userRoleId,
	roles,
}) => {
	const dispatch = useDispatch();

	const onRoleCHange = () => {};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registere-at-column">{registredAt}</div>

				<div className="role-column">
					<select value={userRoleId} onChange={onRoleCHange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						onClick={() => dispatch(/*TODO */)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				onClick={() => dispatch(/*TODO */)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
