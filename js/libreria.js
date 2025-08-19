const libreria = async () => {
  try {
    const response = await fetch(
      "https://68a3b19bc123272fb9b039fa.mockapi.io/Books"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};

// Export the function so main.js can use it
window.libreria = libreria;
