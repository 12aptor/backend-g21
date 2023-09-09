import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export const Payments = () => {
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
    <div className="Payments">
      <div>
        <h3>Datos de pagos</h3>
        <form>
          <div className="Payment-form-control">
            <label htmlFor=""></label>
          </div>
        </form>
      </div>
      <div>
        <h3>Carrito de compra</h3>
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
