"use client";
import { useEffect, useState } from "react";
import ProductCard from "./testBorrar";

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/shop/product/");
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Guarda los productos en el estado
          console.log(data); // Verifica los datos recibidos
        } else {
          console.error("Error al obtener los productos");
        }
      } catch (error) {
        console.error("Error de conexión", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <div>
      <h1>Lista de Productos</h1>
      {/* Aquí mapeamos los productos y los mostramos */}
      <div>
        {products.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          products.map((product) => (
            <ProductCard
                key={product.id}
                image={`http://127.0.0.1:8000/${product.images[0]?.image}`}
                name={product.name}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
            />
            // <div key={product.id} className="product-card">
            //   <h2>{product.name}</h2>
            //   <p>{product.description}</p>
            //   <p>Precio: ${product.price}</p>
            //   <p>Categoría: {product.category.name}</p>
            //   {/* Muestra las imágenes del producto */}
            //   <div>
            //     {product.images.map((image, index) => (
            //       <img key={index} src={`http://127.0.0.1:8000/${image.image}`} alt={`Imagen del producto ${product.name}`} />
            //     ))}
            //   </div>
            // </div>
          ))
        )}
      </div>
    </div>
    
    </>
  );
};

export default Test;
