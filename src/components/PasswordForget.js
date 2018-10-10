import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../firebase'
import * as routes from '../constants/routes'

const PasswordForgetPage = ({ history }) =>
  <div>
    <h1>Redefinir a Senha</h1>
    <PasswordForgetForm />
  </div>

const ESTADO_INICIAL = {
  email: '',
  error: null
}

const propriedadeChave = (propriedade, valor) => () => (
  {
    [propriedade]: valor
  }
)
class PasswordForgetForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...ESTADO_INICIAL }
  }

  onSubmit = (evento) => {
    const { email } = this.state


    auth.redefinirSenha(email)
      .then( () => {
        this.setState({ ...ESTADO_INICIAL })
      })
      .catch( erro => {
        this.setState(propriedadeChave('error', erro))
      } )

      evento.preventDefault()
  }

  render() {
    const { email, error } = this.state
    const invalido = email == ''
    return (
      <form onSubmit={this.onSubmit}>
        
        <input
          value={email}
          onChange={event => this.setState(propriedadeChave('email', event.target.value))}
          type="text"
          placeholder="Email"
        />

        <button disabled={invalido} type="submit">Redefinir a senha</button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Esqueceu a senha?</Link>
  </p>

export default PasswordForgetPage

export {
  PasswordForgetForm,
  PasswordForgetLink
}