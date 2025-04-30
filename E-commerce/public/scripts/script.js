/*
Evento que se encarga de buscar los productos coincidentes con los nombres que se ingresan, si
no hay coincidencias muestra un mensaje por defecto. 
*/
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product-card');
  const noResults = document.getElementById('noResults');

  if (!searchInput || !productCards) return;

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    let matches = 0;

    //Se recorren todas las tarjetas de productos
    productCards.forEach(card => {
      const title = card.querySelector('.product-title').textContent.toLowerCase();
      const match = title.includes(searchTerm);

      //Muestra u oculta la tarjeta según si hay coincidencia
      card.style.display = match ? 'block' : 'none';
      if (match) matches++;
    });

    //Muestra el mensaje si no hay coincidencias
    if (noResults) {
      noResults.style.display = matches === 0 ? 'block' : 'none';
    }
  });
});
