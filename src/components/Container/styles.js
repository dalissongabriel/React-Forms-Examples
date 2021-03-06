import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  color: var(--textos);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--titulos);
    font-family: 'Dancing Script';
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`
