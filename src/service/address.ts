import { getLocalStorage, setLocalStorage } from '@/service/db';
import type { Address } from '@/model/address';

const dbName = 'orderAddress';

export const getAddress = () => {
    getLocalStorage(dbName);
};

export const saveAddress = (address: Address) => {
    setLocalStorage(dbName, address);
};
