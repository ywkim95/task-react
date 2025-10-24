/*
  Delay controller for mock API.
  - Supports fixed delay (ms) and random delay within [min, max].
  - Configurable via setters or environment variables (Vite import.meta.env as fallback):
      VITE_MOCK_DELAY_MS, VITE_MOCK_DELAY_MIN_MS, VITE_MOCK_DELAY_MAX_MS
*/

export type DelayConfig =
  | { mode: 'fixed'; ms: number }
  | { mode: 'random'; min: number; max: number }

let config: DelayConfig = (() => {
  const fixed = Number(import.meta?.env?.VITE_MOCK_DELAY_MS)
  const min = Number(import.meta?.env?.VITE_MOCK_DELAY_MIN_MS)
  const max = Number(import.meta?.env?.VITE_MOCK_DELAY_MAX_MS)
  if (!Number.isNaN(fixed) && fixed >= 0) return { mode: 'fixed', ms: fixed }
  if (!Number.isNaN(min) && !Number.isNaN(max) && min >= 0 && max >= min) return { mode: 'random', min, max }
  return { mode: 'fixed', ms: 50 }
})()

export function setDelayConfig(next: DelayConfig) {
  config = next
}

export function getDelayConfig(): DelayConfig {
  return config
}

export function delayPromise<T = void>(value?: T): Promise<T> {
  const ms = config.mode === 'fixed' ? config.ms : rand(config.min, config.max)
  return new Promise((resolve) => setTimeout(() => resolve(value as T), ms))
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
