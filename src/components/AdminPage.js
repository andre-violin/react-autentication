import React from 'react'

import comAutorizacao from './comAutorizacao'
import ContextoUsuario from './ContextoUsuario'

const AdminPage = () =>
    <ContextoUsuario.Consumer>
        {usuarioAutenticado =>
            <div>
                <h1>Página Administrativa</h1>
                <p>Área Restrita! Apenas usuários com autorização de ADMIN.</p>
            </div>
        }
    </ContextoUsuario.Consumer>

const condicaoAutorizacao = (usuarioAutenticado) =>
    !!usuarioAutenticado && usuarioAutenticado.role === 'ADMIN'
export default comAutorizacao(condicaoAutorizacao)(AdminPage)
