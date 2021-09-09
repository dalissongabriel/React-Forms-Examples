import React from 'react'
import { Container } from './components/Container'
import { GlobalStyle } from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Formulário</h1>
      </Container>
    </>
  )
}

export default App
