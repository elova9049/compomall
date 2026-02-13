# Murata 웹사이트 기술 명세서

## 1. 컴포넌트 아키텍처

### shadcn/ui 컴포넌트
- **Button**: CTA 버튼, 네비게이션 버튼
- **Input**: 검색 입력 필드
- **Select**: 카테고리/하위카테고리 선택
- **Card**: 솔루션 카드, 제품 카드
- **Sheet**: 모바일 네비게이션 메뉴
- **Separator**: 섹션 구분선

### 커스텀 컴포넌트
- **Header**: 고정 헤더 with 네비게이션
- **HeroSlider**: 자동 슬라이딩 배너
- **NewsSection**: 뉴스 목록
- **ProductSearch**: 제품 검색 필터
- **Footer**: 다중 열 푸터

## 2. 애니메이션 구현

### 라이브러리 선택
- **Framer Motion**: React 컴포넌트 애니메이션, 제스처
- **CSS Transitions**: 간단한 호버 효과

### 구현 세부사항

| 애니메이션 | 라이브러리 | 구현 방식 | 복잡도 |
|-----------|-----------|----------|--------|
| Hero 슬라이더 | Framer Motion | AnimatePresence + motion.div | 중간 |
| 섹션 페이드인 | Framer Motion | whileInView + viewport | 낮음 |
| 네비게이션 호버 | CSS | transform + transition | 낮음 |
| 버튼 호버 | CSS | brightness filter | 낮음 |
| 카드 호버 | CSS | box-shadow + transform | 낮음 |

### Framer Motion 설정
```typescript
// 섹션 페이드인
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

// 슬라이더 전환
const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 })
}
```

## 3. 프로젝트 구조

```
src/
├── sections/
│   ├── Header.tsx
│   ├── HeroSlider.tsx
│   ├── SearchBar.tsx
│   ├── NewsSection.tsx
│   ├── NewsletterSection.tsx
│   ├── TechArticlesSection.tsx
│   ├── ProductInfoSection.tsx
│   ├── SolutionsSection.tsx
│   ├── EventsSection.tsx
│   ├── SupportSection.tsx
│   ├── CorporateSection.tsx
│   ├── SocialShareSection.tsx
│   └── Footer.tsx
├── components/
│   └── ui/           # shadcn/ui components
├── hooks/
│   └── useScrollAnimation.ts
├── data/
│   └── content.ts    # 모든 콘텐츠 데이터
├── App.tsx
├── App.css
└── index.css
```

## 4. 의존성

### 필수 패키지
```bash
npm install framer-motion
npm install lucide-react
```

### 이미지 에셋
- Hero 슬라이드 이미지 (6개)
- 기술 아티클 배경
- 솔루션 카드 이미지
- 기업 정보 배경
- 제품 아이콘/이미지

## 5. 스타일 시스템

### Tailwind 설정
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'murata-red': '#E60012',
        'murata-dark': '#333333',
        'murata-gray': '#666666',
        'murata-light': '#F5F5F5',
        'murata-footer': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
}
```

## 6. 데이터 구조

### News Item
```typescript
interface NewsItem {
  id: string;
  date: string;
  title: string;
  url: string;
}
```

### Product Category
```typescript
interface ProductCategory {
  id: string;
  name: string;
  icon?: string;
  url: string;
}
```

### Hero Slide
```typescript
interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaUrl: string;
}
```

## 7. 성능 고려사항

- **이미지 최적화**: WebP 포맷, lazy loading
- **애니메이션**: GPU 가속 (transform, opacity)
- **코드 스플리팅**: 섹션별 lazy loading (필요시)
