// navigation
const menuToggles = [...document.querySelectorAll('.toggle-inner-menu')];

menuToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
        toggle.setAttribute('aria-expanded', !expanded);
    })
})

const burger = document.querySelector('.burger-button');
const backdrop = document.querySelector('.backdrop');
const handleSideClick = () => {
    burger.setAttribute('aria-expanded', 'false');
}
burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
    if (!expanded) {
        backdrop.addEventListener('click', handleSideClick);
    } else {
        backdrop.removeEventListener('click', handleSideClick);
    }
})