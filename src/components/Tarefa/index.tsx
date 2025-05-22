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
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Desc value={descricao} />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <S.Btn>Salvar</S.Btn>
            <S.Btn onClick={() => setEstaEditando(false)}>Cancelar</S.Btn>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setEstaEditando(true)}>Editar</S.Btn>
            <S.Btn>Remover</S.Btn>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
