# 할 일 목록 (투두리스트)

Next.js, React, Tailwind CSS로 만든 아주 간단한 할 일 목록(투두리스트) 예제입니다.
---

## 기술 스택

- **Next.js 15**  
  React 기반의 최신 프레임워크로, 파일 기반 라우팅과 서버 컴포넌트 등 최신 기능을 지원합니다.
- **React 19**  
  컴포넌트 기반 UI 개발을 위한 라이브러리입니다.
- **TypeScript**  
  자바스크립트에 타입을 추가하여 코드의 안정성과 생산성을 높입니다.
- **Tailwind CSS 4**  
  유틸리티 퍼스트(utility-first) CSS 프레임워크로, 빠르고 일관된 스타일링이 가능합니다.
- **pnpm**  
  빠르고 효율적인 패키지 매니저입니다.

---

## 디자인 및 구현 방식

- **반응형 디자인**  
  Tailwind CSS의 유틸리티 클래스를 활용해 모바일, 태블릿, 데스크톱에서 모두 잘 보이도록 구현했습니다.
- **상태 관리**  
  React의 useState 훅을 사용하여 할 일 목록 상태를 관리합니다.
- **접근성**  
  폼 요소에 포커스 스타일을 적용하여 키보드 접근성도 고려했습니다.

---

## 폴더 구조

```
app/
  ├─ page.tsx        # 메인 페이지. 할 일 목록 UI와 로직이 모두 이 파일에 구현되어 있습니다.
  ├─ layout.tsx      # 전체 페이지의 레이아웃(HTML 구조, 폰트 등 공통 설정)
  ├─ globals.css     # Tailwind CSS 및 전역 스타일 정의
public/
  └─ ...            # 정적 파일(이미지, favicon 등)을 넣는 폴더
package.json        # 프로젝트 의존성, 스크립트 등 설정 파일
README.md           # 프로젝트 설명 파일 (이 문서)
tailwind.config.js  # Tailwind CSS 커스텀 설정 파일 (존재할 경우)
tsconfig.json       # TypeScript 설정 파일
```

---


