export enum TerrainId {
    SmallGrassPatch = "smallGrassPatch",
    SmallStone = "smallStone",
    OakTree = "oakTree",
    PineTree = "pineTree",
    MapleTree = "mapleTree",
}

export enum TerrainType {
    GrassPatch = "grassPatch",
    Stone = "stone",
    OakTree = "oakTree",
    PineTree = "pineTree",
    MapleTree = "mapleTree",
}

export interface TerrainValue {
    name: string;
    description: string;
    imageUrl: string;
    type: TerrainType;
    sellable: boolean;
    availableInShop: boolean;
    price?: number;
    sellPrice?: number;
    size: {
        x: number;
        y: number;
    };
}

export const terrains: Record<TerrainId, TerrainValue> = {
    [TerrainId.SmallGrassPatch]: {
        name: "Small Grass Patch",
        description: "A small patch of grass that can be used to grow crops.",
        imageUrl: "/terrains/small-grass-patch/small-grass-patch.png",
        type: TerrainType.GrassPatch,
        sellable: false,
        availableInShop: true,
        size: {
            x: 1,
            y: 1
        }
    },
    [TerrainId.SmallStone]: {
        name: "Small Stone",
        description: "A small stone that can be used as decoration or for crafting.",
        imageUrl: "/terrains/small-stone/small-stone.png",
        type: TerrainType.Stone,
        sellable: false,
        availableInShop: true,
        size: {
            x: 1,
            y: 1
        }
    },
    [TerrainId.OakTree]: {
        name: "Oak Tree",
        description: "A majestic oak tree that provides shade and beauty to your farm.",
        imageUrl: "/terrains/oak-tree/oak-tree.png",
        type: TerrainType.OakTree,
        sellable: false,
        availableInShop: true,
        size: {
            x: 2,
            y: 2
        }
    },
    [TerrainId.PineTree]: {
        name: "Pine Tree",
        description: "A tall pine tree that adds a touch of evergreen to your landscape.",
        imageUrl: "/terrains/pine-tree/pine-tree.png",
        type: TerrainType.PineTree,
        sellable: true,
        availableInShop: true,
        size: {
            x: 2,
            y: 2
        }
    },
    [TerrainId.MapleTree]: {
        name: "Maple Tree",
        description: "A beautiful maple tree known for its vibrant autumn colors.",
        imageUrl: "/terrains/maple-tree/maple-tree.png",
        type: TerrainType.MapleTree,
        sellable: true,
        availableInShop: true,
        size: {
            x: 2,
            y: 2
        }
    },
} 