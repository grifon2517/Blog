import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { useDispatch } from 'react-redux';
import { Authorization, Registration, Users, Post } from './pages';
import { useLayoutEffect } from 'react';
import { setUser } from './action';
import styled from 'styled-components';
import { Modal } from './components/modal/modal';

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
	padding: 120px 0 20px;
	justify-content: center;

	align-items: center:
`;

const H2 = styled.h2`
	text-align: center;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

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
					<Route path="/posts" element={<div>Новая стотья</div>} />
					<Route path="/posts/:id" element={<Post />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
