import "./PublicShoppingCart.scss";
import { MdClose } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export const PublicShoppingCart = ({ showShopping, handleShowShopping }) => {
  const [shoppingItems, setShoppingItems] = useState([
    {
      imagen: "",
      nombre: "Zapatillas Adidas",
      cantidad: 1,
      precio: 100.2,
    },
    {
      imagen: "",
      nombre: "Zapatillas Pumba",
      cantidad: 2,
      precio: 150.0,
    },
  ]);

  return (
    <div
      className={`Shopping-Cart ${
        showShopping === false && "Shooping-Cart-hidden"
      }`}
    >
      <div className="Shopping-Cart-content">
        <MdClose className="Shopping-Cart-close" onClick={handleShowShopping} />
        <h3 className="Shopping-Cart-title">Carrito de compras</h3>
        <ul>
          {shoppingItems &&
            shoppingItems.map((item) => (
              <li className="Shopping-Cart-item">
                <div className="Shopping-Cart-item-image">
                  {/* <img src={item.imagen} alt="Imagen Producto" /> */}
                </div>
                <span className="Shopping-Cart-item-name">{item.nombre}</span>
                <span className="Shopping-Cart-item-amount">
                  {item.cantidad}
                </span>
                <span className="Shopping-Cart-item-price">{item.precio}</span>
                <FaTrash className="Shopping-Cart-item-trash" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
