document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
