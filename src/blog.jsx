import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;

	width: 1000px;
	min-height: 100vh;
	margin: 0 auto;
	background-color: #fff;
`;
const Content = styled.div`
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
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая стотья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
