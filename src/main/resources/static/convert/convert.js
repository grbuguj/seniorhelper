// ------------------------------------------------------------
// 양력 <-> 음력 변환기
// ------------------------------------------------------------

window.LunarConvert = {
    convertSolarToLunar,
    convertLunarToSolar
};

// ------------------------------------------------------------
// 1) 양력 → 음력 변환
// ------------------------------------------------------------
function convertSolarToLunar(year, month, day) {
    try {
        const cal = new KoreanLunarCalendar();

        // setSolarDate(year, month, day)
        const ok = cal.setSolarDate(year, month, day);

        if (!ok) {
            return { error: true, message: "유효하지 않은 양력 날짜입니다." };
        }

        // getLunarCalendar()
        const lunar = cal.getLunarCalendar();
        if (!lunar) {
            return { error: true, message: "변환 실패(음력 정보 없음)." };
        }

        return {
            error: false,
            lunarYear: lunar.year,
            lunarMonth: lunar.month,
            lunarDay: lunar.day,
            isLeap: lunar.isLeapMonth,
            weekday: lunar.weekDay // 존재 시
        };
    } catch (err) {
        return { error: true, message: "변환 중 오류가 발생했습니다." };
    }
}

// ------------------------------------------------------------
// 2) 음력 → 양력 변환
// ------------------------------------------------------------
function convertLunarToSolar(year, month, day, isLeap = false) {
    try {
        const cal = new KoreanLunarCalendar();

        // setLunarDate(year, month, day, isLeap)
        const ok = cal.setLunarDate(year, month, day, isLeap);

        if (!ok) {
            return { error: true, message: "유효하지 않은 음력 날짜입니다." };
        }

        // getSolarCalendar()
        const solar = cal.getSolarCalendar();
        if (!solar) {
            return { error: true, message: "변환 실패(양력 정보 없음)." };
        }

        return {
            error: false,
            solarYear: solar.year,
            solarMonth: solar.month,
            solarDay: solar.day,
            weekday: solar.weekDay // 존재 시
        };
    } catch (err) {
        return { error: true, message: "변환 중 오류가 발생했습니다." };
    }
}

// ------------------------------------------------------------
// 3) UI 이벤트 리스너 (페이지 로드 후 실행)
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    
    // 오늘 날짜 입력 버튼 (양력 섹션)
    const btnTodaySolar = document.getElementById('btnTodaySolar');
    if (btnTodaySolar) {
        btnTodaySolar.addEventListener('click', function() {
            const today = new Date();
            document.getElementById('solarYear').value = today.getFullYear();
            document.getElementById('solarMonth').value = today.getMonth() + 1;
            document.getElementById('solarDay').value = today.getDate();
        });
    }
    
    // 오늘 날짜 입력 버튼 (음력 섹션)
    const btnTodayLunar = document.getElementById('btnTodayLunar');
    if (btnTodayLunar) {
        btnTodayLunar.addEventListener('click', function() {
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            
            // 오늘을 음력으로 변환
            const result = convertSolarToLunar(year, month, day);
            
            if (!result.error) {
                document.getElementById('lunarYear').value = result.lunarYear;
                document.getElementById('lunarMonth').value = result.lunarMonth;
                document.getElementById('lunarDay').value = result.lunarDay;
                document.getElementById('lunarLeap').value = result.isLeap ? '1' : '0';
            } else {
                alert('오늘 날짜를 음력으로 변환하는 중 오류가 발생했습니다.');
            }
        });
    }
    
    // 양력 → 음력 변환 버튼
    const btnSolarToLunar = document.getElementById('btnSolarToLunar');
    if (btnSolarToLunar) {
        btnSolarToLunar.addEventListener('click', function() {
            const year = parseInt(document.getElementById('solarYear').value);
            const month = parseInt(document.getElementById('solarMonth').value);
            const day = parseInt(document.getElementById('solarDay').value);
            
            const resultBox = document.getElementById('solarResult');
            
            // 입력 검증
            if (!year || !month || !day) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">연도, 월, 일을 모두 입력해주세요.</span>';
                return;
            }
            
            if (year < 1900 || year > 2100) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">연도는 1900~2100 사이여야 합니다.</span>';
                return;
            }
            
            if (month < 1 || month > 12) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">월은 1~12 사이여야 합니다.</span>';
                return;
            }
            
            if (day < 1 || day > 31) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">일은 1~31 사이여야 합니다.</span>';
                return;
            }
            
            // 변환 실행
            const result = convertSolarToLunar(year, month, day);
            
            if (result.error) {
                resultBox.innerHTML = `<span style="color: #e74c3c;">${result.message}</span>`;
            } else {
                const leapText = result.isLeap ? ' (윤달)' : '';
                resultBox.innerHTML = `
                    <div class="result-main" style="font-weight: 600; font-size: 28px; color: var(--primary);">
                        음력 ${result.lunarYear}년 ${result.lunarMonth}월 ${result.lunarDay}일${leapText}
                    </div>
                    <div class="result-sub" style="margin-top: 8px;">
                        양력 ${year}년 ${month}월 ${day}일은 음력으로 위와 같습니다.
                    </div>
                `;
            }
        });
    }
    
    // 음력 → 양력 변환 버튼
    const btnLunarToSolar = document.getElementById('btnLunarToSolar');
    if (btnLunarToSolar) {
        btnLunarToSolar.addEventListener('click', function() {
            const year = parseInt(document.getElementById('lunarYear').value);
            const month = parseInt(document.getElementById('lunarMonth').value);
            const day = parseInt(document.getElementById('lunarDay').value);
            const isLeap = document.getElementById('lunarLeap').value === '1';
            
            const resultBox = document.getElementById('lunarResult');
            
            // 입력 검증
            if (!year || !month || !day) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">연도, 월, 일을 모두 입력해주세요.</span>';
                return;
            }
            
            if (year < 1900 || year > 2100) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">연도는 1900~2100 사이여야 합니다.</span>';
                return;
            }
            
            if (month < 1 || month > 12) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">월은 1~12 사이여야 합니다.</span>';
                return;
            }
            
            if (day < 1 || day > 30) {
                resultBox.innerHTML = '<span style="color: #e74c3c;">일은 1~30 사이여야 합니다.</span>';
                return;
            }
            
            // 변환 실행
            const result = convertLunarToSolar(year, month, day, isLeap);
            
            if (result.error) {
                resultBox.innerHTML = `<span style="color: #e74c3c;">${result.message}</span>`;
            } else {
                const weekDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
                const weekDayText = result.weekday !== undefined ? ` (${weekDays[result.weekday]})` : '';
                const leapText = isLeap ? ' (윤달)' : '';
                
                resultBox.innerHTML = `
                    <div class="result-main" style="font-weight: 600; font-size: 28px; color: var(--primary);">
                        양력 ${result.solarYear}년 ${result.solarMonth}월 ${result.solarDay}일${weekDayText}
                    </div>
                    <div class="result-sub" style="margin-top: 8px;">
                        음력 ${year}년 ${month}월 ${day}일${leapText}은 양력으로 위와 같습니다.
                    </div>
                `;
            }
        });
    }
    
});
