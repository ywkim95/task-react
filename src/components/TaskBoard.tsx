import { useEffect, useMemo, useState } from 'react'
import {
  createTask,
  getTasksByProject,
  toggleTaskDone,
  type Task,
} from '../api/mock'
import '../styles/taskBoard.css'

export type TaskBoardProps = {
  projectId?: string
}

export function TaskBoard({ projectId }: TaskBoardProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (!projectId) {
      setTasks([])
      return
    }
    setLoading(true)
    getTasksByProject(projectId)
      .then((ts) => setTasks(ts))
      .finally(() => setLoading(false))
  }, [projectId])

  // TODO 10: (리팩토링) 아래 progress 계산 로직을 컴포넌트 외부의 순수 함수로 추출하세요.
  // 파일 예: src/utils/progress.ts -> export function calcProgress(tasks: Task[]) { ... }
  // 그런 다음 이 컴포넌트에서는 그 함수를 import 해서 사용하세요.
  const progress = useMemo(() => {
    const total = tasks.length
    const done = tasks.filter((t) => t.done).length
    return { total, done, percent: total === 0 ? 0 : Math.round((done / total) * 100) }
  }, [tasks])

  async function refresh() {
    if (!projectId) return
    const next = await getTasksByProject(projectId)
    setTasks(next)
  }

  async function handleToggle(id: string) {
    await toggleTaskDone(id)
    refresh()
  }

  async function handleCreate() {
    if (!projectId) return
    // TODO 11: (로직개선) title 을 trim 하고, 빈 문자열이면 생성하지 않도록 하세요.
    // 추가 요구: 같은 제목의 task 가 이미 있는 경우 생성하지 않도록 방지하세요. (lodash 사용 가능)
    await createTask(projectId, title)
    setTitle('')
    refresh()
  }

  if (!projectId) return <div>Select a project</div>

  return (
    <div>
      <h2>Tasks</h2>
      <div className="taskboard__progress" aria-label="progress">
        {progress.done}/{progress.total} ({progress.percent}%)
      </div>
      <div className="taskboard__create">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task title"
          // TODO 13: (접근성) 입력 필드에 적절한 aria-* 속성을 추가하세요.
        />
        <button onClick={handleCreate}>Add</button>
      </div>
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <ul className="taskboard__list">
          {tasks.map((t) => (
            <li key={t.id} className={t.done ? 'task-done' : undefined}>
              <label>
                <input type="checkbox" checked={t.done} onChange={() => handleToggle(t.id)} />
                {t.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
