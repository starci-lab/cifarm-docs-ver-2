export enum FruitId {
    Banana = "banana",
    Apple = "apple",
    DragonFruit = "dragonFruit",
    Jackfruit = "jackfruit",
    Rambutan = "rambutan",
    Pomegranate = "pomegranate",
}

export interface FruitValue {
    _id: string;
    displayId: FruitId;
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
    isNFT?: boolean;
}

export const fruits: Record<FruitId, FruitValue> = {
    [FruitId.Banana]: {
        _id: FruitId.Banana,
        displayId: FruitId.Banana,
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
        sellPrice: 2500
    },
    [FruitId.Apple]: {
        _id: FruitId.Apple,
        displayId: FruitId.Apple,
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
        sellPrice: 2500
    },
    [FruitId.DragonFruit]: {
        _id: FruitId.DragonFruit,
        displayId: FruitId.DragonFruit,
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
    [FruitId.Jackfruit]: {
        _id: FruitId.Jackfruit,
        displayId: FruitId.Jackfruit,
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
    [FruitId.Rambutan]: {
        _id: FruitId.Rambutan,
        displayId: FruitId.Rambutan,
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
    [FruitId.Pomegranate]: {
        _id: FruitId.Pomegranate,
        displayId: FruitId.Pomegranate,
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
    }
} 