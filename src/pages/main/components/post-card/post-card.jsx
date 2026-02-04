import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostCardContainer = ({ className, id, title, imageUrl, publishedAt, commentsCOunt }) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h3>{title}</h3>
					<div className="post-card-inf">
						<div className="published-at">
							<Icon inactive={true} id="fa-calendar-o" margin="0 10px 0 0" />
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon inactive={true} id="fa-comment-o" margin="0 10px 0 0" />
							{commentsCOunt}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)``;
