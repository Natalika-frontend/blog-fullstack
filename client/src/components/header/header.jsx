import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Description = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Советы для писателя
			<br />
			Творческое письмо
			<br />
			Идеи и вдохновение
		</Description>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 10px 17px -13px #ffffff;
	background-color: #000000;
	z-index: 10;
`;
