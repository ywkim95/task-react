/**
 * Image loading helpers
 */

export type ProgressiveResult = {
  url: string
  quality: 'small' | 'large'
}

// Preload image util
export function loadImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(url)
    img.onerror = () => reject(new Error('failed to load: ' + url))
    img.src = url
  })
}
