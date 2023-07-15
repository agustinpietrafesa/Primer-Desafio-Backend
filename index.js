const ProductManager = require("./Classes/ProductManager");

const managerProductos = new ProductManager()

const allProducts = async () => {
    try {
        /******Lineas comentadas para probar el codigo **********/

        // const products = await managerProductos.getProducts()
        // console.log(products)
 
        // await managerProductos.addProduct('producto Prueba',  'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25 )

        // const products2 = await managerProductos.getProducts()
        // console.log(products2)
        
        //await managerProductos.getProductById(1)

        // await managerProductos.updateProduct(1, 'title' , 'nuevo titulo')
        
        // await managerProductos.updateProduct(1, 'price' , 'nuevo precio')

        //await managerProductos.deleteProduct(1)

        // const products1 = await managerProductos.getProducts()
        // console.log(products1)

    } catch (error) {
        console.log(error)
    }
    }
    
allProducts()






    




