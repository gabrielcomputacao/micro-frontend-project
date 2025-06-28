export async function getProducts() {
  const api = import.meta.env.VITE_API_URL_PRODUCTS;

  try {
    const result = await fetch(String(api), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      throw new Error(`HTTP Error: ${result.status} - ${result.statusText}`);
    }

    const products = await result.json();

    return products;
  } catch (error) {
    throw new Error(`Erro ao carregar produtos ${error}`);
  }
}
