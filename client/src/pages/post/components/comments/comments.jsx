import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components/comment';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';
import { PROP_TYPE, ROLE } from '../../../../constants';
import PropTypes from 'prop-types';

const CommentsContainer = ({className, comments, postId}) => {
	const [newComment, setNewComment] = useState('');
	const userRole = useSelector(selectUserRole);


	const dispatch = useDispatch();

	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({target}) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						onClick={() =>
							onNewCommentAdd(postId, newComment)
						}
					/>
				</div>
			)}
			<div className="comments">
				{comments.map(({id, author, content, publishedAt}) => (
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
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;

		& textarea {
			width: 550px;
			height: 120px;
			resize: none;
			font-size: 18px;
			padding: 10px;
			border: 1px solid #ffffff;
		}
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
