const ProductManager = require("../Classes/ProductManager");
const express = require('express');

const managerProductos = new ProductManager()

const app = express()

const port = 8080

const allProducts = async () => {
    try {
        /******Lineas comentadas para probar el codigo **********/

        // const products = await managerProductos.getProducts()
        // console.log(products)
 
        // await managerProductos.addProduct('producto Prueba 1',  'Este es un producto de prueba', 300, 'Sin imagen', 'abc1', 25 )

        // await managerProductos.addProduct('producto Prueba 2',  'Este es un producto de prueba', 400, 'Sin imagen', 'abc2', 25 )

        // await managerProductos.addProduct('producto Prueba 3',  'Este es un producto de prueba', 500, 'Sin imagen', 'abc3', 25 )

        // await managerProductos.addProduct('producto Prueba 4',  'Este es un producto de prueba', 600, 'Sin imagen', 'abc4', 25 )

        // await managerProductos.addProduct('producto Prueba 5',  'Este es un producto de prueba', 300, 'Sin imagen', 'abc5', 25 )

        // await managerProductos.addProduct('producto Prueba 6',  'Este es un producto de prueba', 400, 'Sin imagen', 'abc6', 25 )

        // await managerProductos.addProduct('producto Prueba 7',  'Este es un producto de prueba', 500, 'Sin imagen', 'abc7', 25 )

        // await managerProductos.addProduct('producto Prueba 8',  'Este es un producto de prueba', 600, 'Sin imagen', 'abc8', 25 )

        // await managerProductos.addProduct('producto Prueba 9',  'Este es un producto de prueba', 300, 'Sin imagen', 'abc9', 25 )

        // await managerProductos.addProduct('producto Prueba 10',  'Este es un producto de prueba', 400, 'Sin imagen', 'abc10', 25 )

        // await managerProductos.addProduct('producto Prueba 11',  'Este es un producto de prueba', 500, 'Sin imagen', 'abc11', 25 )

        // await managerProductos.addProduct('producto Prueba 12',  'Este es un producto de prueba', 600, 'Sin imagen', 'abc12', 25 )

    } catch (error) {
        console.log(error)
    }
    }

    app.get('/products', async (req, res) => {
        try {
            const { limit } = req.query
            const allProducts = await managerProductos.getProducts()
            const productsFilter = allProducts.slice(0, limit || 10)
            res.json({Productos: productsFilter})
            
        } catch (error) {
            console.log(error)
        }
    })

    app.get('/products/:id', async (req, res) => {
        try {
            const { id } = req.params
            const allProducts = await managerProductos.getProducts()
            const productFind = allProducts.find(product => product.id === Number(id))
            if(!productFind){
                res.send(`No se encontro un producto con el id ${id}`)
            }else{
                return res.json({Producto: productFind})
            }
            
        } catch (error) {
            console.log(error)
        }
    })


    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
    } )

    
allProducts()






    




