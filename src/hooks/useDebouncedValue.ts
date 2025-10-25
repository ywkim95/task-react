import { useEffect, useMemo, useState } from "react";
import { createDebounced } from "../utils/debounce";

/**
 * 사용자의 입력값을 debounce 해서 노이즈를 줄이는 훅
 */
// TODO 06: (중급) useDebouncedValue 훅을 완성하세요.
// 요구사항:
//  - 입력값 value 를 받아서, 지정된 wait 시간 이후에만 변경되는 debounced 값을 반환합니다.
//  - 내부적으로 utils/createDebounced 를 사용하세요.
//  - cleanup 시에는 debounce cancel 이 호출되어야 합니다.
//  - 타입은 제네릭<T> 으로 유지하세요.
export function useDebouncedValue<T>(value: T, wait = 300) {
  const [debounced, setDebounced] = useState<T>(value);

  // 구현하세요.
  // 힌트: useMemo 로 debouncer 를 만들고, useEffect 로 value 변화를 구독하세요.
  const debouncer = useMemo(
    () => createDebounced((val: T) => setDebounced(val), wait),
    [wait]
  );

  useEffect(() => {
    debouncer.call(value);

    return () => {
      debouncer.cancel();
    };
  }, [value, debouncer]);

  return debounced;
}
