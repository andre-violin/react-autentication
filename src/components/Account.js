import React from 'react'

import ContextoUsuario from './ContextoUsuario'
import { PasswordForgetForm} from './PasswordForget'
import PasswordChangeForm from './PasswordChange'
import comAutorizacao from './comAutorizacao'

const AccountPage = () => 
  <ContextoUsuario>
    {usuarioAutenticado => 
      <div>
        <h1>Conta: {usuarioAutenticado.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </ContextoUsuario>

const condicaoAutorizacao = (usuarioAutenticado) => !!usuarioAutenticado
export default comAutorizacao(condicaoAutorizacao)(AccountPage)