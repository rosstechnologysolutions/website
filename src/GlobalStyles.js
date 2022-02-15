import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;300;400;600;700&display=swap');

	* {
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
	}

	body {
		backgound: ${({ theme }) => theme.colors.body};
		color: hsl(192, 100% 9%);
		margin: 0;
	}

	p {
		opacity: 0.6;
		line-height: 1.5;
	}

	h1 {
		font-weight: 400;
		opacity: 0.9;
		line-height: 1.5;
		-webkit-text-stroke: 0.1px black;
	}

	img {
		max-width: 100%;
	}
`

export default GlobalStyles