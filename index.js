const { title } = require("process");
const ProductManager = require("./Classes/ProductManager");

const managerProductos = new ProductManager()

managerProductos.addProduct('Celular', 'Iphone', 250, 'Sin Imagen', '13Pro', 40);
managerProductos.addProduct('Iphone', 'apple', 250, 'Sin Imagen', '14Pro', 50);

managerProductos.addProduct('Notebook', 'Samsung', 250, 'Sin Imagen', 'Samsung11', 50);

const allProducts = () => {
        managerProductos.getProducts()
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    
    //managerProductos.getProductById(1)
    
    managerProductos.deleteProduct(2)
    
   allProducts()


    




