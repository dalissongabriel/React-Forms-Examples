import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Container } from './components/Container'
import { Form } from './components/Form'

import { GlobalStyle } from './styles/global'

const schema = yup.object().shape({
  name: yup.string().required('O campo "Nome" é obrigatório.'),
  email: yup.string().email('O "Email" informado não é válido.').required('O campo "Email" é obrigatório.')
})

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  })
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
          <p className="error-message">{errors.name?.message}</p>
          <label htmlFor="email">Email:</label>
          <input
            {...register('email')}
            id="email"
            type="email"
            required
            autoComplete="off"
            placeholder="Informe seu email"
          />
          <p className="error-message">{errors.email?.message}</p>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Cancelar"/>
        </Form>
      </Container>
    </>
  )
}

export default App
