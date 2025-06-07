function flipCard(element) {
  const card = element.closest('.project-card');
  card.classList.toggle("flipped");
  const track = card.querySelector('.carousel-track');
  if (track) updateDots(track);
}

function scrollProject(button, direction) {
  event.stopPropagation(); // Prevent flip when clicking arrow
  const card = button.closest('.project-card');
  const track = card.querySelector('.carousel-track');
  const itemWidth = track.querySelector('.carousel-item').offsetWidth;

  if (direction === 'left') {
    track.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: itemWidth, behavior: 'smooth' });
  }

  setTimeout(() => updateDots(track), 300);
}

function updateDots(track) {
  const items = track.querySelectorAll('.carousel-item');
  const dotsContainer = track.closest('.carousel').querySelector('.dots');
  dotsContainer.innerHTML = '';

  const scrollLeft = track.scrollLeft;
  const itemWidth = items[0].offsetWidth;
  const activeIndex = Math.round(scrollLeft / itemWidth);

  items.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === activeIndex) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
}

window.addEventListener('load', () => {
  document.querySelectorAll('.carousel-track').forEach(track => {
    updateDots(track);
  });
});


function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  navbar.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});