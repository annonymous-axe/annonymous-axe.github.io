const filterDropdown = document.getElementById('categoryFilter');
const projectCards = document.querySelectorAll('.project-card-container');

filterDropdown.addEventListener('change', function () {
  const selectedCategory = this.value;

  projectCards.forEach(card => {
    if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {
      // Show card
      card.style.display = 'block';
      requestAnimationFrame(() => {
        card.classList.remove('hide');
      });
    } else {
      // Hide card with animation first
      card.classList.add('hide');
      setTimeout(() => {
        card.style.display = 'none'; // remove from layout after animation
      }, 400); // match CSS transition duration
    }
  });
});

// Redirect on card click
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'project.html';
  });
});