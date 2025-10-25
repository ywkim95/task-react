import { useEffect, useState } from "react";
import { loadImage, type ProgressiveResult } from "../utils/image";

/**
 * 작은 이미지와 큰 이미지를 순차/동시 로딩하여 사용자 경험을 높이는 훅
 */
// TODO 09: (중급) useProgressiveImage 훅을 완성하세요.
// 요구사항:
//  - smallUrl, largeUrl 을 받아 progressiveLoad 를 호출하고 최종 url 과 quality 를 반환합니다.
//  - 로딩 중 상태(loading)도 반환하세요.
//  - small 과 large 둘 중 먼저 로드되는 이미지가 반영되도록 해야 합니다.
//  - 컴포넌트가 unmount 되면 메모리 누수를 방지하세요 (최신 호출만 반영).
export function useProgressiveImage(smallUrl: string, largeUrl: string) {
  const [state, setState] = useState<ProgressiveResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    Promise.race([
      loadImage(smallUrl).then(() => ({
        url: smallUrl,
        quality: "small" as const,
      })),
      loadImage(largeUrl).then(() => ({
        url: smallUrl,
        quality: "large" as const,
      })),
    ])
      .then((result) => {
        if (isMounted) {
          setState(result);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [smallUrl, largeUrl]);

  return { url: state?.url ?? "", quality: state?.quality ?? "small", loading };
}
