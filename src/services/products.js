/* https://6912245f52a60f10c820c470.mockapi.io/:endpoint */
//const BASE_URL = "https://6912245f52a60f10c820c470.mockapi.io/products";


const BASE_URL = "https://6912245f52a60f10c820c470.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Error al crear el producto");
  }


  const result = await res.json();
  return result;
};

export const getProducts = async (categoria) => {
  let url = BASE_URL;
  if (categoria) {
    url = `${BASE_URL}?categoria=${encodeURIComponent(categoria)}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener los productos");
  }

  const results = await res.json();
  return results;
};
