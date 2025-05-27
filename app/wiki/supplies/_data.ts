export enum SupplyId {
    BasicFertilizer = "basicFertilizer",
    AnimalFeed = "animalFeed",
    FruitFertilizer = "fruitFertilizer",
}

export enum SupplyType {
    Fertilizer = "fertilizer",
    AnimalFeed = "animalFeed",
    FruitFertilizer = "fruitFertilizer",
}

export interface SupplyValue {
    name: string;
    description: string;
    imageUrl: string;
    type: SupplyType;
    price: number;
    availableInShop: boolean;
    fertilizerEffectTimeReduce?: number;
}

export const supplies: Record<SupplyId, SupplyValue> = {
    [SupplyId.BasicFertilizer]: {
        name: "Basic Fertilizer",
        description: "A basic fertilizer that helps crops grow faster.",
        imageUrl: "/supplies/basic-fertilizer.png",
        type: SupplyType.Fertilizer,
        price: 50,
        availableInShop: true,
        fertilizerEffectTimeReduce: 60 * 30,
    },
    [SupplyId.AnimalFeed]: {
        name: "Animal Feed",
        description: "Feed for your farm animals to keep them healthy and productive.",
        imageUrl: "/supplies/animal-feed.png",
        type: SupplyType.AnimalFeed,
        price: 50,
        availableInShop: true,
    },
    [SupplyId.FruitFertilizer]: {
        name: "Fruit Fertilizer",
        description: "Special fertilizer that enhances fruit production.",
        imageUrl: "/supplies/fruit-fertilizer.png",
        type: SupplyType.FruitFertilizer,
        price: 50,
        availableInShop: true,
    },
} 