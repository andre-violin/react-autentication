import React from 'react'

import comAutorizacao from './comAutorizacao'

const HomePage = () => 
  <div>
    <h1>Home Page</h1>
    <p>A Home Page é acessível para todos que estiver autenticado.</p>
  </div>

const condicaoAutorizacao = (usuarioAutenticado) => !!usuarioAutenticado

export default comAutorizacao(condicaoAutorizacao)(HomePage)