import { useEffect, useState } from 'react';
import { PostCard } from './components/post-card/post-card';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			{posts.map(({ id, title, imageUrl, publishedAt, commentsCOunt }) => (
				<PostCard
					key={id}
					id={id}
					title={title}
					imageUrl={imageUrl}
					publishedAt={publishedAt}
					commentsCOunt={commentsCOunt}
				/>
			))}
		</div>
	);
};

export const Main = styled(MainContainer)``;
