
const d = document;

const $logo = d.querySelector('.logo'),
    $sidebar = d.querySelector('.menu-sidebar');

d.addEventListener("click",(e)=>{
    if ((e.target === $logo) || (e.target.matches('.logo *'))) {
        $sidebar.classList.toggle("menu-responsive");
    }
});


