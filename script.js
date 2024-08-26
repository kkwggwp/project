
// Scroll-top      
const scrolltopbtn = document.getElementById('scroll-top-btn');
      
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrolltopbtn.style.display = 'block';
  } else {
    scrolltopbtn.style.display = 'none';
  }
});
  
scrolltopbtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal

const modal = document.getElementById('subsmodal');
const openmodalbtn = document.querySelectorAll('.subsbtn');
const closebtn = document.querySelector('.close-btn');
const emailInput = document.querySelector('input[type="email"]');

const openmodal = () => {
  modal.style.display = 'block';
};

const closemodal = () => {
  modal.style.display = 'none';
};

const validateEmail = (email) => {
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailregex.test(email);
};

openmodalbtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      openmodal();
    } else {
      alert('유효하지 않은 이메일 주소입니다');
    }          
  });
});      

closebtn.addEventListener('click', closemodal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// kakao map

var container = document.getElementById('kakaomap'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴