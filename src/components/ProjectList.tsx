import { useEffect, useState } from 'react'
import { getProjects, type Project } from '../api/mock'

export type ProjectListProps = {
  selectedId?: string
  onSelect?: (id: string) => void // TODO 05: (TS) onSelect 의 시그니처를 더 안전하게 개선해보세요. string 보다 구체적인 타입 사용 고려
}

export function ProjectList({ selectedId, onSelect }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProjects().then((ps) => setProjects(ps)).finally(() => setLoading(false))
  }, [])

  if (loading && projects.length === 0) return <div>Loading projects...</div>

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <button
              style={{ fontWeight: selectedId === p.id ? 'bold' : 'normal' }}
              onClick={() => onSelect?.(p.id)}
            >
              {p.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
