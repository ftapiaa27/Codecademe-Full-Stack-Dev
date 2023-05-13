// Information to reach API
const apiKey = '81d747f1f2d1440d8c7552d9732535e7';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
// .then syntax
// const shortenUrl = () => {
// const urlToShorten = inputField.value;
// const data = JSON.stringify({destination: urlToShorten});
// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json',
//     'apikey': apiKey
//   },
//   body: data
// }).then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error('Request failed!');
// }, networkError => {
//   console.log(networkError.message);
// }).then(jsonResponse => {
//   renderResponse(jsonResponse);
// })
// }
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
try {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    }
  });
  if(response.ok){
    const jsonResponse = await response.json();
    renderResponse(jsonResponse);
  }
} catch (error) {
  console.log(error);
}
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
