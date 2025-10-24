import { useProgressiveImage } from '../hooks/useProgressiveImage'

export type ProgressiveImageProps = {
  small: string
  large: string
  alt?: string
}

export function ProgressiveImage({ small, large, alt }: ProgressiveImageProps) {
  const { url, quality, loading } = useProgressiveImage(small, large)

  // TODO 14: (CSS/UX) small -> large 전환 시 부드러운 페이드 효과를 추가하세요.
  //  - className 을 상태에 따라 다르게 주고, CSS transition 을 적용해보세요.
  return (
    <div>
      <img src={url} alt={alt} width={240} height={160} />
      <div style={{ fontSize: 12, opacity: 0.7 }}>
        quality: {quality} {loading ? '(loading...)' : ''}
      </div>
    </div>
  )
}
