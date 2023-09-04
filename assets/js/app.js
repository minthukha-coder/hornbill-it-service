let text = document.getElementById('text');
text.innerHTML = text.innerText.split("").map(
    (char, i) => 
    `<span style = "transform:rotate(${i * 12.5}deg)">${char}</span>`
).join("")


const typed = new Typed('.multiple-text',{
    strings : ['Business','eCommerce','Personal','Technology','Entertainment'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev", 
    },
    loop : true
  });