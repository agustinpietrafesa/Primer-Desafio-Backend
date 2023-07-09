class ProductManager {
    constructor(){
        this.products = []
    };
    productId = 0 

    /*********Metodo para agregar productos nuevos la lista *************/
    addProduct(title, description, price, thumbnail, code, stock) {
        this.productId++;
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.productId
        }   
        /*******Generamos la obligatoriedad de los parametros  *********/
        const allParams = [title, description, price, thumbnail, code, stock]
        const reqParams = allParams.every(value => value);

        if ( !reqParams ){
            console.warn('Todos los parametros deben completarse')
            return;
        }
        /********Generamos la singulairdad del code ******/
        const checkCode = this.products.find(productCode => productCode.code === code)

        if(checkCode) {
            console.log('El producto ya esta ingresado en el sistema')
        } else {            
            this.products.push(product);
        }
     }
    /*********Metodo que retorna toda la lista de los productos que haya hasta el momento *******/
    getProducts() {
        return this.products
    }  
    /*********metodo que busca producto mediante un ID pasado como parametro ******/
    getProductById(id) {
        const productoBuscado = this.products.find(product => product.id === id)

        productoBuscado ? console.log(productoBuscado) : console.log('Product Not Found');
    }
};

/********Lineas comentadas para poder probar el codigo *********/

// const listaProductos = new ProductManager()

// listaProductos.addProduct('Celular', 'Iphone', 250, 'Sin Imagen', '13Pro', 40);

// listaProductos.addProduct('Tablet', 'Samsung', 300, 'Sin Imagen', 'A10', 40);

// listaProductos.addProduct('Notebook', 'Mac', 400, 'Sin Imagen', 'MacPro', 40);

// console.log(listaProductos.getProducts())






