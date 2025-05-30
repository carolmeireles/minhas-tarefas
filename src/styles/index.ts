import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Btn } from '../components/Tarefa/styles'

const EstiloGlobal = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Roboto, sans-serif;
    list-style: none;
	}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const Campo = styled.input`
  border: 2px solid #666;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`

export const BtnSalvar = styled(Btn)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
