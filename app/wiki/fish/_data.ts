export enum FishId {
    SockeyeSalmon = "sockeyeSalmon",
    Catfish = "catfish",
}

export interface FishValue {
    displayId: FishId;
    availableInShop: boolean;
    price: number;
}

export const fish: Record<FishId, FishValue> = {
    [FishId.SockeyeSalmon]: {
        displayId: FishId.SockeyeSalmon,
        availableInShop: true,
        price: 2000,
    },
    [FishId.Catfish]: {
        displayId: FishId.Catfish,
        availableInShop: true,
        price: 2000,
    },
} 