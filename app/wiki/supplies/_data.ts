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

export const supplies: Record<SupplyId, SupplyValue> = {
    [SupplyId.BasicFertilizer]: {
        name: "Basic Fertilizer",
        description: "A basic fertilizer that helps crops grow faster.",
        imageUrl: "/supplies/basic-fertilizer.png",
        type: SupplyType.Fertilizer,
        price: 50,
        availableInShop: true,
        fertilizerEffectTimeReduce: 60 * 30,
        usage: {
            fertilize: {
                title: "Fertilize",
                description: "Fertilize your crops to grow faster",
                imageUrl: "/screenshots/supplies/fertilizer.jpg",
            }
        },
        obtain: {
            buy: {
                title: "Store",
                description: "Location: Left sidebar of ingame shop - Supplies Tab",
                imageUrl: "/screenshots/supplies/basic-fertilizer.png",
            }
        }
    },
    [SupplyId.AnimalFeed]: {
        name: "Animal Feed",
        description: "Feed for your farm animals to keep them productive.",
        imageUrl: "/supplies/animal-feed.png",
        type: SupplyType.AnimalFeed,
        price: 50,
        availableInShop: true,
        usage: {
            feed: {
                title: "Feed",
                description: "Feed your animals to keep them productive",
                imageUrl: "/screenshots/supplies/feed.jpg",
            }
        },
        obtain: {
            buy: {
                title: "Store",
                description: "Location: Left sidebar of ingame shop - Supplies Tab",
                imageUrl: "/screenshots/supplies/animal-feed.png",
            }
        }
    },
    [SupplyId.FruitFertilizer]: {
        name: "Fruit Fertilizer",
        description: "Special fertilizer that enhances fruit production.",
        imageUrl: "/supplies/fruit-fertilizer.png",
        type: SupplyType.FruitFertilizer,
        price: 50,
        availableInShop: true,
        usage: {
            fertilize: {
                title: "Fertilize",
                description: "Fertilize your fruit trees",
                imageUrl: "/screenshots/supplies/fruit.jpg",
            }
        },
        obtain: {
            buy: {
                title: "Store",
                description: "Location: Left sidebar of ingame shop - Supplies Tab",
                imageUrl: "/screenshots/supplies/fruit-fertilizer.png",
            }
        }
    },
} 