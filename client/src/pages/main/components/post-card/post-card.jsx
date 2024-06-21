import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								inactive={true}
								id="fa-calendar-o"
								margin="0 10px 0 0"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								inactive={true}
								id="fa-comment-o"
								margin="0 5px 0 0"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;
	display: flex;
	flex-direction: column;
	margin: 20px;
	border: 1px solid #ffffff;

	& img {
		display: block;
		width: 100%;
	}

	& .post-card-footer {
		border-top: 1px solid #ffffff;
		padding: 5px;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 5px;

		& .published-at,
		.comments-count {
			display: flex;
			align-items: center;
		}
	}

	& h4 {
		margin: 0;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
