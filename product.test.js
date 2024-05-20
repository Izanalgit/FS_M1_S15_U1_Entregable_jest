const { 
    resetProducts,
    addProduct,
    removeProduct, 
    getProducts, 
    getProduct, 
    updateProduct,
} = require('./product');

afterEach(()=>resetProducts())

describe('addProduct', () => {
    it('Should add a product in products array', () => {
        addProduct("product1", 22) 
        expect(getProducts()[0]).toEqual({"name":"product1","price":22});
    });
    it('Should trow an Error if name is not defined', () => {
        expect(() => addProduct("product1")).toThrow('name and price must be defined');
    });
    it('Should trow an Error if price is not defined', () => {
        expect(() => addProduct(null,22)).toThrow('name and price must be defined');
    });
    it('Should trow an Error if name product allready exists', () => {
        addProduct("product1", 22)
        expect(() => addProduct("product1", 44)).toThrow('the product is allready added');
    });
});

describe('removeProduct', () => {
    beforeEach(()=>addProduct("product1", 22))

    it('Should remove a product from products array', () => {
        expect(()=>removeProduct(1231)).toThrow('incorrect id');
    });
});

describe('getProduct', () => {
    beforeEach(()=>addProduct("product1", 22))

    it('Should return a product by id', () => {
        expect(()=>getProduct(1231)).toThrow('incorrect id');
    });
});

describe('updateProduct', () => {
    beforeEach(()=>addProduct("product1", 22))

    it('Should update a product by id', () => {
        updateProduct(0,"product2", 33)
        expect(getProducts()[0]).toEqual({"name":"product2","price":33});
    });
    it('Should fail with wrong id', () => {
        expect(()=>updateProduct(1231,"product2",33)).toThrow('incorrect id');
    });
    it('Should only update a product name by id', () => {
        updateProduct(0,"product2")
        expect(getProducts()[0]).toEqual({"name":"product2","price":22});
    });
    it('Should only update a product price by id', () => {
        updateProduct(0,null,33)
        expect(getProducts()[0]).toEqual({"name":"product1","price":33});
    });
});

