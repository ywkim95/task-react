# 프론트엔드 채용 코딩테스트 안내 (Vue3 / TypeScript)

- 테스트 시간은 1시간이며, TODO 주석을 따라가며 기능을 완성해 주세요.
- 각 TODO를 완료할 때마다 commit을 남겨 주세요.
- 본 프로젝트를 Fork하여 작업 후, 완료되면 Pull Request를 생성해 주세요.
- 필요할 경우 TODO 외의 기존 코드를 수정하거나 보완하셔도 괜찮습니다.

## 실행 방법
- 개발 서버: npm run dev
- 테스트(터미널): npm run test:run

## Mock API 지연 시간 설정 (옵션)
로컬 메모리 기반 Mock API를 사용합니다. 호출 지연은 고정 혹은 랜덤으로 설정 가능합니다.
- 고정 지연: VITE_MOCK_DELAY_MS=200
- 랜덤 지연: VITE_MOCK_DELAY_MIN_MS=50, VITE_MOCK_DELAY_MAX_MS=400 
 
설정 방법 예시:
- .env 파일에 위 키를 추가하거나,
- 터미널에서 즉시 지정: VITE_MOCK_DELAY_MS=200 npm run dev

## 문제 목록
각 TODO 옆의 파일을 열고 주석 내용을 따라 구현하세요. (`src/__tests__` 아래 test 를 작성하면서 진행하셔도 됩니다)

- [x] TODO 00 Fork 후 로컬에서 `npm install` 및 README.md 파일을 읽고 이해
- [ ] TODO 01 (기초) — src/utils/collection.ts: pluckTitles 구현
- [ ] TODO 02 (기초) — src/utils/collection.ts: highPriorityFirst 구현
- [ ] TODO 03 (기초) — src/utils/collection.ts: groupByDone 구현
- [ ] TODO 04 (기초+TS) — src/utils/debounce.ts: createDebounced 구현 ({ call, cancel, flush })
- [ ] TODO 05 (TS) — src/components/ProjectList.tsx: onSelect 시그니처를 더 안전한 타입으로 개선
- [ ] TODO 06 (중급) — src/hooks/useDebouncedValue.ts: debounce 값 반환 훅 구현
- [ ] TODO 07 (중급) — src/api/mock/index.ts: getDashboard 를 Promise.all 로 구현
- [ ] TODO 08 (lodash debounce) — src/components/SearchUser.tsx: 입력 디바운스 적용 및 cancel 처리
- [ ] TODO 09 (중급) — src/hooks/useProgressiveImage.ts: progressiveLoad 연동 훅 구현
- [ ] TODO 10 (리팩토링) — src/components/TaskBoard.tsx: 진행률 계산을 순수 함수로 추출 (예: src/utils/progress.ts)
- [ ] TODO 11 (로직개선) — src/components/TaskBoard.tsx: task 생성 시 trim/중복 방지 로직 추가
- [ ] TODO 12 (CSS) — src/styles/taskBoard.css: .task-done 스타일 개선 (회색, 취소선 등)
- [ ] TODO 13 (접근성) — src/components/TaskBoard.tsx: 입력 필드에 aria-* 속성 추가
- [ ] TODO 14 (CSS/UX) — src/components/ProgressiveImage.tsx: small→large 페이드 전환 효과

추가 팁:
- lodash 사용 가능 (컬렉션 조작, 정렬, debounce 등)
- 테스트는 React 의존성 없이 작성된 샘플이 있으며, 일부는 test.todo 로 표시되어 있습니다.

## 폴더 구조 개요
- src/api/mock: 로컬 메모리 기반 API (지연 설정 지원)
- src/utils: 컬렉션/디바운스/이미지 로딩 유틸
- src/hooks: 커스텀 훅 (디바운스, 프로그레시브 이미지)
- src/components: ProjectList, TaskBoard, SearchUser, ProgressiveImage
- src/__tests__: React 비의존 유닛 테스트 (Vitest)
