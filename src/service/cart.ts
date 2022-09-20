import type { Product } from '@/model/product';

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart') as string) || [];
};

export const setLocalStorage = (db: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(db));
};

export const addProductToCart = (product: Product) => {
    const db = getLocalStorage();
    const checkDuplicate = db.findIndex(
        (item: Product) => item.id === product.id
    );

    if (checkDuplicate === -1) {
        const updateQtyProduct = { ...product, qty: 1 };
        const newDb = [...db, updateQtyProduct];
        setLocalStorage(newDb);
    } else {
        const newDb = db;
        newDb[checkDuplicate].qty += 1;
        setLocalStorage(newDb);
    }
};

export const getProductsFromCart = () => {
    return getLocalStorage();
};

export const removeItemFromCart = (product: Product) => {
    const db = getLocalStorage();
    const newDb = db.filter((item: Product) => item.id !== product.id);
    setLocalStorage(newDb);
};
