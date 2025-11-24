// korean-holiday.js (리팩터링 버전)
// - 2025~2030년 공휴일 계산
// - 양력 고정 공휴일 + 음력(설날, 부처님오신날, 추석) → KoreanLunarCalendar로 계산
// - 대체공휴일 로직은 기존 방식 유지

// YYYY-MM-DD 문자열 생성
function formatDate(date) {
    const y = date.getFullYear();
    const m = ("0" + (date.getMonth() + 1)).slice(-2);
    const d = ("0" + date.getDate()).slice(-2);
    return `${y}-${m}-${d}`;
}

// 날짜에 일수 더하기
function addDays(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return formatDate(date);
}

// 요일 구하기 (0=일요일, 6=토요일)
function getDayOfWeek(dateStr) {
    return new Date(dateStr).getDay();
}

// 해당 년도인지 체크
function isSameYear(dateStr, year) {
    return new Date(dateStr).getFullYear() === year;
}

// 주말인지 체크
function isWeekend(dateStr) {
    const day = getDayOfWeek(dateStr);
    return day === 0 || day === 6;
}

// 대체공휴일 찾기 (이미 공휴일/주말이 아닌 첫 평일)
function findSubstituteDate(dateStr, existingDates) {
    let checkDate = new Date(dateStr);
    const originalDay = getDayOfWeek(dateStr);

    // 토요일 → 다음 다음날(월), 일요일 → 다음날(월)
    if (originalDay === 6) {
        checkDate.setDate(checkDate.getDate() + 2);
    } else if (originalDay === 0) {
        checkDate.setDate(checkDate.getDate() + 1);
    }

    while (true) {
        const checkStr = formatDate(checkDate);
        const dayOfWeek = checkDate.getDay();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            const isHoliday = existingDates.includes(checkStr);
            if (!isHoliday) {
                return checkStr;
            }
        }
        checkDate.setDate(checkDate.getDate() + 1);
    }
}

// 음력 → 양력 변환 헬퍼
function lunarToSolarDate(year, lunarMonth, lunarDay, isLeap) {
    const cal = new KoreanLunarCalendar();
    const ok = cal.setLunarDate(year, lunarMonth, lunarDay, isLeap);
    if (!ok) return null;

    const sol = cal.getSolarCalendar();
    const dateStr = formatDate(new Date(sol.year, sol.month - 1, sol.day));
    return {
        dateStr,
        solarYear: sol.year,
        solarMonth: sol.month,
        solarDay: sol.day
    };
}

// 메인 함수
function getKoreanHolidays(year) {
    // 2025~2030년만 지원
    if (year < 2025 || year > 2030) {
        return [];
    }

    const holidays = [];
    const allDates = [];

    // 1) 양력 고정 공휴일
    holidays.push({ name: "신정", date: `${year}-01-01`, isFixed: true });
    holidays.push({ name: "삼일절", date: `${year}-03-01`, isFixed: true });
    holidays.push({ name: "어린이날", date: `${year}-05-05`, isFixed: true });
    holidays.push({ name: "현충일", date: `${year}-06-06`, isFixed: false }); // 대체공휴일 없음
    holidays.push({ name: "광복절", date: `${year}-08-15`, isFixed: true });
    holidays.push({ name: "개천절", date: `${year}-10-03`, isFixed: true });
    holidays.push({ name: "한글날", date: `${year}-10-09`, isFixed: true });
    holidays.push({ name: "성탄절", date: `${year}-12-25`, isFixed: true });

    // 2) 선거일(예: 2026 지선)
    if (year === 2026) {
        holidays.push({ name: "제9회 전국동시지방선거", date: "2026-06-03", isFixed: false });
    }

    // 3) 음력 공휴일 (설날, 부처님 오신 날, 추석) → KoreanLunarCalendar로 계산

    // 3-1) 설날 (음력 1월 1일 기준, 전날/다음날 포함 3일)
    const seollalMain = lunarToSolarDate(year, 1, 1, false);
    if (seollalMain) {
        const mainDate = seollalMain.dateStr;
        const beforeDate = addDays(mainDate, -1);
        const afterDate = addDays(mainDate, 1);

        if (isSameYear(beforeDate, year)) {
            holidays.push({
                name: "설날 연휴",
                date: beforeDate,
                isLunar: true,
                isMainDay: true,
                lunarMonth: 1,
                lunarDay: 0  // 표시용으로 쓰려면 원하는 값으로 바꿔도 됨
            });
        }
        holidays.push({
            name: "설날",
            date: mainDate,
            isLunar: true,
            isMainDay: true,
            lunarMonth: 1,
            lunarDay: 1
        });
        if (isSameYear(afterDate, year)) {
            holidays.push({
                name: "설날 연휴",
                date: afterDate,
                isLunar: true,
                isMainDay: true,
                lunarMonth: 1,
                lunarDay: 2
            });
        }
    }

    // 3-2) 부처님 오신 날 (음력 4월 8일)
    const buddha = lunarToSolarDate(year, 4, 8, false);
    if (buddha && isSameYear(buddha.dateStr, year)) {
        holidays.push({
            name: "부처님 오신 날",
            date: buddha.dateStr,
            isLunar: true,
            isMainDay: true,
            lunarMonth: 4,
            lunarDay: 8
        });
    }

    // 3-3) 추석 (음력 8월 15일 기준, 전날/다음날 포함 3일)
    const chuseokMain = lunarToSolarDate(year, 8, 15, false);
    if (chuseokMain) {
        const mainDate = chuseokMain.dateStr;
        const beforeDate = addDays(mainDate, -1);
        const afterDate = addDays(mainDate, 1);

        if (isSameYear(beforeDate, year)) {
            holidays.push({
                name: "추석 연휴",
                date: beforeDate,
                isLunar: true,
                isMainDay: true,
                lunarMonth: 8,
                lunarDay: 14
            });
        }
        holidays.push({
            name: "추석",
            date: mainDate,
            isLunar: true,
            isMainDay: true,
            lunarMonth: 8,
            lunarDay: 15
        });
        if (isSameYear(afterDate, year)) {
            holidays.push({
                name: "추석 연휴",
                date: afterDate,
                isLunar: true,
                isMainDay: true,
                lunarMonth: 8,
                lunarDay: 16
            });
        }
    }

    // 4) 해당 년도만 필터링 (혹시라도 cross-year 걸린 것 정리)
    const yearHolidays = holidays.filter(h => isSameYear(h.date, year));

    // 5) 모든 날짜 수집 (대체공휴일 중복 방지용)
    yearHolidays.forEach(h => allDates.push(h.date));

    // 6) 대체공휴일 처리
    const processedHolidays = [];

    yearHolidays.forEach(h => {
        const canHaveSubstitute = (h.isFixed || h.isMainDay) && h.name !== "현충일";

        if (canHaveSubstitute && isWeekend(h.date)) {
            const subDate = findSubstituteDate(h.date, allDates);
            allDates.push(subDate);

            processedHolidays.push({
                ...h,
                substituteDate: subDate,
                isWeekendOriginal: true
            });
        } else {
            processedHolidays.push(h);
        }
    });

    return processedHolidays;
}

// 전역 등록
window.KoreanHoliday = {
    getHolidaysOfYear: getKoreanHolidays,
    MIN_YEAR: 2025,
    MAX_YEAR: 2030
};
