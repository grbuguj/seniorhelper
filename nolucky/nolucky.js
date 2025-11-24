// ----------------------------------------------
// 손없는날 계산 (음력 끝자리: 9, 10, 19, 20, 29, 30)
// 한국천문연구원 알고리즘 기반 로컬 계산
// ----------------------------------------------

const TARGET_LUNAR_DAYS = [9, 10, 19, 20, 29, 30];

window.NoLuckyDay = {
    MIN_YEAR: 2025,
    MAX_YEAR: 2030,
    cache: {},

    getNoLuckyDays(year) {
        if (!this.cache[year]) {
            this.cache[year] = computeNoLuckyDays(year);
        }
        return this.cache[year];
    },

    isTodayNoLuckyDay(date = new Date()) {
        const today = date.toISOString().split("T")[0];
        const year = date.getFullYear();
        return this.getNoLuckyDays(year).some(d => d.date === today);
    },

    getNextNoLuckyDay(date = new Date()) {
        const today = date.toISOString().split("T")[0];
        const year = date.getFullYear();
        const all = [
            ...this.getNoLuckyDays(year),
            ...this.getNoLuckyDays(year + 1)
        ];
        return all.find(d => d.date >= today) || null;
    }
};

// ----------------------------------------------
// 내부 계산 로직 (라이브러리 함수명에 맞게 수정된 부분)
// ----------------------------------------------

function computeNoLuckyDays(year) {
    const cal = new KoreanLunarCalendar();
    const result = [];

    for (let lunarMonth = 1; lunarMonth <= 12; lunarMonth++) {
        for (let lunarDay of TARGET_LUNAR_DAYS) {

            // 평달 계산
            if (cal.setLunarDate(year, lunarMonth, lunarDay, false)) {
                const sol1 = cal.getSolarCalendar();
                if (sol1.year === year) {
                    result.push(makeItem(sol1, lunarMonth, lunarDay, false));
                }
            }

            // 윤달 계산
            if (cal.setLunarDate(year, lunarMonth, lunarDay, true)) {
                const sol2 = cal.getSolarCalendar();
                if (sol2.year === year) {
                    result.push(makeItem(sol2, lunarMonth, lunarDay, true));
                }
            }
        }
    }

    const unique = {};
    result.forEach(item => unique[item.date] = item);
    return Object.values(unique).sort((a, b) => new Date(a.date) - new Date(b.date));
}

function makeItem(sol, lunarMonth, lunarDay, isLeap) {
    const y = sol.year;
    const m = String(sol.month).padStart(2, "0");
    const d = String(sol.day).padStart(2, "0");

    return {
        date: `${y}-${m}-${d}`,
        solarYear: y,
        solarMonth: sol.month,
        solarDay: sol.day,
        lunarMonth,
        lunarDay,
        isLeap
    };
}
