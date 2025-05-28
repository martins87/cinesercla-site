import { Bomboniere } from "@/app/types/bomboniere";

export const getProductList = async (): Promise<Bomboniere[]> => {
  try {
    const response = await fetch("/api/bomboniere/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch product list. Status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving product list", error);

    return [];
  }
};

export const createProduct = async (product: Bomboniere) => {
  try {
    const response = await fetch("/api/bomboniere/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`Failed to create product. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error creating product", error);

    return null;
  }
};
