import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../constants/routes'
import SignOutButton from './SignOut'

const Navigation = ( { usuarioAutenticado } ) =>
<header>
<h1>React Authentication</h1>
    { usuarioAutenticado
        ? <NavegacaoAutenticado />
        : <NavegacaoNaoAutenticado />
    }
    </header>

const NavegacaoAutenticado = () =>
    <nav>
      <Link to={routes.LANDING}>Página Inicial</Link>
      <br />
      <Link to={routes.HOME}>Home</Link>
      <br />
      <Link to={routes.ACCOUNT}>Conta</Link>
      <br />
      <SignOutButton />
    </nav>

const NavegacaoNaoAutenticado = () =>
    <nav>
      <Link to={routes.SIGN_IN}>Entrar</Link>
      <br />
      <Link to={routes.LANDING}>Página Inicial</Link>
    </nav>
  
  export default Navigation