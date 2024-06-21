import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../button/button';
import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole, } from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: #000000;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: 500;
`;

const ControlPanelContainer = ({className}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<StyledLink to="/login">Войти</StyledLink>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							onClick={onLogout}
							id="fa-sign-out"
							margin="0 0 0 10px"
						/>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
				/>
				{isAdmin && (
					<>
						{' '}
						<Link to="/post">
							<Icon id="fa-file-text-o" margin="10px 0 0 16px"/>
						</Link>
						<Link to="users">
							<Icon id="fa-users" margin="10px 0 0 16px"/>
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
