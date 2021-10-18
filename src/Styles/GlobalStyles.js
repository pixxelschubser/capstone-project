import { createGlobalStyle } from 'styled-components';
import './Fonts/Montserrat.css';

const GlobalStyles = createGlobalStyle`
	:root {
		--white: rgba(255,255,255,1);
		--grey: rgba(210,210,210,1);
		--black: rgba(15,15,15,1);
		--red: rgba(209,0,38,1);
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: 1.5;
		font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	}

	body {
		height: 100vh;

		color: var(--black);

		background-image: linear-gradient(rgb(218,218,218) 0%, rgb(255,255,255) 100%);
		background-repeat: no-repeat;

		scroll-behavior: smooth;
	}

	#root {
		height: 100%;
	}
`;

export default GlobalStyles;
