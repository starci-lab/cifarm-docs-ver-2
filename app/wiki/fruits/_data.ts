import { envConfig } from "@/config/envConfig";

export enum FruitId {
    Banana = "Banana",
    Apple = "Apple",
    DragonFruit = "Dragon Fruit",
    Jackfruit = "Jackfruit",
    Rambutan = "Rambutan",
    Pomegranate = "Pomegranate",
}

export enum NFTRarity {
    Common = "Common",
    Rare = "Rare",
    Epic = "Epic"
}

export enum AttributeName {
    GrowthAcceleration = "GrowthAcceleration",
    QualityYield = "QualityYield",
    DiseaseResistance = "DiseaseResistance",
    HarvestYieldBonus = "HarvestYieldBonus"
}

export const CONST_COMPUTE = 1000

export interface FruitValue {
    id: FruitId;
    infomation: FruitInfomation;
    growthStages: {
        [key: number]: {
            title: string;
            description: string;
            imageUrl: string;
            className?: string;
            containerClassName?: string;
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
    },
    rarities?: {
        [key in NFTRarity]: {
            [key in AttributeName]: number;
        }
    }
}

export interface FruitInfomation {
    price?: number;
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
    imageUrl?: string;
    description: string;
}


export const fruits: Record<FruitId, FruitValue> = {
    [FruitId.Banana]: {
        id: FruitId.Banana,
        infomation: {
            imageUrl: envConfig().assetBaseUrl + "/products/banana.png",
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
            isNFT: false,
            description: "A fast-growing fruit that's perfect for beginners. Bananas grow in clusters and provide a steady source of income. They're known for their quick growth cycle and reliable harvests."
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
                description: "12 hours",
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
            imageUrl: envConfig().assetBaseUrl + "/products/apple.png",
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
            isNFT: false,
            description: "A classic fruit tree that produces crisp, juicy apples. These trees are known for their consistent yields and moderate growth time. Perfect for players looking to establish a stable farming routine."
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "12 hours",
                imageUrl: "/fruits/apple/1.png",
                className: "scale-50 items-center",
                containerClassName: "items-center mt-4"
            },
            2: {
                title: "Stage 2",
                description: "12 hours",
                imageUrl: "/fruits/apple/2.png",
                className: "scale-70 items-center",
                containerClassName: "items-center mt-4"
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
                description: "12 hours",
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
            imageUrl: envConfig().assetBaseUrl + "/products/dragon-fruit.png",
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true,
            unlockLevel: 1,
            description: "An exotic NFT fruit with vibrant pink skin and white flesh. Dragon fruits are rare and valuable, offering higher experience gains. Their unique appearance makes them a prized addition to any farm."
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/dragon-fruit/1.png",
                className: "scale-30 items-center",
                containerClassName: "items-center mt-6"
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/dragon-fruit/2.png",
                className: "scale-70 items-center",
                containerClassName: "mt-4"
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
                description: "18 hours",
                imageUrl: "/fruits/dragon-fruit/3.png",
            },
        },
        usage: {
            1: {
                title: "Ship into vault",
                description: "You can ship your fruit into vault to receive a reward USDC.",
                imageUrl: "/screenshots/fruits/ship.jpg"
            },
        },
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        },
        rarities: {
            [NFTRarity.Common]: {
                [AttributeName.GrowthAcceleration]: 100,
                [AttributeName.QualityYield]: 100,
                [AttributeName.DiseaseResistance]: 100,
                [AttributeName.HarvestYieldBonus]: 100
            },
            [NFTRarity.Rare]: {
                [AttributeName.GrowthAcceleration]: 200,
                [AttributeName.QualityYield]: 200,
                [AttributeName.DiseaseResistance]: 200,
                [AttributeName.HarvestYieldBonus]: 200
            },
            [NFTRarity.Epic]: {
                [AttributeName.GrowthAcceleration]: 300,
                [AttributeName.QualityYield]: 300,
                [AttributeName.DiseaseResistance]: 300,
                [AttributeName.HarvestYieldBonus]: 300
            }
        }
    },
    [FruitId.Jackfruit]: {
        id: FruitId.Jackfruit,
        infomation: {
            imageUrl: envConfig().assetBaseUrl + "/products/jackfruit.png",
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true,
            unlockLevel: 1,
            description: "The world's largest tree-borne fruit, jackfruits are impressive NFT specimens. Their massive size and unique texture make them a standout addition to any collection. They offer substantial experience gains for dedicated farmers."
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/jackfruit/1.png",
                className: "scale-40 items-center",
                containerClassName: "items-center mt-4"
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/jackfruit/2.png",
                className: "scale-70 items-center",
                containerClassName: "items-center mt-4"
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
                description: "18 hours",
                imageUrl: "/fruits/jackfruit/3.png",
            },
        },
        usage: {
            1: {
                title: "Ship into vault",
                description: "You can ship your fruit into vault to receive a reward USDC.",
                imageUrl: "/screenshots/fruits/ship.jpg"
            },
            
        },
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        },
        rarities: {
            [NFTRarity.Common]: {
                [AttributeName.GrowthAcceleration]: 100,
                [AttributeName.QualityYield]: 100,
                [AttributeName.DiseaseResistance]: 100,
                [AttributeName.HarvestYieldBonus]: 100
            },
            [NFTRarity.Rare]: {
                [AttributeName.GrowthAcceleration]: 200,
                [AttributeName.QualityYield]: 200,
                [AttributeName.DiseaseResistance]: 200,
                [AttributeName.HarvestYieldBonus]: 200
            },
            [NFTRarity.Epic]: {
                [AttributeName.GrowthAcceleration]: 300,
                [AttributeName.QualityYield]: 300,
                [AttributeName.DiseaseResistance]: 300,
                [AttributeName.HarvestYieldBonus]: 300
            }
        }
    },
    [FruitId.Rambutan]: {
        id: FruitId.Rambutan,
        infomation: {
            imageUrl: envConfig().assetBaseUrl + "/products/rambutan.png",
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true,
            unlockLevel: 1,
            description: "A tropical NFT fruit with a distinctive hairy appearance. Rambutans are prized for their sweet, juicy flesh and unique look. They're perfect for collectors looking to add exotic variety to their farm."
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/rambutan/1.png",
                className: "scale-30 items-center",
                containerClassName: "items-center mt-4"
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/rambutan/2.png",
                className: "scale-80 items-center",
                containerClassName: "items-center mt-4"
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
                description: "18 hours",
                imageUrl: "/fruits/rambutan/3.png",
            },
        },
        usage: {
            1: {
                title: "Ship into vault",
                description: "You can ship your fruit into vault to receive a reward USDC.",
                imageUrl: "/screenshots/fruits/ship.jpg"
            },
            
        },
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        },
        rarities: {
            [NFTRarity.Common]: {
                [AttributeName.GrowthAcceleration]: 100,
                [AttributeName.QualityYield]: 100,
                [AttributeName.DiseaseResistance]: 100,
                [AttributeName.HarvestYieldBonus]: 100
            },
            [NFTRarity.Rare]: {
                [AttributeName.GrowthAcceleration]: 200,
                [AttributeName.QualityYield]: 200,
                [AttributeName.DiseaseResistance]: 200,
                [AttributeName.HarvestYieldBonus]: 200
            },
            [NFTRarity.Epic]: {
                [AttributeName.GrowthAcceleration]: 300,
                [AttributeName.QualityYield]: 300,
                [AttributeName.DiseaseResistance]: 300,
                [AttributeName.HarvestYieldBonus]: 300
            }
        }
    },
    [FruitId.Pomegranate]: {
        id: FruitId.Pomegranate,
        infomation: {
            imageUrl: envConfig().assetBaseUrl + "/products/pomegranate.png",
            youngGrowthStageDuration: 60 * 60 * 18, // 18 hours
            matureGrowthStageDuration: 60 * 60 * 9, // 9 hours
            fertilizerTime: 60 * 60 * 8, // 8 hour
            basicHarvestExperiences: 24,
            qualityHarvestExperiences: 48,
            harvestQuantity: 20,
            availableInShop: false,
            sellable: false,
            isNFT: true,
            unlockLevel: 1,
            description: "An ancient NFT fruit known for its ruby-red seeds. Pomegranates are symbols of abundance and prosperity. Their unique structure and rich history make them a valuable addition to any NFT collection."
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "18 hours",
                imageUrl: "/fruits/pomegranate/1.png",
                className: "scale-40 items-center",
                containerClassName: "items-center mt-4"
            },
            2: {
                title: "Stage 2",
                description: "18 hours",
                imageUrl: "/fruits/pomegranate/2.png",
                className: "scale-80 items-center",
                containerClassName: "items-center mt-4"
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
                description: "18 hours",
                imageUrl: "/fruits/pomegranate/3.png",
            },
        },
        usage: {
            1: {
                title: "Ship into vault",
                description: "You can ship your fruit into vault to receive a reward USDC.",
                imageUrl: "/screenshots/fruits/ship.jpg"
            },
            
        },
        obtain: {
            nft: {
                title: "NFT",
                description: "Obtainable through NFT marketplace",
                imageUrl: "/icons/nft-marketplace.png"
            }
        },
        rarities: {
            [NFTRarity.Common]: {
                [AttributeName.GrowthAcceleration]: 100,
                [AttributeName.QualityYield]: 100,
                [AttributeName.DiseaseResistance]: 100,
                [AttributeName.HarvestYieldBonus]: 100
            },
            [NFTRarity.Rare]: {
                [AttributeName.GrowthAcceleration]: 200,
                [AttributeName.QualityYield]: 200,
                [AttributeName.DiseaseResistance]: 200,
                [AttributeName.HarvestYieldBonus]: 200
            },
            [NFTRarity.Epic]: {
                [AttributeName.GrowthAcceleration]: 300,
                [AttributeName.QualityYield]: 300,
                [AttributeName.DiseaseResistance]: 300,
                [AttributeName.HarvestYieldBonus]: 300
            }
        }
    }
} 