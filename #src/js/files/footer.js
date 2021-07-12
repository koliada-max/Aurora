const dropBtn = document.querySelector('.footer__btn');

const dropList = document.querySelector('.footer__list-drop');
console.log(dropBtn)


dropBtn.addEventListener("click", () => {
    dropList.classList.remove('is-hidden');

});

// $(document).ready(function () {
//     $('.class-name').click(function (event) {
//         if ($('.class-name').hasClass('one')) {
//             $('.class-name').not($(this)).removeClass('active');
//             $('.class-name').not($(this).next()).slideUp(300);
//         }
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });