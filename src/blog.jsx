import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Authorization, Registration, Users, Post } from './pages';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;

	width: 1000px;
	min-height: 100vh;
	margin: 0 auto;
	background-color: #fff;
`;
const Page = styled.div`
	flex: 1;
	padding: 120px 0;
	justify-content: center;

	align-items: center:
`;

const H2 = styled.h2`
	text-align: center;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Page>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая стотья</div>} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
