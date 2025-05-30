import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Btn, BtnSalvar } from '../../styles'
import * as enums from '../../utils/enums/tarefa'

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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
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
            <Btn onClick={() => setEstaEditando(true)}>Editar</Btn>
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
