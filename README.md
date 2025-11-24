# 시니어 계산 도우미

어르신을 위한 쉬운 계산기 모음 웹사이트

## 📋 프로젝트 정보

- **서비스명**: 시니어 계산 도우미
- **도메인**: woong.io.kr
- **기술**: HTML, CSS, JavaScript (정적 웹사이트)
- **배포**: Vercel
- **목표**: 구글 검색 노출 + AdSense 수익화

## 🎯 제공 기능

### 나이 계산
1. **나이 계산기** (`/age/`) - 생년월일로 현재 나이 계산
2. **만 나이 계산기** (`/age-man/`) - 공식 서류용 만 나이
3. **2025년 나이표** (`/age-table/`) - 출생연도별 나이 일람표

### 띠 & 전통
4. **띠·띠궁합** (`/zodiac/`) - 띠 확인 및 궁합
5. **손없는날** (`/nolucky/`) - 이사·행사 길일 확인

### 날짜 계산
6. **디데이 계산기** (`/dday/`) - 특정 날짜까지 남은 일수
7. **날짜 차이** (`/date-diff/`) - 두 날짜 사이 일수
8. **날짜 더하기·빼기** (`/date-plusminus/`) - 날짜 연산
9. **기념일 계산기** (`/anniversary/`) - 100일, 200일 등

### 특별 계산
10. **학교 입학·졸업** (`/school/`) - 손주 학년 확인
11. **공휴일 한눈에** (`/holiday/`) - 연도별 공휴일
12. **양력·음력 변환** (`/convert/`) - 음력↔양력 변환

### 정책 페이지
13. **개인정보 처리방침** (`/privacy/`)
14. **이용약관** (`/terms/`)
15. **문의하기** (`/contact/`)

## 🚀 주요 기능

### 사용자 경험
- ✅ 큰 글씨, 큰 버튼 (시니어 친화)
- ✅ 글자 크게 보기 토글
- ✅ 반응형 디자인 (모바일 최적화)
- ✅ 빠른 로딩 속도

### SEO 최적화
- ✅ 모든 페이지 메타태그 완비
- ✅ JSON-LD 구조화 데이터
- ✅ Canonical URL
- ✅ Open Graph & Twitter Card
- ✅ robots.txt & sitemap.xml

### 광고 준비
- ✅ Google AdSense 광고 공간 마련
- ✅ ads.txt 파일
- ✅ 모든 광고 코드 주석 처리 (승인 후 활성화)

## 📁 파일 구조

```
static/
├── index.html              # 메인 페이지
├── robots.txt              # 검색엔진 크롤러 설정
├── sitemap.xml             # 사이트맵
├── ads.txt                 # AdSense 설정
├── vercel.json             # Vercel 배포 설정
├── DEPLOYMENT.md           # 배포 가이드
├── _seo-template.html      # SEO 템플릿
│
├── css/
│   └── base.css            # 공통 스타일
│
├── js/
│   └── common.js           # 공통 JS (글자크기, Analytics)
│
├── age/                    # 나이 계산기
├── age-man/                # 만 나이 계산기
├── age-table/              # 나이표
├── zodiac/                 # 띠·띠궁합
├── dday/                   # 디데이
├── school/                 # 입학·졸업
├── holiday/                # 공휴일
├── nolucky/                # 손없는날
├── date-diff/              # 날짜 차이
├── date-plusminus/         # 날짜 연산
├── anniversary/            # 기념일
├── convert/                # 양력음력 변환
│
├── privacy/                # 개인정보 처리방침
├── terms/                  # 이용약관
└── contact/                # 문의하기
```

## 🔧 배포 방법

### 1. GitHub 저장소 생성
```bash
cd /path/to/static
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/senior-helper.git
git push -u origin main
```

### 2. Vercel 배포
1. https://vercel.com 접속
2. GitHub 연동
3. 저장소 선택
4. 배포 (자동)

### 3. 도메인 연결
1. Vercel 대시보드 → Domains
2. woong.io.kr 추가
3. DNS 설정

### 4. SEO 등록
1. Google Search Console 등록
2. Sitemap 제출
3. 색인 생성 요청

### 5. AdSense 신청
1. 1개월 이상 운영 후 신청
2. 일 방문자 수십 명 이상 확보
3. 승인 후 광고 코드 활성화

상세 가이드: [DEPLOYMENT.md](./DEPLOYMENT.md)

## ✅ 완료 사항

### 기본 설정
- [x] 모든 기능 페이지 완성
- [x] SEO 메타태그 추가
- [x] JSON-LD 스키마
- [x] 글자 크게 보기 기능
- [x] 반응형 디자인

### SEO
- [x] robots.txt
- [x] sitemap.xml
- [x] Canonical URL
- [x] Open Graph
- [x] Twitter Card

### 광고 준비
- [x] AdSense 광고 공간
- [x] ads.txt
- [x] 광고 코드 주석 처리

### 정책
- [x] 개인정보 처리방침
- [x] 이용약관
- [x] 문의 페이지

## 📝 TODO (배포 후)

### 즉시
- [ ] GitHub 저장소 생성
- [ ] Vercel 배포
- [ ] 도메인 연결 (woong.io.kr)
- [ ] 도메인 DNS 설정
- [ ] 사이트 접속 테스트

### 1-3일 내
- [ ] Google Search Console 등록
- [ ] Sitemap 제출
- [ ] 주요 페이지 색인 요청
- [ ] Google Analytics 설정

### 2-4주 내
- [ ] 검색 노출 확인
- [ ] 트래픽 모니터링
- [ ] 사용자 피드백 수집

### 1-3개월 내
- [ ] 최소 트래픽 확보 (일 방문자 50명+)
- [ ] Google AdSense 신청
- [ ] AdSense 승인 후 광고 코드 활성화
- [ ] ads.txt 파일 pub-id 업데이트

## 🎨 디자인 특징

### 색상 (CSS Variables)
- `--primary`: #2054b3 (파란색)
- `--bg`: #f8f9fc (연한 회색 배경)
- `--card`: #ffffff (카드 배경)
- `--border`: #ccd3e6 (테두리)

### 폰트
- system-ui 우선
- "Noto Sans KR" 폴백
- 웹폰트 미사용 (속도 최적화)

### 버튼
- 큰 크기 (최소 32px 폰트)
- 넓은 터치 영역
- 둥근 모서리 (12-16px radius)

## 📞 문의

- **이메일**: woong.io.kr@gmail.com
- **사이트**: https://woong.io.kr

## 📄 라이선스

© 2025 시니어 계산 도우미. All rights reserved.

---

**마지막 업데이트**: 2025-01-15
