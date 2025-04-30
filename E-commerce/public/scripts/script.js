document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    const noResults = document.getElementById('noResults');
  
    if (!searchInput || !productCards) return;
  
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      let matches = 0;
  
      productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const match = title.includes(searchTerm);
        card.style.display = match ? 'block' : 'none';
        if (match) matches++;
      });
  
      if (noResults) {
        noResults.style.display = matches === 0 ? 'block' : 'none';
      }
    });
  });
  