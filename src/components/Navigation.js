import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../constants/routes'

const Navigation = () =>
  <header>
    <h1>React Authentication</h1>
    <nav>
      <Link to={routes.SIGN_IN}>Sign In</Link>
      <Link to={routes.LANDING}>Página Inicial</Link>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.ACCOUNT}>Conta</Link>
    </nav>
  </header>

  export default Navigation