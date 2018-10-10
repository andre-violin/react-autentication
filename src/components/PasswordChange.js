import React, { Component } from 'react'

import { auth } from '../firebase'

const ESTADO_INICIAL = {
  senhaUm: '',
  senhaDois: '',
  error: null
}

const propriedadeChave = (propriedade, valor) => () => (
  {
    [propriedade]: valor
  }
)
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...ESTADO_INICIAL }
  }

  onSubmit = (evento) => {
    const { senhaUm } = this.state

    auth.alterarSenha(senhaUm)
      .then(usuarioAutenticado => {
        this.setState({ ...ESTADO_INICIAL })
      })
      .catch( erro => {
        this.setState(propriedadeChave('error', erro))
      } )

      evento.preventDefault()
  }

  render() {
    const { senhaUm, senhaDois, error } = this.state
    const invalido = senhaUm !== senhaDois || 
                     senhaUm === '' || 
                     senhaDois === ''
    return (
      <form onSubmit={this.onSubmit}>
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

export default PasswordChangeForm
