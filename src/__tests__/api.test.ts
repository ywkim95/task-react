import { describe, expect, test } from 'vitest'
import { getProjects, getTasksByProject } from '../api/mock'

describe('api/mock', () => {
  test('getProjects returns seeded projects', async () => {
    const ps = await getProjects()
    expect(Array.isArray(ps)).toBe(true)
    expect(ps.length).toBeGreaterThanOrEqual(1)
  })

  test('getTasksByProject returns tasks for given project', async () => {
    const ps = await getProjects()
    const first = ps[0]
    const ts = await getTasksByProject(first.id)
    expect(ts.every((t) => t.projectId === first.id)).toBe(true)
  })

  test.todo('TODO 07: getDashboard 가 Promise.all 로 구현되어 프로젝트 별 요약을 반환해야 합니다')
})
