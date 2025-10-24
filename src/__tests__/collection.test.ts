import { describe, expect, test } from 'vitest'
import { countDone, type SimpleTask } from '../utils/collection'

const sample: SimpleTask[] = [
  { id: '1', title: 'A', done: false },
  { id: '2', title: 'B', done: true },
  { id: '3', title: 'C', done: false },
]

describe('utils/collection', () => {
  test('countDone returns correct counters', () => {
    const c = countDone(sample)
    expect(c).toEqual({ total: 3, done: 1, pending: 2 })
  })

  test.todo('TODO 01: pluckTitles 구현')
  test.todo('TODO 02: highPriorityFirst 구현')
  test.todo('TODO 03: groupByDone 구현')
})
