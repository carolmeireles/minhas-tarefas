import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BtnSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descOriginal.length > 0) {
      setDescricao(descOriginal)
    }
  }, [descOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Desc
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <BtnSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    titulo,
                    descricao,
                    prioridade,
                    status
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BtnSalvar>
            <S.BtnCancelarRemover
              onClick={() => {
                cancelarEdicao
              }}
            >
              Cancelar
            </S.BtnCancelarRemover>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setEstaEditando(true)}>Editar</S.Btn>
            <S.BtnCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtnCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
