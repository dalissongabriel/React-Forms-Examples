import React from 'react'
import { useForm } from 'react-hook-form'
import { Container } from './components/Container'
import { Form } from './components/Form'

import { GlobalStyle } from './styles/global'

const App = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Formulário</h1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            required
            placeholder="Informe seu nome"
          />
          <label htmlFor="email">Email:</label>
          <input
            {...register('email')}
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
