const $header = document.getElementById('header');
const $title = document.getElementById('title');
const $excerpt = document.getElementById('excerpt');
const $profile_img = document.getElementById('profile_img');
const $name = document.getElementById('name');
const $date = document.getElementById('date');

const removeAnimateBg = () => {
    const $animated_bgs = document.querySelectorAll('.animated-bg');
    const $animated_bg_texts = document.querySelectorAll('.animated-bg-text');

    $animated_bgs.forEach($bg => $bg.classList.remove('animated-bg'));
    $animated_bg_texts.forEach($bg => $bg.classList.remove('animated-bg-text'));
};

const fetchData = () => {
    $header.innerHTML = /* html */ `<img src="https://source.unsplash.com/random/400x300" alt="random-image">`;
    $title.textContent = 'Card title';
    $profile_img.innerHTML = /* html */ `<img src="https://randomuser.me/api/portraits/women/90.jpg" alt="profile">`;
    $excerpt.textContent = 'This is excerpt from detail content. description of something...';
    $name.textContent = 'Dahye Shin';
    $date.textContent = new Date().toLocaleDateString();
    removeAnimateBg();
};

setTimeout(fetchData, 2000);