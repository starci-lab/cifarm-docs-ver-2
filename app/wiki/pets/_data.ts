export enum PetId {
    Dog = "dog",
    Cat = "cat",
}

export enum PetType {
    Dog = "dog",
    Cat = "cat",
}

export interface PetValue {
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
}

export const pets: Record<PetId, PetValue> = {
    [PetId.Dog]: {
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
    },
    [PetId.Cat]: {
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
    },
} 