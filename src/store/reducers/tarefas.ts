import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao: 'Ler o livro',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      descricao: 'Rever aula 2',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Estudar React',
      descricao: 'Praticar o useEffect',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
      //tarefaParaEditar = action.payload
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaBusca = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )
      if (tarefaBusca) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer
