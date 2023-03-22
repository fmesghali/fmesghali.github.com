const links = [
	{
		label: 'Google',
		url: 'https://www.google.com'
	},
	{
		label: 'Facebook',
		url: 'https://www.facebook.com'
	},
	{
		label: 'Twitter',
		url: 'https://www.twitter.com'
	}
];

const linkList = document.getElementById('link-list');

links.forEach(link => {
	const listItem = document.createElement('li');
	const anchor = document.createElement('a');
	anchor.textContent = link.label;
	anchor.setAttribute('href', link.url);
	listItem.appendChild(anchor);
	linkList.appendChild(listItem);
});


function switchLanguage(lang) {
    if (lang === 'it') {
      window.location.href = 'index-it.html';
    }
    if (lang === 'en') {
        window.location.href = 'index.html';
      }
    // add more conditions for other languages if desired
  }


 
