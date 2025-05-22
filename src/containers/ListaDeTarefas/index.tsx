import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Assistir a aula',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar boleto',
    descricao: 'Baixar a fatura',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para igreja',
    descricao: 'Acordar cedo no domingo',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
