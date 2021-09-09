import styled from 'styled-components'

export const Form = styled.form`
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  border-radius: 0.25rem;
  background-color: var(--background-light);
  border: 1px dashed var(--textos);

  label {
    display: inline-block;
    width: 100%;
    font-size: 1.2rem;
    color: var(--textos);
  }
  input[type=reset] {
    margin-left: 1rem;
    width: 30%;
    background-color: var(--background);
    border: 2px solid var(--titulos);
    color: var(--titulos);
    font-size: 1.2rem;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
  }
  input {
    background-color: var(--shape-background);
  }
  input[type=text],input[type=email] {
    width: 100%;
    padding: 1rem 2rem;
    border: 1px solid var(--titulos);
    border-radius: 0.25rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    color: var(--textos);
  }

  input[type=submit] {
    background-color: var(--titulos);
    padding: 1rem 2rem;
    border: 2px solid var(--titulos);
    border-radius: 0.25rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
    color: var(--background);
    width: 50%;
  }
`
