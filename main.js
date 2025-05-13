const parques = [
    {
      id: 1,
      nombre: "Parque Nacional Yellowstone",
      ubicacion: "Estados Unidos",
      continente: "América",
      extension: 8983,
      imagen: "Yellowstone.jpeg",
    },
    {
      id: 2,
      nombre: "Parque Nacional Serengeti",
      ubicacion: "Tanzania",
      continente: "África",
      extension: 14763,
      imagen: "serengeti.jpeg",
    },
    {
      id: 3,
      nombre: "Parque Nacional Torres del Paine",
      ubicacion: "Chile",
      continente: "América",
      extension: 2420,
      imagen: "torresdelpaine.jpeg",
    },
    {
      id: 4,
      nombre: "Parque Nacional Banff",
      ubicacion: "Canadá",
      continente: "América",
      extension: 6641,
      imagen: "banff.jpeg",
    },
    {
      id: 5,
      nombre: "Parque Nacional Fiordland",
      ubicacion: "Nueva Zelanda",
      continente: "Oceanía",
      extension: 12500,
      imagen: "fiorland.jpeg",
    },
    {
      id: 6,
      nombre: "Parque Nacional Kruger",
      ubicacion: "Sudáfrica",
      continente: "África",
      extension: 19485,
      imagen: "kruger.jpeg",
    },
  ];
  
  const parquesContainer = document.getElementById("parques-container");
  const paginationContainer = document.getElementById("pagination");
  const itemsPerPage = 2; 
  let currentPage = 1;
  
  function displayParques(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = parques.slice(start, end);
  
    parquesContainer.innerHTML = paginatedData
      .map(
        (parque) => `
        <div class="card">
          <img src="${parque.imagen}" alt="${parque.nombre}">
          <h2>${parque.nombre}</h2>
          <p>${parque.ubicacion}, ${parque.continente}</p>
          <p>Extensión: ${parque.extension} km²</p>
        </div>
      `
      )
      .join("");
  }
  
  function setupPagination() {
    const totalPages = Math.ceil(parques.length / itemsPerPage);
    paginationContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => {
      const pageNumber = i + 1;
      return `<button onclick="changePage(${pageNumber})">${pageNumber}</button>`;
    }).join("");
  }
  
  function changePage(page) {
    currentPage = page;
    displayParques(currentPage);
  }
  
  displayParques(currentPage);
  setupPagination();
