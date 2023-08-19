console.log("Me estoy ejecutando...")
let productos = document.getElementById('productos')

function crearProducto(prod){
    productos.innerHTML += 
    `<div class="col-lg-6">
    <div class="single-item-wrap style-2">
        <div class="media">
            <div class="thumb">
                <img src="${prod.imagen}" alt="img">
            </div>
            <div class="wrap-details">
                <h5><a href="single-product.html">${prod.nombre}</a></h5>
                <div class="wrap-footer">
                    <h6 class="price">${prod.precio}</h6>
                    <button type="submit" class="btn btn-secondary">ADD TO CART</button>
                </div>                            
            </div>
        </div>
    </div>`
}

const arrayProductos = [
    {
        'nombre':'POLLO A LA BRASA',
        'imagen':'https://img1.freepng.es/20180601/wjk/kisspng-pollo-a-la-brasa-roast-chicken-peruvian-cuisine-fr-5b1191771c65a7.0442864615278780071163.jpg',
        'precio':'100'
    },
    {
        'nombre':'PIZZA AMERICANA',
        'imagen':'https://realplaza.vtexassets.com/arquivos/ids/20631630/image-18518f11bed241b59b5cbacd02a5051f.jpg',
        'precio':'150'
    }
]

arrayProductos.forEach(p => crearProducto(p))



