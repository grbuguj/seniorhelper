# 어르신 생활도우미 - 정적 웹사이트

어르신들을 위한 나이, 띠, 날짜 계산 서비스

## 📁 프로젝트 구조

```
static/
├── index.html                 # 메인 페이지 (수정 금지)
├── css/
│   ├── base.css              # 공통 기본 스타일
│   ├── main.css              # 메인 페이지 스타일 (예비)
│   ├── age.css               # 나이 계산기 스타일
│   ├── zodiac.css            # 띠·띠궁합 스타일
│   ├── dday.css              # 디데이 계산기 스타일
│   ├── school.css            # 학교 입학·졸업 스타일
│   ├── holiday.css           # 공휴일 스타일
│   ├── nolucky.css           # 손 없는 날 스타일
│   └── articles.css          # 읽을거리 스타일
├── js/
│   ├── time-greeting.js      # 시간대별 인사말
│   ├── age.js                # 나이 계산 로직
│   ├── zodiac.js             # 띠·띠궁합 로직
│   ├── dday.js               # 디데이 계산 로직
│   ├── school.js             # 학교 계산 로직
│   ├── holiday.js            # 공휴일 데이터
│   ├── nolucky.js            # 손 없는 날 로직
│   └── articles.js           # 읽을거리 로직
├── age/
│   └── index.html            # 나이 계산기 페이지
├── zodiac/
│   └── index.html            # 띠·띠궁합 페이지
├── dday/
│   └── index.html            # 디데이 계산기 페이지
├── school/
│   └── index.html            # 학교 입학·졸업 페이지
├── holiday/
│   └── index.html            # 공휴일 한눈에 페이지
├── nolucky/
│   └── index.html            # 손 없는 날 페이지
└── articles/
    └── index.html            # 읽을거리 페이지
```

## 🎨 디자인 원칙

### 핵심 가치
- **큰 글씨**: 최소 20px 이상, 주요 텍스트는 24px 이상
- **넓은 버튼**: 터치하기 쉬운 크기 (최소 48px 높이)
- **명확한 간격**: 요소 간 충분한 여백
- **단순한 구조**: 복잡하지 않은 레이아웃

### 색상 팔레트
```css
--bg: #f3f5fb          /* 배경색 */
--card: #ffffff        /* 카드 배경 */
--primary: #2054b3     /* 주요 색상 (파랑) */
--primary-soft: #e3edff /* 부드러운 파랑 */
--text-main: #111111   /* 주 텍스트 */
--text-sub: #555555    /* 부 텍스트 */
--border: #d0d6ea      /* 테두리 */
--accent: #f7b500      /* 강조 색상 (노랑) */
```

## 📋 개발 규칙

### ⛔ 절대 금지
1. **index.html 수정 금지**
   - 리팩토링 금지
   - 스타일 변경 금지
   - 구조 변경 금지
   - 내부 코드 재작성 금지

2. **일관성 유지**
   - 모든 페이지는 index.html의 디자인 톤 따르기
   - base.css의 공통 컴포넌트 활용
   - 글씨 크기, 버튼 스타일 일관성 유지

### ✅ 개발 가이드

#### 새 페이지 추가 시
1. `static/[기능명]/index.html` 생성
2. `static/css/[기능명].css` 생성 (필요 시)
3. `static/js/[기능명].js` 생성 (필요 시)
4. base.css를 기본으로 사용하고 추가 스타일만 작성

#### 공통 컴포넌트 사용
```html
<!-- 페이지 헤더 -->
<div class="page-header">
    <div class="page-header-top">
        <a href="../index.html" class="back-btn">←</a>
        <div>
            <h1 class="page-title">페이지 제목</h1>
        </div>
    </div>
    <p class="page-subtitle">페이지 설명</p>
</div>

<!-- 콘텐츠 카드 -->
<div class="content-card">
    <h2 class="card-title">카드 제목</h2>
    <!-- 내용 -->
</div>

<!-- 결과 표시 -->
<div class="result-box">
    <div class="result-main">42세</div>
    <div class="result-sub">2025년 기준</div>
</div>

<!-- 입력 폼 -->
<div class="form-group">
    <label class="form-label">생년월일</label>
    <input type="date" class="form-input">
</div>

<!-- 버튼 -->
<button class="btn btn-primary btn-large">계산하기</button>
```

## 🚀 다음 단계

### 구현 대기 중인 기능
- [ ] 나이 계산기 (age/)
- [ ] 만 나이 계산기
- [ ] 2025년 나이 표
- [ ] 띠·띠궁합 (zodiac/)
- [ ] 디데이 계산기 (dday/)
- [ ] 학교 입학·졸업 계산 (school/)
- [ ] 공휴일 한눈에 (holiday/)
- [ ] 손 없는 날 (nolucky/)
- [ ] 읽을거리 (articles/)

### 기능 요청 시
각 기능을 요청하면 다음이 생성됩니다:
1. 완전한 HTML 페이지 (입력 폼 + 결과 표시)
2. 기능별 CSS (필요한 경우)
3. 계산 로직을 포함한 JavaScript

## 📝 참고사항

- 모든 파일은 UTF-8 인코딩
- 날짜 형식: YYYY-MM-DD
- 한국 표준시(KST) 기준
- 모바일 우선 반응형 디자인 (720px 브레이크포인트)

## 🔗 링크 연결

index.html의 버튼에 링크를 추가하려면:
```html
<button class="big-btn" onclick="location.href='age/'">
    <!-- 버튼 내용 -->
</button>
```
또는
```html
<a href="age/" class="big-btn" style="text-decoration: none; color: inherit;">
    <!-- 버튼 내용 -->
</a>
```

---

© 2025 어르신 생활도우미
