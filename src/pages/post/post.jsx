import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { PostContent, Comments } from './components';
import { selectPost } from '../../selectors';
import { loadPostAsync } from '../../action/load-post-async';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	console.log(post);
	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);

	return (
		<div className={className}>
			<>
				<PostContent post={post} />
				<Comments comments={post.comments} />
			</>
		</div>
	);
};

export const Post = styled(PostContainer)``;
