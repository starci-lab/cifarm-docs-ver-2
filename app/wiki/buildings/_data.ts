export enum BuildingId {
    Home = "home",
    Coop = "coop",
    Barn = "barn",
    BeeHouse = "beeHouse",
    PetHouse = "petHouse",
    FishPond = "fishPond",
}

export enum BuildingKind {
    Neutral = "neutral",
    AnimalHouse = "animalHouse",
    BeeHouse = "beeHouse",
    PetHouse = "petHouse",
    FishPond = "fishPond",
}

export enum AnimalType {
    Poultry = "poultry",
    Livestock = "livestock",
}

export interface BuildingUpgrade {
    upgradeLevel: number;
    upgradePrice?: number;
    capacity: number;
    honeyMultiplier?: number;
}

export interface BuildingValue {
    name: string;
    description: string;
    imageUrl: string;
    kind: BuildingKind;
    price: number;
    sellPrice?: number;
    availableInShop: boolean;
    upgradeable: boolean;
    maxUpgrade: number;
    unlockLevel: number;
    maxOwnership: number;
    sellable?: boolean;
    animalContainedType?: AnimalType;
    beeHouseYieldTime?: number;
    beeHouseBasicHarvestExperiences?: number;
    beeHouseQualityHarvestExperiences?: number;
    baseHoneyYieldCoefficient?: number;
    upgrades?: BuildingUpgrade[];
    size: string;
}

export const buildings: Record<BuildingId, BuildingValue> = {
    [BuildingId.Home]: {
        name: "Home",
        description: "Your main residence on the farm.",
        imageUrl: "/buildings/home/home.png",
        kind: BuildingKind.Neutral,
        price: 0,
        availableInShop: false,
        upgradeable: false,
        maxUpgrade: 0,
        unlockLevel: 0,
        maxOwnership: 1,
    },
    [BuildingId.Coop]: {
        name: "Coop",
        description: "A building for raising poultry like chickens.",
        imageUrl: "/buildings/coop/coop.png",
        kind: BuildingKind.AnimalHouse,
        price: 2000,
        sellPrice: 1000,
        availableInShop: true,
        upgradeable: true,
        maxUpgrade: 3,
        unlockLevel: 5,
        maxOwnership: 3,
        sellable: true,
        animalContainedType: AnimalType.Poultry,
        upgrades: [
            {
                capacity: 2,
                upgradeLevel: 1,
            },
            {
                upgradePrice: 2000,
                capacity: 4,
                upgradeLevel: 2,
            },
            {
                upgradePrice: 4000,
                capacity: 6,
                upgradeLevel: 3,
            }
        ]
    },
    [BuildingId.Barn]: {
        name: "Barn",
        description: "A building for raising livestock like cows.",
        imageUrl: "/buildings/barn/barn.png",
        kind: BuildingKind.AnimalHouse,
        price: 4000,
        sellPrice: 2000,
        availableInShop: true,
        upgradeable: true,
        maxUpgrade: 3,
        unlockLevel: 10,
        maxOwnership: 3,
        sellable: true,
        animalContainedType: AnimalType.Livestock,
        upgrades: [
            {
                capacity: 2,
                upgradeLevel: 1,
            },
            {
                upgradePrice: 4000,
                capacity: 4,
                upgradeLevel: 2,
            },
            {
                upgradePrice: 8000,
                capacity: 6,
                upgradeLevel: 3,
            }
        ]
    },
    [BuildingId.BeeHouse]: {
        name: "Bee House",
        description: "A building for producing honey.",
        imageUrl: "/buildings/bee-house/bee-house.png",
        kind: BuildingKind.BeeHouse,
        price: 2000,
        sellPrice: 1000,
        availableInShop: true,
        upgradeable: true,
        maxUpgrade: 3,
        unlockLevel: 10,
        maxOwnership: 3,
        sellable: true,
        beeHouseYieldTime: 3600,
        beeHouseBasicHarvestExperiences: 10,
        beeHouseQualityHarvestExperiences: 15,
        baseHoneyYieldCoefficient: 10,
        upgrades: [
            {
                capacity: 3,
                upgradeLevel: 1,
                honeyMultiplier: 1,
            },
            {
                upgradePrice: 1000,
                capacity: 3,
                upgradeLevel: 2,
                honeyMultiplier: 1.25
            },
            {
                upgradePrice: 2000,
                capacity: 10,
                upgradeLevel: 3,
                honeyMultiplier: 1.5
            }
        ]
    },
    [BuildingId.PetHouse]: {
        name: "Pet House",
        description: "A house for your pets.",
        imageUrl: "/buildings/pet-house/pet-house.png",
        kind: BuildingKind.PetHouse,
        price: 2000,
        availableInShop: true,
        upgradeable: true,
        maxUpgrade: 3,
        unlockLevel: 10,
        maxOwnership: 1,
        upgrades: [
            {
                capacity: 3,
                upgradeLevel: 1,
            },
            {
                upgradePrice: 1000,
                capacity: 5,
                upgradeLevel: 2,
            },
            {
                upgradePrice: 2000,
                capacity: 10,
                upgradeLevel: 3,
            }
        ]
    },
    [BuildingId.FishPond]: {
        name: "Fish Pond",
        description: "A pond for raising fish.",
        imageUrl: "/buildings/fish-pond/fish-pond.png",
        kind: BuildingKind.FishPond,
        price: 2000,
        sellPrice: 1000,
        availableInShop: true,
        upgradeable: true,
        maxUpgrade: 3,
        unlockLevel: 10,
        maxOwnership: 3,
        sellable: true,
        upgrades: [
            {
                capacity: 3,
                upgradeLevel: 1,
            },
            {
                upgradePrice: 1000,
                capacity: 5,
                upgradeLevel: 2,
            },
            {
                upgradePrice: 2000,
                capacity: 10,
                upgradeLevel: 3,
            }
        ]
    }
} 