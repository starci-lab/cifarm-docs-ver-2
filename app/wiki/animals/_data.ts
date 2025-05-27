export enum AnimalId {
    Chicken = "chicken",
    Cow = "cow",
}

export enum AnimalType {
    Poultry = "poultry",
    Livestock = "livestock",
}

export interface AnimalValue {
    name: string;
    description: string;
    imageUrl: string;
    type: AnimalType;
    price: number;
    sellPrice: number;
    isNFT: boolean;
    availableInShop: boolean;
    unlockLevel: number;
    sellable: boolean;
    yieldTime: number;
    offspringPrice: number;
    growthTime: number;
    hungerTime: number;
    harvestQuantity: number;
    basicHarvestExperiences: number;
    qualityHarvestExperiences: number;
}

export const animals: Record<AnimalId, AnimalValue> = {
    [AnimalId.Chicken]: {
        name: "Chicken",
        description: "A common farm bird that lays eggs.",
        imageUrl: "/animals/chicken/chicken.png",
        type: AnimalType.Poultry,
        price: 1000,
        sellPrice: 500,
        isNFT: false,
        availableInShop: true,
        unlockLevel: 5,
        sellable: true,
        yieldTime: 60 * 60 * 24,
        offspringPrice: 1000,
        growthTime: 60 * 60 * 24 * 3,
        hungerTime: 60 * 60 * 12,
        harvestQuantity: 20,
        basicHarvestExperiences: 32,
        qualityHarvestExperiences: 64,
    },
    [AnimalId.Cow]: {
        name: "Cow",
        description: "A large farm animal that produces milk.",
        imageUrl: "/animals/cow/cow.png",
        type: AnimalType.Livestock,
        price: 2500,
        sellPrice: 1250,
        isNFT: false,
        availableInShop: true,
        unlockLevel: 10,
        sellable: true,
        yieldTime: 60 * 60 * 24 * 2,
        offspringPrice: 2500,
        growthTime: 60 * 60 * 24 * 7,
        hungerTime: 60 * 60 * 12,
        harvestQuantity: 20,
        basicHarvestExperiences: 54,
        qualityHarvestExperiences: 108,
    },
} 