export enum TileId {
    BasicTile = "basicTile",
}


export interface TileValue {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    sellPrice: number;
    isNFT: boolean;
    sellable: boolean;
    availableInShop: boolean;
    qualityProductChanceStack: number;
    qualityProductChanceLimit: number;
}

export const tiles: Record<TileId, TileValue> = {
    [TileId.BasicTile]: {
        name: "Basic Tile",
        description: "A basic tile that can be used to build your farm.",
        imageUrl: "/tiles/basic-tile/basic-tile.png",
        price: 1000,
        sellPrice: 500,
        isNFT: false,
        sellable: true,
        availableInShop: true,
        qualityProductChanceStack: 0,
        qualityProductChanceLimit: 0,
    },
} 