let products = [];
let id = 0;

function resetProducts(){
    products = [];
    id = 0;
}

function getProducts(){
    return products;
}


function addProduct(name, price){

    if(!name || !price)
        throw new Error('name and price must be defined')

    Object.values(products).forEach((product)=>{
        if(product.name === name)
            throw new Error('the product is allready added')
    })

    products[id] = {"name":name,"price":price};
    id += 1;
}

function removeProduct(id){
    if (!products[id])
        throw new Error('incorrect id')

    delete products[id];
}

function getProduct(id){
    if (!products[id])
        throw new Error('incorrect id')

    return products[id];
}

function updateProduct(id, name, price){
    if (!products[id])
        throw new Error('incorrect id')

    if(!name) name = products[id].name;
    if(!price) price = products[id].price;

    products[id] = {"name":name,"price":price};
}



module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    resetProducts,
    getProduct,
    updateProduct,
    id,
    products
}

