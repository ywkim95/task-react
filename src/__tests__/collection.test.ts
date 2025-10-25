import { describe, expect, test } from "vitest";
import {
  countDone,
  groupByDone,
  highPriorityFirst,
  pluckTitles,
  type SimpleTask,
} from "../utils/collection";

const sample: SimpleTask[] = [
  { id: "1", title: "A", done: false, priority: "low" },
  { id: "2", title: "B", done: true, priority: "high" },
  { id: "3", title: "C", done: false, priority: "medium" },
];

describe("utils/collection", () => {
  test("countDone returns correct counters", () => {
    const c = countDone(sample);
    expect(c).toEqual({ total: 3, done: 1, pending: 2 });
  });

  test("TODO 01: pluckTitles 구현", () => {
    const result = pluckTitles(sample);

    expect(result).toEqual(["A", "B", "C"]);
  });

  test("TODO 02: highPriorityFirst 구현", () => {
    const result = highPriorityFirst(sample);

    expect(result).toEqual([
      { id: "2", title: "B", done: true, priority: "high" },
      { id: "3", title: "C", done: false, priority: "medium" },
      { id: "1", title: "A", done: false, priority: "low" },
    ]);
  });
  test("TODO 03: groupByDone 구현", () => {
    const result = groupByDone(sample);

    expect(result).toEqual({
      true: [{ id: "2", title: "B", done: true, priority: "high" }],
      false: [
        { id: "3", title: "C", done: false, priority: "medium" },
        { id: "1", title: "A", done: false, priority: "low" },
      ],
    });
  });
});
