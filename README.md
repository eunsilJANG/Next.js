# NextPortfolio

최신 웹 기술로 구축된 모던하고 반응형 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **UI 라이브러리**: React 19
- **스타일링**: Tailwind CSS 4
- **언어**: TypeScript
- **패키지 매니저**: pnpm

## ✨ 주요 기능

- 🎨 Tailwind CSS를 활용한 모던하고 반응형 디자인
- ⚡ Next.js 15와 Turbopack으로 빠른 성능
- 📱 모바일 우선 반응형 디자인
- 🎯 부드러운 스크롤 네비게이션
- 🌈 아름다운 그라디언트와 애니메이션
- ♿ 접근성 중심 설계
- 🔍 SEO 최적화

## 🛠️ 시작하기

### 필수 요구사항

- Node.js 18+ 
- pnpm (권장) 또는 npm

### 설치 방법

1. 저장소를 클론합니다:
```bash
git clone <your-repo-url>
cd nextportfolio
```

2. 의존성을 설치합니다:
```bash
pnpm install
```

3. 개발 서버를 실행합니다:
```bash
pnpm dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 📁 프로젝트 구조

```
nextportfolio/
├── app/
│   ├── globals.css      # 전역 스타일과 Tailwind 임포트
│   ├── layout.tsx       # 루트 레이아웃 컴포넌트
│   └── page.tsx         # 홈페이지 컴포넌트
├── public/              # 정적 자산
├── package.json         # 의존성과 스크립트
└── README.md           # 이 파일
```

## 🎨 커스터마이징

### 색상
프로젝트는 그라디언트가 포함된 모던한 색상 팔레트를 사용합니다. 다음에서 색상을 커스터마이징할 수 있습니다:
- `app/globals.css` - CSS 변수
- `app/page.tsx` - Tailwind 클래스

### 콘텐츠
`app/page.tsx`의 콘텐츠를 포트폴리오에 맞게 업데이트하세요:
- 히어로 섹션 텍스트
- 기능/기술 스택
- 프로젝트 쇼케이스
- 연락처 정보

### 스타일링
모든 스타일링은 Tailwind CSS 클래스로 완료됩니다. 디자인은 완전히 반응형이며 모던한 웹 디자인 원칙을 따릅니다.

## 🚀 배포

### Vercel (권장)
1. 코드를 GitHub에 푸시합니다
2. 저장소를 Vercel에 연결합니다
3. 자동으로 배포됩니다

### 기타 플랫폼
프로젝트는 Next.js를 지원하는 모든 플랫폼에 배포할 수 있습니다:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 라이선스

이 프로젝트는 오픈 소스이며 [MIT 라이선스](LICENSE) 하에 제공됩니다.

## 🤝 기여하기

기여를 환영합니다! Pull Request를 자유롭게 제출해 주세요.

---

Next.js, React, Tailwind CSS로 ❤️을 담아 구축되었습니다
