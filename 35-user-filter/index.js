const BASE_URL = 'https://randomuser.me/api';

/**
 * @description
 * [filter user]
 * - fetch user profile by using random user api
 * @see {@link https://randomuser.me/}
 */


const $results = document.getElementById('result');
const $filter = document.getElementById('filter');
const $listItems = [];

const fetchData = async() => {
    const res = await fetch(BASE_URL + '?results=50');
    const { results } = await res.json();

    $results.replaceChildren();

    results.forEach((user) => {
        const $li = document.createElement('li');
        $listItems.push($li);
        $li.innerHTML = /* html */ `
        <img src="${user.picture.medium}" alr="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} ${user.location.country}</p>
        </div>
        `
        $results.appendChild($li);
    })

}

const filterUser = (searchKeyword) => {
    $listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchKeyword.toLowerCase())) {
            item.classList.remove('hide')
            return;
        }
        item.classList.add('hide')
    })
}

const init = () => {
    fetchData();
    $filter.addEventListener('input', (e) => filterUser(e.target.value));
}

init();