import styled from "styled-components";
import myLogo from "../../../../images/logo.png";
import { Link } from "react-router-dom";

const Img = styled.img`
	margin-top: 13px;
`;

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 16px;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({className}) => (
	<Link className={className} to="/">
		<Img src={myLogo}/>
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>Геллы Грачевой</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -21px;
`;
