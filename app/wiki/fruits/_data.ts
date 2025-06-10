export enum FruitId {
    Banana = "Banana",
    Apple = "Apple",
    DragonFruit = "Dragon Fruit",
    Jackfruit = "Jackfruit",
    Rambutan = "Rambutan",
    Pomegranate = "Pomegranate",
}

export interface FruitValue {
    id: FruitId;
    infomation: FruitInfomation;
    growthStages: {
        [key: number]: {
            title: string;
            description: string;
            imageUrl: string;
        }
    },
    usage: {
        [key: string]: {
            title: string;
            description: string;
            imageUrl: string;
        }
    },
    obtain: {
        [key: string]: {
            title: string;
            description: string;
            imageUrl: string;
        }
    }
}

export interface FruitInfomation {
    price: number;
    youngGrowthStageDuration: number;
    matureGrowthStageDuration: number;
    fertilizerTime: number;
    unlockLevel?: number;
    basicHarvestExperiences: number;
    qualityHarvestExperiences: number;
    harvestQuantity: number;
    availableInShop: boolean;
    sellable: boolean;
    sellPrice?: number;
    isNFT: boolean;
}


export const fruits: Record<FruitId, FruitValue> = {
    [FruitId.Banana]: {
        id: FruitId.Banana,
        infomation: {
            price: 5000,
            youngGrowthStageDuration: 60 * 60 * 12, // 12 hours
            matureGrowthStageDuration: 60 * 60 * 6, // 6 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            unlockLevel: 10,
            basicHarvestExperiences: 12,
            qualityHarvestExperiences: 24,
            harvestQuantity: 20,
            availableInShop: true,
            sellable: true,
            sellPrice: 2500,
            isNFT: false
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "12 hours",
                imageUrl: "/fruits/banana/1.png",
            },
            2: {
                title: "Stage 2",
                description: "12 hours",
                imageUrl: "/fruits/banana/2.png",
            },
            3: {
                title: "Stage 3",
                description: "6 hours",
                imageUrl: "/fruits/banana/3.png",
            },
            4: {
                title: "Stage 4",
                description: "6 hours",
                imageUrl: "/fruits/banana/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/fruits/banana/5.png",
            },
            6: {
                title: "Regrowth",
                description: "6 hours",
                imageUrl: "/fruits/banana/3.png",
            },
        },
        usage: null,
        obtain: {
            shop: {
                title: "Shop",
                description: "Available for purchase in the shop - In Fruit Tab",
                imageUrl: "/icons/shop.png"
            }
        }
    },
    [FruitId.Apple]: {
        id: FruitId.Apple,
        infomation: {
            price: 5000,
            youngGrowthStageDuration: 60 * 60 * 12, // 12 hours
            matureGrowthStageDuration: 60 * 60 * 6, // 6 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            unlockLevel: 10,
            basicHarvestExperiences: 12,
            qualityHarvestExperiences: 24,
            harvestQuantity: 20,
            availableInShop: true,
            sellable: true,
            sellPrice: 2500,
            isNFT: false
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "12 hours",
                imageUrl: "/fruits/apple/1.png",
            },
            2: {
                title: "Stage 2",
                description: "12 hours",
                imageUrl: "/fruits/apple/2.png",
            },
            3: {
                title: "Stage 3",
                description: "6 hours",
                imageUrl: "/fruits/apple/3.png",
            },
            4: {
                title: "Stage 4",
                description: "6 hours",
                imageUrl: "/fruits/apple/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/fruits/apple/5.png",
            },
            6: {
                title: "Regrowth",
                description: "6 hours",
                imageUrl: "/fruits/apple/3.png",
            },
        },
        usage: null,
        obtain: {
            shop: {
                title: "Shop",
                description: "Available for purchase in the shop - In Fruit Tab",
                imageUrl: "/icons/shop.png"
            }
        }
    },
    [FruitId.DragonFruit]: {
        id: FruitId.DragonFruit,
        infomation: {
            price: 5000,
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/dragon-fruit/1.png",
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/dragon-fruit/2.png",
            },
            3: {
                title: "Stage 3",
                description: "9 hours",
                imageUrl: "/fruits/dragon-fruit/3.png",
            },
            4: {
                title: "Stage 4",
                description: "9 hours",
                imageUrl: "/fruits/dragon-fruit/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/fruits/dragon-fruit/5.png",
            },
            6: {
                title: "Regrowth",
                description: "9 hours",
                imageUrl: "/fruits/dragon-fruit/3.png",
            },
        },
        usage: null,
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        }
    },
    [FruitId.Jackfruit]: {
        id: FruitId.Jackfruit,
        infomation: {
            price: 5000,
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/jackfruit/1.png",
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/jackfruit/2.png",
            },
            3: {
                title: "Stage 3",
                description: "9 hours",
                imageUrl: "/fruits/jackfruit/3.png",
            },
            4: {
                title: "Stage 4",
                description: "9 hours",
                imageUrl: "/fruits/jackfruit/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/fruits/jackfruit/5.png",
            },
            6: {
                title: "Regrowth",
                description: "9 hours",
                imageUrl: "/fruits/jackfruit/3.png",
            },
        },
        usage: null,
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        }
    },
    [FruitId.Rambutan]: {
        id: FruitId.Rambutan,
        infomation: {
            price: 5000,
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/rambutan/1.png",
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/rambutan/2.png",
            },
            3: {
                title: "Stage 3",
                description: "9 hours",
                imageUrl: "/fruits/rambutan/3.png",
            },
            4: {
                title: "Stage 4",
                description: "9 hours",
                imageUrl: "/fruits/rambutan/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/fruits/rambutan/5.png",
            },
            6: {
                title: "Regrowth",
                description: "9 hours",
                imageUrl: "/fruits/rambutan/3.png",
            },
        },
        usage: null,
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        }
    },
    [FruitId.Pomegranate]: {
        id: FruitId.Pomegranate,
        infomation: {
            price: 5000,
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/pomegranate/1.png",
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/pomegranate/2.png",
            },
            3: {
                title: "Stage 3",
                description: "9 hours",
                imageUrl: "/fruits/pomegranate/3.png",
            },
            4: {
                title: "Stage 4",
                description: "9 hours",
                imageUrl: "/fruits/pomegranate/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/fruits/pomegranate/5.png",
            },
            6: {
                title: "Regrowth",
                description: "9 hours",
                imageUrl: "/fruits/pomegranate/3.png",
            },
        },
        usage: null,
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        }
    }
} 