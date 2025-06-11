export enum PetId {
    Dog = "dog",
    Cat = "cat",
}

export enum PetType {
    Dog = "dog",
    Cat = "cat",
}

export interface PetValue {
    information: {
        displayId: string;
        imageUrl: string;
        description: string;
        availableInShop: boolean;
        price: number;
        unlockLevel: number;
        sellPrice: number;
        type: PetType;
        helpSuccessExperience: number;
        sellable: boolean;
        size: {
            x: number;
            y: number;
        }
    }
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

export const pets: Record<PetId, PetValue> = {
    [PetId.Dog]: {
        information: {
            displayId: "Dog",
            imageUrl: "/pets/dog/shop.png",
            description: "A loyal and friendly dog that can help you defend your farm.",
            availableInShop: true,
            price: 4000,
            unlockLevel: 20,
            sellPrice: 2000,
            type: PetType.Dog,
            helpSuccessExperience: 24,
            sellable: true,
            size: {
                x: 1,
                y: 1
            }
        },
        usage: {
            help: {
                title: "Help",
                description: "Help you defend your farm.",
                imageUrl: "/icons/defense.png",
            }
        },
        obtain: {
            buy: {
                title: "Store",
                description: "Location: Left sidebar of ingame shop - Pets Tab",
                imageUrl: "/icons/shop.png",
            }
        }
    },
    [PetId.Cat]: {
        information: {
            displayId: "Cat",
            imageUrl: "/pets/cat/shop.png",
            description: "A friendly and playful cat that can help you attack other farms.",
            availableInShop: true,
            price: 4000,
            unlockLevel: 20,
            sellPrice: 2000,
            type: PetType.Cat,
            helpSuccessExperience: 24,
            sellable: true,
            size: {
                x: 1,
                y: 1
            }
        },
        usage: {
            help: {
                title: "Help",
                description: "Help you attack other farms.",
                imageUrl: "/icons/cat.png",
            }
        },
        obtain: {
            buy: {
                title: "Store",
                description: "Location: Left sidebar of ingame shop - Pets Tab",
                imageUrl: "/icons/shop.png",
            }
        }
    },
} 