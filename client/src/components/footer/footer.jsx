import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&units=metric&lang=ru&appid=752d17e5b0e2f7fb7038e8dbe4d992e7').then((res) => res.json()).then(({name, main, weather}) => {
			setCity(name);
			setTemperature(Math.round(main.temp));
			setWeather(weather[0].description)
		});
	}, []);

	return (
		<footer className={className}>
			<div>
				<div>Блог Геллы Грачёвой</div>
				<div>gella.graben@gmail.com</div>
			</div>
			<div>
				<div>{city}, {new Date().toLocaleString('ru', {day: "numeric", month: "long" })}</div>
				<div>{temperature} градусов, {weather}</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #000000;
	box-shadow: 0px -10px 17px -13px #ffffff;
	font-weight: bold;
`;
