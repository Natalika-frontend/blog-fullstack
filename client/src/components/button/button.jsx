import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	color: #000000;
	border: 1px solid #ffffff;
	border-radius: 3px;
	background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#dd9595')};
	text-align: center;
	align-content: center;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
