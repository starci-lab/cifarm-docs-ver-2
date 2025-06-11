export enum TileId {
    BasicTile = "basicTile",
}


export interface TileValue {
    name: string;
    description: string;
    imageUrl: string;
    buyPrice: number;
    sellPrice: number;
    sellable: boolean;
    availableInShop: boolean;
    size: {
        x: number;
        y: number;
    };
}

export const tiles: Record<TileId, TileValue> = {
    [TileId.BasicTile]: {
        name: "Basic Tile",
        description: "A basic tile that can be used to build your farm.",
        imageUrl: "/tiles/basic-tile/basic-tile.png",
        buyPrice: 1000,
        sellPrice: 500,
        sellable: true,
        availableInShop: true,
        size: {
            x: 1,
            y: 1
        }
    },
} 