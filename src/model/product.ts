export interface Product {
    id: string;
    title: string;
    category?: string;
    thumbnail: string;
    images?: string[];
    description: string;
    isLoadingAddtoCart?: boolean;
    isAddedtoCart?: boolean;
    price: number;
    qty: number;
    totalPrice: number;
}
