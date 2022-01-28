import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%
	max-width: 1920px;
	flex-direction: column;

	@media(max-width: ${({ theme }) => theme.mobile}) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
`