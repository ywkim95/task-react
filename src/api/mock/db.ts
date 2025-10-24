// In-memory DB and operations for the coding test
// NOTE: This is fully implemented so the app runs; TODOs will be placed in consumers/tests.

export type Project = { id: string; name: string }
export type Task = { id: string; projectId: string; title: string; done: boolean }
export type User = { id: string; name: string; email: string }

const id = () => Math.random().toString(36).slice(2, 10)

const projects: Project[] = [
  { id: 'p1', name: 'Website Revamp' },
  { id: 'p2', name: 'Mobile App' },
  { id: 'p3', name: 'Internal Tools' },
]

const tasks: Task[] = [
  { id: id(), projectId: 'p1', title: 'Set up CI', done: false },
  { id: id(), projectId: 'p1', title: 'Landing page copy', done: true },
  { id: id(), projectId: 'p2', title: 'Push notifications', done: false },
  { id: id(), projectId: 'p3', title: 'Admin dashboard', done: false },
]

const users: User[] = [
  { id: 'u1', name: 'Alice Kim', email: 'alice@example.com' },
  { id: 'u2', name: 'Bob Lee', email: 'bob@example.com' },
  { id: 'u3', name: 'Charlie Park', email: 'charlie@example.com' },
  { id: 'u4', name: 'David Choi', email: 'david@example.com' },
]

export const db = {
  projects,
  tasks,
  users,
}

export function getProjects(): Project[] {
  return [...projects]
}

export function getTasksByProject(projectId: string): Task[] {
  return tasks.filter((t) => t.projectId === projectId).map((t) => ({ ...t }))
}

export function createTask(projectId: string, title: string): Task {
  const t: Task = { id: id(), projectId, title, done: false }
  tasks.push(t)
  return { ...t }
}

export function toggleTaskDone(taskId: string): Task | undefined {
  const t = tasks.find((x) => x.id === taskId)
  if (!t) return undefined
  t.done = !t.done
  return { ...t }
}

export function searchUsers(query: string): User[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return users.filter((u) =>
    u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
  )
}

export function getUserProfile(userId: string): User | undefined {
  const u = users.find((u) => u.id === userId)
  return u ? { ...u } : undefined
}
