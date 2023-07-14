const ProductManager = require("./Classes/ProductManager");

const managerProductos = new ProductManager()

const allProducts = async () => {
    try {
        const products = await managerProductos.getProducts()
        console.log(products)
 
        await managerProductos.addProduct('producto Prueba',  'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25 )

        // const products1 = await managerProductos.getProducts()
        // console.log(products1)
 
        //await managerProductos.deleteProduct(1)
        
        // const products2 = await managerProductos.getProducts()
        // console.log(products2)

        await managerProductos.updateProduct(1, 'price', 3000)

        
    } catch (error) {
        console.log(error)
    }
    }
    
allProducts()



// // managerProductos.addProduct('producto Prueba',  'Este es un producto de prueba', 200, 'Sin imagen', 'abc23', 25 )
// // managerProductos.addProduct('producto Prueba',  'Este es un producto de prueba', 200, 'Sin imagen', 'abc1234', 25 )



//managerProductos.getProductById(1)
     




    




