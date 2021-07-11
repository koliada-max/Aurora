const dropBtn = document.querySelector('.footer__btn');

const dropList = document.querySelector('.footer__list-drop');
console.log(dropBtn)


dropBtn.addEventListener("click", () => {
    dropList.classList.remove('is-hidden');

});
