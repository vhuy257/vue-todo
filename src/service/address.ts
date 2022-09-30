import { getLocalStorage, setLocalStorage } from '@/service/db';
import type { Address } from '@/model/address';

const dbName = 'orderAddress';

export const getAddress = () => {
    return getLocalStorage(dbName);
};

export const saveAddress = (address: Address) => {
    return setLocalStorage(dbName, address);
};
