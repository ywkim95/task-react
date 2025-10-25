/**
 * Collection utilities for typical task/project data manipulation.
 * 일부는 구현되어 있고, 일부는 TODO 로 남겨두었습니다. (쉬운 문제부터 시작)
 */
import _ from "lodash";

export type SimpleTask = {
  id: string;
  title: string;
  done: boolean;
  priority?: "low" | "medium" | "high";
};

export type Counters = { total: number; done: number; pending: number };

export function countDone(tasks: SimpleTask[]): Counters {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pending = total - done;
  return { total, done, pending };
}

// TODO 01: (기초) 모든 task 의 title 만 배열로 반환하세요. lodash 나 Array.prototype.map 중 아무거나 사용 가능.
export function pluckTitles(tasks: SimpleTask[]): string[] {
  // 예: [{title: 'a'}, {title: 'b'}] -> ['a','b']
  // 구현하세요.
  return tasks.map((task) => task.title);
}

// TODO 02: (기초) priority 가 'high' > 'medium' > 'low' 순으로 정렬되도록 구현하세요.
// priority 가 없으면 가장 낮은 우선순위로 간주합니다.
export function highPriorityFirst(tasks: SimpleTask[]): SimpleTask[] {
  const order = { high: 0, medium: 1, low: 2 } as const;
  // lodash.sortBy 또는 Array.prototype.sort 를 사용할 수 있습니다.
  // 구현하세요.

  tasks.sort((a, b) => {
    if (order[a.priority!] > order[b.priority!]) {
      return 1;
    }
    if (order[a.priority!] < order[b.priority!]) {
      return -1;
    }
    return 0;
  });
  return tasks;
}

// TODO 03: (기초) done 상태로 groupBy 하여 { true: SimpleTask[]; false: SimpleTask[] } 형태를 만드세요.
export function groupByDone(
  tasks: SimpleTask[]
): Record<"true" | "false", SimpleTask[]> {
  // 힌트: lodash.groupBy 사용 가능
  // 구현하세요.
  return { true: [], false: [] };
}
