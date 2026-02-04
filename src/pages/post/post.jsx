import { useEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { PostContent, Comments, PostForm } from './components';
import { selectPost } from '../../selectors';
import { loadPostAsync } from '../../action/load-post-async';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/posts/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);

	return (
		<div className={className}>
			<>
				{/* <div>{post.title}</div> */}
				{isEditing ? (
					<PostForm post={post} />
				) : (
					<>
						<PostContent post={post} />
						<Comments comments={post.comments} postId={post.id} />
					</>
				)}
			</>
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
