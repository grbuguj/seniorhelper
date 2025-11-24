// common.js - 전체 사이트 공통 기능

// ============================================
// 글자 크게 보기 기능
// ============================================
(function() {
    // 페이지 로드 즉시 저장된 설정 적용
    const savedSize = localStorage.getItem('textSize');
    const body = document.body;
    
    if (savedSize === 'large') {
        body.classList.add('large-text');
    }
    
    // 글자 크기 토글 함수
    window.toggleTextSize = function() {
        const isLarge = body.classList.toggle('large-text');
        
        // 설정 저장
        localStorage.setItem('textSize', isLarge ? 'large' : 'normal');
        
        // 버튼 텍스트 업데이트
        updateButtonText();
    };
    
    // 버튼 텍스트 업데이트 함수
    function updateButtonText() {
        const btn = document.getElementById('textSizeBtn');
        if (btn) {
            const isLarge = body.classList.contains('large-text');
            btn.textContent = isLarge ? '글자 작게' : '글자 크게';
        }
    }
    
    // 페이지 로드 시 버튼 텍스트 설정
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateButtonText);
    } else {
        updateButtonText();
    }
    
    // 약간의 지연 후에도 한 번 더 체크 (확실하게)
    setTimeout(updateButtonText, 100);
})();

// ============================================
// Google Analytics (승인 후 활성화)
// ============================================
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
*/
