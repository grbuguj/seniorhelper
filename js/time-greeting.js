// 시간대별 인사말 변경 스크립트
// 메인 페이지(index.html)에 이미 인라인으로 포함되어 있지만,
// 다른 페이지에서도 재사용할 수 있도록 별도 파일로 제공

function updateTimeGreeting() {
    const hour = new Date().getHours();
    const emojiEl = document.getElementById("timeEmoji");
    const mainEl = document.getElementById("timeMain");
    const subEl = document.getElementById("timeSub");

    if (!emojiEl || !mainEl || !subEl) {
        return; // 요소가 없으면 종료
    }

    if (hour >= 5 && hour < 11) {
        emojiEl.textContent = "🌞";
        mainEl.textContent = "좋은 아침입니다.";
        subEl.textContent = "오늘도 필요한 계산은 제가 도와드릴게요.";
    } else if (hour >= 11 && hour < 17) {
        emojiEl.textContent = "🌤️";
        mainEl.textContent = "즐거운 하루 보내고 계신가요?";
        subEl.textContent = "점심 약속, 병원 예약일도 쉽게 계산해 보세요.";
    } else if (hour >= 17 && hour < 21) {
        emojiEl.textContent = "🌇";
        mainEl.textContent = "하루를 잘 마무리하고 계신가요?";
        subEl.textContent = "기념일과 손주 나이도 한 번 확인해 보셔도 좋습니다.";
    } else {
        emojiEl.textContent = "🌙";
        mainEl.textContent = "고생 많으셨습니다. 이제 쉬실 시간입니다.";
        subEl.textContent = "내일 필요한 계산도, 이곳에 오시면 제가 기억하고 있습니다.";
    }
}

// 페이지 로드 시 자동 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTimeGreeting);
} else {
    updateTimeGreeting();
}
