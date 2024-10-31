//사용자 언어 감지
  const texts = 
    {
      en: { title: "Challenge Calculator", quota: "Quota", amount: "Amount of Money Required", result: "Amount to Sell" },
      ko: { title: "챌린지 계산기", quota: "할당량", amount: "필요한 돈", result: "만큼 파십시오." }
    };

  const userLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    document.querySelector('.title').textContent = texts[userLang].title;
      document.querySelector('label[for="input1"]').textContent = texts[userLang].quota;
      document.querySelector('label[for="input2"]').textContent = texts[userLang].amount;
      document.querySelector('label[for="result"]').textContent = texts[userLang].result;

      if (userLang === 'ko')
      {
        document.body.style.fontFamily = 'Orbit, sans-serif'; // 한글 폰트 출력
      } else {
        document.body.style.fontFamily = '3270, sans-serif'; // 영어 폰트 출력
      }