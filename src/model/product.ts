export interface Product {
    id: string;
    title: string;
    category?: string;
    images?: string[];
    isLoadingAddtoCart?: boolean;
    isAddedtoCart?: boolean;
    price: number;
    qty: number;
    totalPrice: number;
}
