import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Desc value={descricao} />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <S.BtnSalvar>Salvar</S.BtnSalvar>
            <S.BtnCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BtnCancelarRemover>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setEstaEditando(true)}>Editar</S.Btn>
            <S.BtnCancelarRemover>Remover</S.BtnCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
