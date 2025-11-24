# Vercel 배포 가이드

## 1. 배포 준비

### 1-1. 배포할 파일 확인
- `/src/main/resources/static/` 폴더의 모든 파일을 배포합니다
- Spring Boot 프로젝트는 개발용이며, 실제 배포는 static 폴더만 사용합니다

### 1-2. 필요한 파일 체크리스트
- [x] index.html (메인)
- [x] robots.txt
- [x] sitemap.xml
- [x] ads.txt
- [x] vercel.json
- [x] /js/common.js
- [x] /css/base.css
- [x] 모든 기능 페이지 폴더들

## 2. GitHub 저장소 생성

```bash
# 1. GitHub에서 새 저장소 생성 (예: senior-helper)

# 2. static 폴더를 별도 저장소로 관리
cd /Users/jaeung/IdeaProjects/go-cagong/seniorhelper/src/main/resources/static
git init
git add .
git commit -m "Initial commit: Senior Helper static files"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/senior-helper.git
git push -u origin main
```

## 3. Vercel 배포

### 3-1. Vercel 계정 연결
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택 (senior-helper)

### 3-2. 프로젝트 설정
```
Framework Preset: Other
Build Command: (비워두기)
Output Directory: .
Install Command: (비워두기)
```

### 3-3. 도메인 설정
1. Project Settings → Domains
2. "woong.io.kr" 입력
3. DNS 설정:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   또는
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

4. DNS 전파 대기 (최대 48시간, 보통 1-2시간)

## 4. Google Search Console 등록

### 4-1. 사이트 등록
1. https://search.google.com/search-console 접속
2. "속성 추가" 클릭
3. "URL 접두어" 선택: https://woong.io.kr
4. 소유권 확인 (HTML 파일 업로드 방법 권장)

### 4-2. Sitemap 제출
1. Search Console → Sitemaps
2. "새 사이트맵 추가": `https://woong.io.kr/sitemap.xml`
3. "제출" 클릭

### 4-3. 색인 생성 요청
1. URL 검사 도구 사용
2. 주요 페이지 URL 입력
3. "색인 생성 요청" 클릭

주요 페이지:
- https://woong.io.kr/
- https://woong.io.kr/age/
- https://woong.io.kr/holiday/
- https://woong.io.kr/nolucky/
- https://woong.io.kr/convert/

## 5. Google AdSense 신청

### 5-1. 신청 전 체크리스트
- [x] 독창적이고 유용한 콘텐츠 ✅
- [x] 충분한 콘텐츠 양 (12개 기능 페이지) ✅
- [x] 사용자 친화적 디자인 ✅
- [x] 필수 페이지 (개인정보처리방침, 이용약관, 문의) ✅
- [ ] 최소 트래픽 (일 방문자 수십 명 이상 권장)
- [ ] 도메인 사용 기간 (최소 1-3개월 권장)

### 5-2. AdSense 신청
1. https://www.google.com/adsense 접속
2. "시작하기" 클릭
3. 웹사이트 URL 입력: woong.io.kr
4. 이메일 입력: woong.io.kr@gmail.com
5. AdSense 코드 복사

### 5-3. AdSense 코드 추가
1. 모든 HTML 파일의 `<head>` 태그에 추가:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

2. 광고 단위 생성 후 각 페이지의 주석 처리된 광고 영역 활성화

3. `ads.txt` 파일 업데이트:
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### 5-4. 승인 대기
- 보통 1-2주 소요
- 거절 시 피드백 확인 후 수정
- 트래픽 부족이 주요 거절 사유

## 6. SEO 최적화 추가 작업

### 6-1. Google Analytics 추가
1. https://analytics.google.com 접속
2. 속성 생성
3. 측정 ID 복사 (G-XXXXXXXXXX)
4. `js/common.js`의 주석 해제하고 ID 입력

### 6-2. 구조화된 데이터 테스트
1. https://search.google.com/test/rich-results 접속
2. 각 페이지 URL 테스트
3. 오류 수정

### 6-3. 페이지 속도 최적화
1. https://pagespeed.web.dev 접속
2. 점수 확인
3. 이미지 최적화, CSS/JS 압축 등

### 6-4. 모바일 친화성 테스트
1. https://search.google.com/test/mobile-friendly 접속
2. 모든 페이지 테스트

## 7. 마케팅 및 트래픽 증대

### 7-1. 네이버 검색 등록
1. https://searchadvisor.naver.com 접속
2. 사이트 등록
3. 사이트맵 제출: https://woong.io.kr/sitemap.xml

### 7-2. SNS 공유
- 페이스북 그룹 (어르신 관련 커뮤니티)
- 카카오톡 오픈채팅
- 네이버 카페

### 7-3. 블로그/카페 홍보
- 관련 키워드로 블로그 포스팅
- 네이버 지식iN 답변에 링크 포함

## 8. 유지보수

### 8-1. 정기 업데이트
- 공휴일 데이터 업데이트 (매년)
- 나이표 연도 업데이트
- 새로운 기능 추가

### 8-2. 모니터링
- Google Analytics로 트래픽 확인
- Search Console로 검색 성능 확인
- AdSense 수익 확인

### 8-3. 사용자 피드백
- contact 페이지로 들어온 의견 확인
- 개선사항 반영

## 9. 문제 해결

### 9-1. 배포가 안 될 때
- vercel.json 문법 오류 확인
- GitHub 푸시 확인
- Vercel 대시보드에서 빌드 로그 확인

### 9-2. 검색에 노출 안 될 때
- robots.txt 확인 (Allow: / 인지)
- sitemap.xml 제출 확인
- 1-2주 대기 (색인 생성에 시간 소요)

### 9-3. AdSense 승인 안 될 때
- 콘텐츠 부족: 페이지 추가
- 트래픽 부족: 1-2개월 운영 후 재신청
- 정책 위반: 피드백 확인 후 수정

## 10. 체크리스트

배포 전:
- [ ] 모든 페이지 로컬 테스트
- [ ] 링크 깨짐 확인
- [ ] 모바일 반응형 테스트
- [ ] 글자 크게 기능 테스트

배포 후:
- [ ] 모든 페이지 접속 확인
- [ ] robots.txt 접근 가능 확인
- [ ] sitemap.xml 접근 가능 확인
- [ ] 도메인 연결 확인

SEO:
- [ ] Search Console 등록
- [ ] Sitemap 제출
- [ ] 주요 페이지 색인 요청
- [ ] Analytics 설정

AdSense:
- [ ] 최소 1개월 운영 (권장)
- [ ] 일 방문자 수십 명 이상
- [ ] AdSense 신청
- [ ] 승인 후 광고 코드 활성화

---

문의: woong.io.kr@gmail.com
