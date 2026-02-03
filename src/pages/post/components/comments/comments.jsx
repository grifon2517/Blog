import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from './components';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { selectUserId } from '../../../../selectors';
import { addCommentAsync } from '../../../../action/add-comment-async';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="80px 0 0 10px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 624px;
	margin: 10px auto;

	& .new-comment {
		width: 600px;
		display: flex;
		margin: 20px 0 0;
		height: 120px;
	}

	& .new-comment textarea {
		width: 600px;
		resize: none;
		font-size: 18px;
	}
`;
