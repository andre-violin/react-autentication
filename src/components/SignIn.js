import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { SignUpLink } from './SignUp'
import { auth } from '../firebase'
import * as routes from '../constants/routes'

const SignInPage = ({ history }) =>
  <div>
    <h1>Autenticar usuário</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const ESTADO_INICIAL = {
  email: '',
  senha: '',
  error: null
}

const propriedadeChave = (propriedade, valor) => () => (
  {
    [propriedade]: valor
  }
)
class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...ESTADO_INICIAL }
  }

  onSubmit = (evento) => {
    const { email, senha } = this.state

    const { history } = this.props

    auth.autenticacaoComEmailESenha(email, senha)
      .then( () => {
        this.setState({ ...ESTADO_INICIAL })
        history.push(routes.HOME)
      })
      .catch( erro => {
        this.setState(propriedadeChave('error', erro))
      } )

      evento.preventDefault()
  }

  render() {
    const { email, senha, error } = this.state
    const invalido = senha === '' ||
                     email == ''
    return (
      <form onSubmit={this.onSubmit}>
        
        <input
          value={email}
          onChange={event => this.setState(propriedadeChave('email', event.target.value))}
          type="text"
          placeholder="Email"
        />

        <input
          value={senha}
          onChange={event => this.setState(propriedadeChave('senha', event.target.value))}
          type="password"
          placeholder="Senha"
        />

        <button disabled={invalido} type="submit">Entrar</button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export default withRouter(SignInPage)

export {
  SignInForm
}