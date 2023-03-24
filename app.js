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

  const scrollLeftButton = document.querySelector('#scroll-left-button');
  const scrollRightButton = document.querySelector('#scroll-right-button');
  const galleryContainer = document.querySelector('#photo-gallery');
  const scrollAmount = 500;
  
  // Add event listeners to the buttons
  scrollLeftButton.addEventListener('click', () => {
	galleryContainer.scroll({
	  left: galleryContainer.scrollLeft - scrollAmount,
	  behavior: 'smooth'
	});
  });
  
  scrollRightButton.addEventListener('click', () => {
	galleryContainer.scroll({
	  left: galleryContainer.scrollLeft + scrollAmount,
	  behavior: 'smooth'
	});
  });
  

$(document).ready(function() {
	$('#photo-gallery img').on('click', function() {
	  $(this).addClass('expanded');
	});
  
	$(document).on('click', '.expanded', function() {
	  $(this).removeClass('expanded');
	});
  });
  

  function scrollRight() {
	if (currentIndex < images.length - 1) {
	  currentIndex++;
	  let image = images[currentIndex];
	  image.classList.add('enlarged', 'active');
	  image.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
	  images[currentIndex - 1].classList.remove('active');
	}
  }
  
  function scrollLeft() {
	if (currentIndex > 0) {
	  currentIndex--;
	  let image = images[currentIndex];
	  image.classList.add('enlarged', 'active');
	  image.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
	  images[currentIndex + 1].classList.remove('active');
	}
  }

  
  function touchStart(event) {
	startX = event.touches[0].clientX;
  }
  
  function touchEnd(event) {
	let endX = event.changedTouches[0].clientX;
	if (startX - endX > 50) {
	  scrollRight();
	} else if (endX - startX > 50) {
	  scrollLeft();
	}
	if (currentIndex == 0) {
	  leftButton.style.display = "none";
	} else if (currentIndex == images.length - 1) {
	  rightButton.style.display = "none";
	} else {
	  leftButton.style.display = "flex";
	  rightButton.style.display = "flex";
	}
  }
  