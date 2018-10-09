import React from 'react'

import { auth } from '../firebase'

const SignOutButton = () => 
  <button type="button" onClick={auth.sair}>Sair</button>

export default SignOutButton