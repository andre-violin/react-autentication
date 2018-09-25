import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../constants/routes'

const SignUpPage = () =>
  <div>
    <h1>Criar usuário</h1>
    <SignUpForm />
  </div>

const ESTADO_INICIAL = {
  usuario: '',
  email: '',
  senhaUm: '',
  senhaDois: '',
  error: null
}

const propriedadeChave = (propriedade, valor) => () => (
  {
    [propriedade]: valor
  }
)
class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...ESTADO_INICIAL }
  }

  onSubmit = (event) => {

  }

  render() {
    const { usuario, email, senhaUm, senhaDois, error } = this.state
    usuario
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={usuario}
          onChange={event => this.setState(propriedadeChave('usuario', event.target.value))}
          type="text"
          placeholder="Nome Completo"
        />
        <input
          value={email}
          onChange={event => this.setState(propriedadeChave('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          value={senhaUm}
          onChange={event => this.setState(propriedadeChave('senhaUm', event.target.value))}
          type="password"
          placeholder="Senha"
        />
        <input
          value={senhaDois}
          onChange={event => this.setState(propriedadeChave('senhaDois', event.target.value))}
          type="password"
          placeholder="Confirme a Senha"
        />

        <button type="submit">Cadastrar</button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

const SignUpLink = () =>
  <p>
    Não tem uma conta?
    {''}
    <Link to={routes.SIGN_UP}>Cadastrar</Link>
  </p>

export default SignUpPage

export {
  SignUpForm,
  SignUpLink
}