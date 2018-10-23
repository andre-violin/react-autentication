import React from 'react'
import { withRouter } from 'react-router-dom'

import ContextoUsuario from './ContextoUsuario'
import { firebase } from '../firebase'
import * as routes from '../constants/routes'

const comAutorizacao = (condicaoAutorizacao) => (Component) => {
    class ComAutorizacao extends React.Component {
        componentDidMount = () => {
            firebase.auth.onAuthStateChanged(usuarioAutenticado => {
                if (!condicaoAutorizacao(usuarioAutenticado)) {
                    this.props.history.push(routes.SIGN_IN)
                }
            })
        }

        render() {
            return (
                <ContextoUsuario.Consumer>
                    {usuarioAutenticado =>
                        usuarioAutenticado ? <Component {...this.props} /> : null}
                </ContextoUsuario.Consumer>
            )
        }
    }
    return withRouter(ComAutorizacao)
}

export default comAutorizacao