import React from 'react'

import { firebase } from '../firebase'
import ContextoUsuario from './ContextoUsuario'

const comAutenticacao = (Component) => {
    class ComAutenticacao extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                usuarioAutenticado : null
            }
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged( usuarioAutenticado => {
                console.log(usuarioAutenticado)
                usuarioAutenticado
                    ? this.setState( { usuarioAutenticado })
                    : this.setState( { usuarioAutenticado: null })
            })
        }

        render() {
            const { usuarioAutenticado } = this.state
            return (
                <ContextoUsuario.Provider value={usuarioAutenticado}>
                    <Component {...this.props} />
                </ContextoUsuario.Provider>
            )
        }
    }
    return ComAutenticacao
}
    export default comAutenticacao