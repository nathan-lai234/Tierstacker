export declare namespace TierListD {
    export interface TierList {
        rows: string[];
        items: Item[];
    }
    export interface TierRow {
        label: string;
    }

    export interface Item {
        name: string;
        imageUri: string;
    }

    export interface ItemList {
        items: Item[];
    }
}
