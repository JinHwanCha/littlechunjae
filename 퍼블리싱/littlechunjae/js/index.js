const thumbnails = document.querySelectorAll(
  ".content_list.sns .content_item .img_box img"
);
const popup = document.querySelector(".pop_up");
const popupImages = document.querySelectorAll(".pop_up .swiper-wrapper img");

let swiper; // 스와이퍼 객체 변수 선언

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    // 이미지 경로 설정
    const folder = thumbnail.alt.substring(0, 1).toUpperCase();
    const imagePaths = [
      `images/02_sns/${folder}/little_chunjae_${folder}_1080_01.png`,
      `images/02_sns/${folder}/little_chunjae_${folder}_1080_02.png`,
      `images/02_sns/${folder}/little_chunjae_${folder}_1080_03.png`,
    ];

    // 팝업 이미지 변경
    popupImages.forEach((popupImage, i) => {
      popupImage.src = imagePaths[i];
    });

    // 팝업 열기
    popup.classList.add("on");

    // 스와이퍼 초기화
    swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 150,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiper.slideTo(0); // 첫 번째 슬라이드로 이동

    // 클래스 추가
    const popupLinks = document.querySelectorAll(
      ".pop_up .swiper-wrapper .popup_link"
    );
    popupLinks.forEach((popupLink) => {
      if (thumbnail.alt === "D타입") {
        popupLink.classList.add("link_d");
      } else {
        popupLink.classList.remove("link_d");
      }
    });
  });
});

// 팝업 닫기 버튼 클릭 시 팝업 닫기
const closeButton = document.querySelector(".close_box img");
closeButton.addEventListener("click", () => {
  popup.classList.remove("on");

  // 스와이퍼 초기화
  swiper.slideTo(0); // 첫 번째 슬라이드로 이동

  // 클래스 제거
  const popupLink = document.querySelector(
    ".pop_up .swiper-wrapper .popup_link"
  );
  popupLink.classList.remove("link_d");
});
