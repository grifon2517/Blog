import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUserRole } from '../../selectors';
import { ERROR } from '../../constants';
import { checkAccess } from '../../utils/check-access';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);
	console.log('--- PrivateContent Check ---');
	console.log('Required access:', access);
	console.log('User role:', userRole);
	console.log('Received serverError:', serverError);
	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	console.log('Access Error:', accessError);

	console.log('--------------------------');
	const error = serverError || accessError;
	console.log('Final error:', error);
	return error ? <Error error={error} /> : children;
};
