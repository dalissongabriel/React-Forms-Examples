import React from 'react'
import { Container } from './components/Container'
import { Form } from './components/Form'
import { GlobalStyle } from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Formulário</h1>
        <Form>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            id="name"
            type="text"
            required
            placeholder="Informe seu nome"
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder="Informe seu email"
          />
          <input type="submit" value="Enviar" />
          <button type="button">Cancelar</button>
        </Form>
      </Container>
    </>
  )
}

export default App
