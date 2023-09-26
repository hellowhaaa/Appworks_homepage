// ---------Jquery toggle 未完成-------
// $(document).ready(function () {
//     $nav = $('.nav');
//     $toggleCollapse
// });
const responsive = {
    800: { items: 3 },
    600: { items: 2 },
    300: { items: 1 }
}

//--------- owl-crousel for blog-----------
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        // autoplayHoverPause: true
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

})



// Nav bar toggle function
const toggleBtn = document.querySelector('.toggle-button')
const toggleBtnIcon = document.querySelector('.toggle-button i')
const dropdownMenu = document.querySelector('.navbar-list-straight')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


//  Moving knowMe Button
const texts = ['認識我..'];
let count = 0;
let index = 0;
let currentText = "";
let letter = '';
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 3000);
    } else {
        setTimeout(type, 300);
    }
})();