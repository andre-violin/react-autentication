import { auth } from './firebase'

// criar um usuário (sign up)
export const criarUsuarioComEmailESenha = (email, senha) => 
  auth.createUserWithEmailAndPassword(email, senha)

// Autenticação com Email e Senha (sing in)
export const autenticacaoComEmailESenha = (email, senha) =>
  auth.signInWithEmailAndPassword(email, senha)

// Sair (sign out)
export const sair = () =>
  auth.signOut()

// Redefinir/resetar a senha
export const redefinirSenha = (email) =>
  auth.sendPasswordResetEmail(email)

// Alterar a senha atual
export const alterarSenha = (senha) =>
  auth.currentUser.updatePassword(senha)