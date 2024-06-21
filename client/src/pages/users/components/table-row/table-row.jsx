import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid #c36b99' : 'none')};
	padding: 8px;

	& > div {
		padding: 0 10px;
		display: flex;
	}

	& .login-column {
		width: 170px;
	}

	& .registered-at-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
