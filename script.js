const API_KEY = "ad0c425727598bacc3ba229cd7211efb";


function obtenerClima() {
  const ciudad = document.getElementById("ciudad").value.trim();
  const resultado = document.getElementById("resultado");

  if (!ciudad) {
    resultado.innerHTML = "<p>Por favor ingresa una ciudad.</p>";
    return;
  }


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;


  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("No se encontró la ciudad");
      }
      return response.json(); 
    })
    .then(data => {
      
      const nombreCiudad = data.name;
      const temperatura = data.main.temp;
      const descripcion = data.weather[0].description;

     
      resultado.innerHTML = `
        <h2>${nombreCiudad}</h2>
        <p><strong>Temperatura:</strong> ${temperatura}°C</p>
        <p><strong>Clima:</strong> ${descripcion}</p>
      `;
    })
    .catch(error => {
     
      resultado.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
