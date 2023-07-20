const ProductManager = require("../Classes/ProductManager");
const express = require('express');

const managerProductos = new ProductManager()

const app = express()

const port = 3000

const allProducts = async () => {
    try {
        /******Lineas comentadas para probar el codigo **********/

        // const products = await managerProductos.getProducts()
        // console.log(products)
 
        // await managerProductos.addProduct('producto Prueba 1',  'Este es un producto de prueba', 300, 'Sin imagen', 'abc1', 25 )

        // await managerProductos.addProduct('producto Prueba 2',  'Este es un producto de prueba', 400, 'Sin imagen', 'abc2', 25 )

        // await managerProductos.addProduct('producto Prueba 3',  'Este es un producto de prueba', 500, 'Sin imagen', 'abc3', 25 )

        // await managerProductos.addProduct('producto Prueba 4',  'Este es un producto de prueba', 600, 'Sin imagen', 'abc4', 25 )

        // const products2 = await managerProductos.getProducts()
        // console.log(products2)
        
        // await managerProductos.getProductById(1)

        // await managerProductos.updateProduct(1, 'title' , 'nuevo titulo')
        
        // await managerProductos.updateProduct(1, 'price' , 'nuevo precio')

        // await managerProductos.deleteProduct(1)

        // const products1 = await managerProductos.getProducts()
        // console.log(products1)

    } catch (error) {
        console.log(error)
    }
    }

    app.get('/', (req, res) => {
        const allProducts = managerProductos.getProducts()
        res.send({allProducts})
    })

    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
    } )

    
allProducts()






    




