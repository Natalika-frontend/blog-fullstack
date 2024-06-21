import { Icon } from '../../../../components';
import styled from 'styled-components';
import { TableRow } from '../table-row/table-row';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../../../constants';
import { request } from "../../../../utils";

const UserRowContainer = ({
							  className,
							  id,
							  login,
							  registeredAt,
							  roleId: userRoleId,
							  roles,
							  onUserRemove,
						  }) => {
	const [selectedRoleId, setSelectedRoleId] = useState(Number(userRoleId));
	const [initialRoleId, setInitialRoleId] = useState(Number(userRoleId));

	const onRoleChange = ({target}) => {
		setSelectedRoleId(Number(target.value));
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', {roleId: newUserRoleId}).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column"></div>
				<select value={selectedRoleId} onChange={onRoleChange}>
					{roles.map(({id: roleId, name: roleName}) => (
						<option key={roleId} value={roleId}>
							{roleName}
						</option>
					))}
				</select>
				<Icon
					id="fa-floppy-o"
					margin="0 0 0 10px"
					disabled={isSaveButtonDisabled}
					onClick={() => onRoleSave(id, selectedRoleId)}
				/>
			</TableRow>
			<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUserRemove}/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	align-items: center;
	margin-top: 10px;

	& select {
		font-size: 16px;
		padding: 5px;
	}
`;

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
