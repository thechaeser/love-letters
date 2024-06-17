function displayLetter() {
  // 편지 내용 가져오기 및 출력
  const letterText = document.getElementById('letter-content').value;
  const letterHTML = `<p>${letterText}</p>`;

  // 결과를 표시할 요소 정의
  const letterDisplay = document.getElementById('letter-display');
  letterDisplay.innerHTML = letterHTML;

  // 컨페티 요소 생성 및 추가
  const confettiContainer = document.getElementById('confetti-container');
  for (let i = 0; i < 500; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confettiContainer.appendChild(confetti);
  
   // 컨페티 위치 무작위 설정
   const left = Math.random() * window.innerWidth;
   const top = Math.random() * window.innerHeight;
  
   confetti.style.left = `${left}px`;
   confetti.style.top = `${top}px`;
  
   confettiContainer.appendChild(confetti);
  }

// 컨페티 애니메이션 시작 함수
function startConfettiAnimation() {
  const confettiContainer = document.getElementById('confetti-container');
  confettiContainer.classList.add('show');
}

// 마음 보기 버튼 클릭 이벤트 핸들러
document.getElementById('newLetterButton').addEventListener('click', () => {
  // 편지 내용 출력
  displayLetter();

  // 컨페티 애니메이션 시작 (기존 컨페티 애니메이션은 중단되지 않음)
  startConfettiAnimation();
});

// 컨페티 애니메이션 시작 (페이지 로드 시 한 번 실행)
window.onload = startConfettiAnimation;


// 마음 보기 버튼 클릭 이벤트 핸들러
document.getElementById('newLetterButton').addEventListener('click', () => {
  // 편지 내용 출력 및 컨페티 애니메이션 시작
  displayLetter();
  startConfettiAnimation();

  // 기존 컨페티 애니메이션 중지
  if (confettiIntervalId) {
    clearInterval(confettiIntervalId);
  }

  // 새롭게 컨페티 애니메이션 시작
  confettiIntervalId = setInterval(startConfettiAnimation, 5000);
});

}
