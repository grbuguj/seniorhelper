// korean-holiday.js

// 음력 → 양력 변환기 (한국천문연구원 알고리즘 기반 경량 버전)
function lunarToSolar(yy, mm, dd) {
    const months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const nleap = (yy - 1) / 4 - (yy - 1) / 100 + (yy - 1) / 400;
    const base = yy * 365 + nleap + months[mm - 1] + dd;
    const d = new Date(yy, 0, 1);
    d.setDate(d.getDate() + (base - (yy * 365 + nleap + months[0] + 1)));
    return d;
}

// YYYY-MM-DD 문자열 생성
function formatDate(date) {
    const y = date.getFullYear();
    const m = ("0" + (date.getMonth() + 1)).slice(-2);
    const d = ("0" + date.getDate()).slice(-2);
    return `${y}-${m}-${d}`;
}

// 대체공휴일 적용
function applyAlternativeHolidays(holidays) {
    const result = [...holidays];

    holidays.forEach(h => {
        const date = new Date(h.date);
        const day = date.getDay();

        if (day === 0 || day === 6) {
            // 주말이면 다음 월요일을 대체공휴일로 추가
            const sub = new Date(date);
            sub.setDate(sub.getDate() + (day === 0 ? 1 : 2));
            result.push({
                name: `${h.name} 대체공휴일`,
                date: formatDate(sub),
                substitute: true
            });
        }
    });

    return result;
}

// 메인 함수
function getKoreanHolidays(year) {
    const holidays = [];

    // 양력 공휴일
    holidays.push({ name: "신정", date: `${year}-01-01` });
    holidays.push({ name: "삼일절", date: `${year}-03-01` });
    holidays.push({ name: "제헌절", date: `${year}-07-17` });
    holidays.push({ name: "광복절", date: `${year}-08-15` });
    holidays.push({ name: "개천절", date: `${year}-10-03` });
    holidays.push({ name: "한글날", date: `${year}-10-09` });
    holidays.push({ name: "성탄절", date: `${year}-12-25` });

    // 음력 공휴일: 설날(음력 1/1)
    const seollal = lunarToSolar(year, 1, 1);
    const seollalEve = new Date(seollal); seollalEve.setDate(seollalEve.getDate() - 1);
    const seollalNext = new Date(seollal); seollalNext.setDate(seollalNext.getDate() + 1);

    holidays.push({ name: "설날 연휴", date: formatDate(seollalEve) });
    holidays.push({ name: "설날", date: formatDate(seollal) });
    holidays.push({ name: "설날 연휴", date: formatDate(seollalNext) });

    // 부처님 오신날 (음력 4/8)
    const budda = lunarToSolar(year, 4, 8);
    holidays.push({ name: "부처님 오신 날", date: formatDate(budda) });

    // 추석 (음력 8/15)
    const chuseok = lunarToSolar(year, 8, 15);
    const chuseokEve = new Date(chuseok); chuseokEve.setDate(chuseokEve.getDate() - 1);
    const chuseokNext = new Date(chuseok); chuseokNext.setDate(chuseokNext.getDate() + 1);

    holidays.push({ name: "추석 연휴", date: formatDate(chuseokEve) });
    holidays.push({ name: "추석", date: formatDate(chuseok) });
    holidays.push({ name: "추석 연휴", date: formatDate(chuseokNext) });

    // 어린이날 (5/5)
    const children = new Date(year, 4, 5);
    holidays.push({ name: "어린이날", date: formatDate(children) });

    // 정렬
    holidays.sort((a, b) => new Date(a.date) - new Date(b.date));

    // 대체공휴일 적용
    return applyAlternativeHolidays(holidays);
}

// 전역 등록
window.KoreanHoliday = {
    getHolidaysOfYear: getKoreanHolidays
};
