import styled from 'styled-components';
import { Icon } from '../../../../../../components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							size="18px"
							margin="0 0 0 10px"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="comment-text">{content}</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							size="18px"
							margin="0 0 0 10px"
							onClick={() => {}}
						/>{' '}
						{publishedAt}
					</div>
				</div>
			</div>
			<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={() => {}} />
		</div>
	);
};

// Стили
export const Comment = styled(CommentContainer)`
	display: flex;
	align-items: flex-start;
	margin: 20px 0 0 0;
	width: 593px;
	max-width: 700px;

	& .comment {
		width: 600px;
		min-height: 100px;
		border: 1px solid #000;
		border-radius: 8px;
		padding: 15px;
		background-color: #f9f9f9;
		flex-grow: 1;
	}

	& .information-panel {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	& .author {
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 14px;
	}

	& .comment-text {
		padding: 10px 0;
		font-size: 14px;
		line-height: 1.4;
		min-height: 50px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 12px;
		color: #666;
	}
`;
