import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<>
			<Div>
				<div>Hello Blog</div>
				<div>
					<i className="fa fa-rss-square"></i>
					<div>123</div>
					<p>`So... Let`s get started`</p>
				</div>
			</Div>
		</>
	);
};
