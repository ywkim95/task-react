/**
 * Debounce helper around lodash.debounce with better TypeScript.
 */
import debounce from 'lodash/debounce'

// TODO 04: (기초+TS) 주어진 함수 fn 을 debounce 해서 반환하는 createDebounced 를 구현하세요.
// 요구사항:
//  - 반환 객체는 { call, cancel, flush } 형태여야 합니다.
//  - call 은 원래 함수의 인자 타입을 그대로 받아야 합니다.
//  - wait 기본값은 300ms 로 하세요.
//  - lodash/debounce 를 사용하세요.
// 힌트: ReturnType<typeof debounce> 의 메서드들을 참고하세요.
export function createDebounced<Args extends any[]>(
  fn: (...args: Args) => void,
  wait = 300
) {
  // 구현하세요.
  const noop = (..._args: Args) => {}
  return {
    call: noop,
    cancel: () => {},
    flush: () => {},
  }
}
