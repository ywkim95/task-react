import { useEffect, useMemo, useState } from 'react'
import { searchUsers, type User } from '../api/mock'
import { createDebounced } from '../utils/debounce'

export function SearchUser() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  // TODO 08: (lodash debounce) 입력이 빠르게 바뀌어도 API 호출이 과도하게 발생하지 않도록 debounce 하세요.
  // 요구사항:
  //  - utils/createDebounced 를 사용해서 입력 변경시 300ms 이후에 searchUsers 호출
  //  - 빈 문자열일 땐 검색하지 않고 결과를 비웁니다.
  //  - cleanup 시 cancel 호출
  useEffect(() => {
    let active = true
    async function run() {
      if (!q.trim()) {
        setResults([])
        return
      }
      setLoading(true)
      const users = await searchUsers(q)
      if (active) setResults(users)
      setLoading(false)
    }
    run()
    return () => {
      active = false
    }
  }, [q])

  return (
    <div>
      <h2>User Search</h2>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search user" />
      {loading && <span> Loading...</span>}
      <ul>
        {results.map((u) => (
          <li key={u.id}>
            {u.name} <small>({u.email})</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
