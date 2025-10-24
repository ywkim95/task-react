import { useState } from 'react'
import './App.css'
import { ProjectList } from './components/ProjectList'
import { TaskBoard } from './components/TaskBoard'
import { SearchUser } from './components/SearchUser'
import { ProgressiveImage } from './components/ProgressiveImage'

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 24, padding: 24 }}>
      <aside>
        <ProjectList selectedId={selectedProjectId} onSelect={setSelectedProjectId} />
        <div style={{ marginTop: 24 }}>
          <SearchUser />
        </div>
      </aside>
      <main>
        <TaskBoard projectId={selectedProjectId} />
        <div style={{ marginTop: 24 }}>
          <h2>Preview Image (Progressive)</h2>
          <ProgressiveImage small={'/vite.svg'} large={'/src/assets/react.svg'} alt="logo" />
        </div>
      </main>
    </div>
  )
}

export default App
