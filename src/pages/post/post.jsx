import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { RESET_POST_DATA, loadPostAsync } from '../../action';
import { PostContent, Comments, PostForm } from './components';
import { selectPost } from '../../selectors';
import { Error } from '../../components';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const [error, setError] = useState(true);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsloading] = useState(true);
	const isEditing = useMatch('/posts/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsloading(false);
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
			setError(postData.error);
			setIsloading(false);
		});
	}, [dispatch, requestServer, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	return error ? (
		<Error error={error} />
	) : (
		<div className={className}>
			<>
				{isCreating || isEditing ? (
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
