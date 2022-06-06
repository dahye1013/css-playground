const $testimonialsContainer = document.querySelector('.testimonial-container');
const $testimonial = document.querySelector('.testimonial');
const $userImage = document.querySelector('.user-image');
const $username = document.querySelector('.username');
const $role = document.querySelector('.role');

const UPDATE_SECONDS = 10;

const mockData = [{
        name: 'yuri',
        position: 'teacher',
        photo: `https://randomuser.me/api/portraits/women/48.jpg`,
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus numquam deserunt nam explicabo nisi hic ut quidem non quos, natus fugiat rem reiciendis sit? Iste a mollitia cumque accusamus quaerat, esse sequi consectetur et id? Facilis eligendi
            sed inventore rerum hic mollitia, nemo, vel illum facere eos eaque molestias ab quam similique tempore pariatur nulla accusantium asperiores distinctio deleniti quas! Sed maxime ad exercitationem quisquam! Alias consequatur dolore quas quos
            totam, earum quasi odit corrupti nemo aspernatur. Necessitatibus incidunt facilis odit, veniam deserunt quia ducimus repellat harum, porro officiis commodi reiciendis aperiam quae. Quis, tempore illo! Quos, facere quia.`,
        color: '#22b8cf',
    },
    {
        name: 'jason',
        position: 'dog',
        photo: `https://randomuser.me/api/portraits/men/23.jpg`,
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus numquam deserunt nam explicabo nisi hic ut quidem non quos, natus fugiat rem reiciendis sit? Iste a mollitia cumque accusamus quaerat, esse sequi consectetur et id? Facilis eligendi
            sed inventore rerum hic mollitia, nemo, vel illum facere eos eaque molestias ab quam similique tempore pariatur nulla accusantium asperiores distinctio deleniti quas! Sed maxime ad exercitationem quisquam! Alias consequatur dolore quas quos
            totam, earum quasi odit corrupti nemo aspernatur. Necessitatibus incidunt facilis odit, veniam deserunt quia ducimus repellat harum, porro officiis commodi reiciendis aperiam quae. Quis, tempore illo! Quos, facere quia.`,
        color: '#20c997',
    },
    {
        name: 'tina',
        position: 'marketer',
        photo: `https://randomuser.me/api/portraits/women/22.jpg`,
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus numquam deserunt nam explicabo nisi hic ut quidem non quos, natus fugiat rem reiciendis sit? Iste a mollitia cumque accusamus quaerat, esse sequi consectetur et id? Facilis eligendi
            sed inventore rerum hic mollitia, nemo, vel illum facere eos eaque molestias ab quam similique tempore pariatur nulla accusantium asperiores distinctio deleniti quas! Sed maxime ad exercitationem quisquam! Alias consequatur dolore quas quos
            totam, earum quasi odit corrupti nemo aspernatur. Necessitatibus incidunt facilis odit, veniam deserunt quia ducimus repellat harum, porro officiis commodi reiciendis aperiam quae. Quis, tempore illo! Quos, facere quia.`,
        color: '#94d82d',
    },
];

let index = 1;

const updateTestimonial = () => {
    const { name, position, photo, text, color } = mockData[index];
    $testimonial.innerHTML = text;
    $userImage.src = photo;
    $username.innerHTML = name;
    $role.innerHTML = position;
    $testimonialsContainer.style.backgroundColor = color;

    index += 1;
    if (index > $testimonial.length - 1) {
        index = 0;
    }
};

setInterval(updateTestimonial, UPDATE_SECONDS * 1000);