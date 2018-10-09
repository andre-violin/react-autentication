import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { auth } from '../firebase'
import * as routes from '../constants/routes'

const SignUpPage = ({ history }) =>
  <div>
    <h1>Criar usuário</h1>
    <SignUpForm history={history} />
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

  onSubmit = (evento) => {
    const { usuario, email, senhaUm, senhaDois } = this.state

    const { history } = this.props

    auth.criarUsuarioComEmailESenha(email, senhaUm)
      .then(usuarioAutenticado => {
        this.setState({ ...ESTADO_INICIAL })
        history.push(routes.HOME)
      })
      .catch( erro => {
        this.setState(propriedadeChave('error', erro))
      } )

      evento.preventDefault()
  }

  render() {
    const { usuario, email, senhaUm, senhaDois, error } = this.state
    const invalido = senhaUm !== senhaDois || 
                     senhaUm === '' || 
                     senhaDois === '' ||
                     usuario == ''
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

        <button disabled={invalido} type="submit">Cadastrar</button>

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

export default withRouter(SignUpPage)

export {
  SignUpForm,
  SignUpLink
}