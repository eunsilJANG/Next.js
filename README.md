# 할 일 목록 (투두리스트)

Next.js, React, Tailwind CSS로 만든 아주 간단한 할 일 목록(투두리스트) 예제입니다.

---

## 기술 스택

- **Next.js 15**  
  React 기반의 최신 웹 프레임워크로, 파일 기반 라우팅, 서버 컴포넌트, 빠른 빌드 및 배포 환경을 제공합니다.  
  SSR(서버사이드 렌더링), SSG(정적 사이트 생성), API 라우트 등 다양한 렌더링 방식을 지원합니다.  
  프로젝트의 전체적인 구조와 라우팅, 빌드 및 배포를 담당합니다.

- **React 19**  
  사용자 인터페이스(UI)를 컴포넌트 단위로 개발할 수 있게 해주는 라이브러리입니다.  
  상태 관리, 이벤트 처리 등 동적인 UI 구현에 사용됩니다.  
  본 프로젝트에서는 할 일 목록의 상태 관리와 UI 렌더링에 활용됩니다.

- **TypeScript**  
  자바스크립트에 타입 시스템을 도입한 언어로, 코드의 안정성과 가독성을 높여줍니다.  
  컴파일 타임에 오류를 미리 잡아주어 유지보수와 협업에 유리합니다.  
  본 프로젝트의 모든 컴포넌트와 로직에 타입을 적용하여 안정적으로 개발하였습니다.

- **pnpm**  
  빠르고 효율적인 패키지 매니저로, 의존성 설치 속도가 빠르고 디스크 공간을 절약할 수 있습니다.  
  모노레포 환경에서도 효율적으로 패키지를 관리할 수 있습니다.

---

## 디자인 라이브러리

- **Tailwind CSS 4**  
  유틸리티 퍼스트(utility-first) CSS 프레임워크로, 미리 정의된 클래스를 조합하여 빠르게 UI를 만들 수 있습니다.  
  반응형 디자인, 다크모드, 커스텀 테마 등 최신 웹 디자인 트렌드를 쉽게 적용할 수 있습니다.  
  본 프로젝트에서는 입력창, 버튼, 리스트, 반응형 레이아웃 등 모든 UI 요소의 스타일링에 Tailwind CSS를 사용하였습니다.  
  별도의 CSS 파일 작성 없이, 클래스명만으로 일관된 디자인을 구현할 수 있습니다.

---

## 디자인 및 구현 방식

- **반응형 디자인**  
  Tailwind CSS의 유틸리티 클래스를 활용해 모바일, 태블릿, 데스크톱에서 모두 잘 보이도록 구현했습니다.
- **상태 관리**  
  React의 useState 훅을 사용하여 할 일 목록 상태를 관리합니다.
- **접근성**  
  폼 요소에 포커스 스타일을 적용하여 키보드 접근성도 고려했습니다.

---

## 폴더 구조 (상세 설명)

```
app/
  ├─ page.tsx           # 메인 페이지. 할 일 목록 UI와 로직이 모두 이 파일에 구현되어 있습니다.
  ├─ layout.tsx         # 전체 페이지의 레이아웃(HTML 구조, 폰트 등 공통 설정)
  ├─ globals.css        # Tailwind CSS 및 전역 스타일 정의

public/
  └─ ...                # 정적 파일(이미지, favicon 등)을 넣는 폴더

.vercel/                # Vercel 배포 관련 설정 폴더 (자동 생성)
  ├─ README.txt         # Vercel 프로젝트 안내 파일
  └─ project.json       # Vercel 프로젝트 메타데이터

package.json            # 프로젝트 의존성, 스크립트 등 주요 설정 파일
package-lock.json       # 의존성 버전 고정 및 설치 정보(자동 생성)
postcss.config.mjs      # PostCSS 및 Tailwind CSS 플러그인 설정 파일
next.config.ts          # Next.js 프로젝트의 커스텀 설정 파일
README.md               # 프로젝트 설명 파일 (이 문서)
tsconfig.json           # TypeScript 컴파일러 옵션 및 경로 설정 파일
next-env.d.ts           # Next.js 타입 지원 파일(자동 생성)

```

---


