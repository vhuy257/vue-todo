import type { Product } from '@/model/product';
import { getLocalStorage, setLocalStorage } from './db';
const dbName = 'cart';

export const addProductToCart = (product: Product) => {
    const db = getLocalStorage(dbName);
    const checkDuplicate = db.findIndex(
        (item: Product) => item.id === product.id
    );
    product.qty !== undefined ? product.qty : (product.qty = 1);
    if (checkDuplicate === -1) {
        const updateQtyProduct = { ...product, qty: product.qty };
        const newDb = [...db, updateQtyProduct];
        setLocalStorage(dbName, newDb);
    } else {
        const newDb = db;
        newDb[checkDuplicate].qty += product.qty;
        setLocalStorage(dbName, newDb);
    }
};

export const getProductsFromCart = () => {
    return getLocalStorage(dbName);
};

export const removeItemFromCart = (product: Product) => {
    const db = getLocalStorage(dbName);
    const newDb = db.filter((item: Product) => item.id !== product.id);
    setLocalStorage(dbName, newDb);
};

export const updateCartItems = (cart: Product[]) => {
    return setLocalStorage(dbName, cart);
};
