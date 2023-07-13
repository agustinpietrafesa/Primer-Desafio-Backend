const ProductManager = require("./Classes/ProductManager");

const managerProductos = new ProductManager()

const allProducts = () => {
        managerProductos.getProducts()
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    allProducts()

managerProductos.addProduct('producto Prueba',  'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25 )

    allProducts()

    //managerProductos.getProductById(1)
     
    // managerProductos.deleteProduct(2)
    


    




