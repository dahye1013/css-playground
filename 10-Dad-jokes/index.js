/**
 * Api ref: https://icanhazdadjoke.com/
 *
 * API using fetch to make an HTTP request
 * - serves jason data
 *
 * [Jason]
 * - essentially like a like a JS object
 * - use double quotes on the keys and the values
 *
 * [end points]
 * - this api fetch random dad joke formatted for Slack.
 * - This endpoint is used by the icanhazdadjoke Slack app but can be used by third parties who need to receive a random joke formatted as a Slack message.
 * - check with command -> curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd
 */

const $joke = document.getElementById('joke');
const $jokeBtn = document.getElementById('jokeBtn');

$jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  /**
   * 🚨🚨🚨
   *  if request without the except header of applications?
   *  -> it's going to give us html
   */
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  $joke.innerHTML = data.joke;
}
