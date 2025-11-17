function goAgeResult() {
    const y = document.getElementById("birthYear").value;

    if (!y || y.length !== 4) {
        alert("출생연도 4자리를 입력해주세요!");
        return;
    }

    location.href = `/age/result.html?year=${y}`;
}


