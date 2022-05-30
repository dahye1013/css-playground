/**
 * @description
 * references
 *
 * @see {github-api} {@link https://docs.github.com/en/rest/users/users#get-a-user}
 * @see {axios} {@link https://axios-http.com/docs/intro}
 */

const API_URL = 'https://api.github.com/users/';

const $form = document.getElementById('form');
const $search = document.getElementById('search');
const $main = document.getElementById('main');

const fetchData = {
    getUser: async username => {
        try {
            const { data } = await axios(API_URL + username);
            createCard.userCard(data);
            fetchData.getRepos(username);
        } catch (err) {
            if (err.response.status === 404) {
                createCard.errorCard('No Profile with this username');
            }
        }
    },

    getRepos: async username => {
        try {
            const { data } = await axios(API_URL + username + `/repos`);
            createCard.makeRepoLabel(data);
        } catch (err) {
            console.log(err);
        }
    },
};

const createCard = {
    userCard: user => {
        const cardMarkup = /* html */ `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.login}-img" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio} </p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                </div>

            </div>


        </div>
`;
        $main.innerHTML = cardMarkup;
    },

    errorCard: message => {
        const cardMarkup = /* html */ `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;
        $main.innerHTML = cardMarkup;
    },

    makeRepoLabel: repos => {
        const $repos = document.getElementById('repos');
        repos
            .sort((a, b) => a.id - b.id)
            .slice(-5)
            .forEach(repo => {
                const $repo = document.createElement('a');
                $repo.classList.add('repo');
                $repo.href = repo.html_url;
                // not open on the same page
                $repo.target = '_blank';
                $repo.innerText = repo.name;

                $repos.appendChild($repo);
            });
    },
};

const setEvent = () => {
    $form.addEventListener('submit', event => {
        event.preventDefault();
        const user = $search.value;
        if (user) {
            fetchData.getUser(user);
            $search.value = '';
        }
    });
};

setEvent();