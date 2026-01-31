import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #b1aeae;

	&:hover {
		cursor: pointer;
	}
`;
