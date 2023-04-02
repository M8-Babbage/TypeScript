// --------------------------------------------------------------------//
// ----------------------------- ASYNC --------------------------------//
// --------------------------------------------------------------------//
import axios from "axios";

// Interfaz de productos
interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
}

// Interfaz de categoría
interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

(async () => {
  // Create instance of axios
  const platzi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products"
  });

  async function getProductsAsync(): Promise<string[]> {
    // If you want to use the type of the response, you can use the generic type of the axios instance.
    const { data } = await platzi.get<Products[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    // Or force if is necesary
    // const forceData = data as Products[];
    return data;
  }

  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();
