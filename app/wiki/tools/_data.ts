export enum ToolId {
    Hand = "hand",
    Crate = "crate",
    WateringCan = "wateringCan",
    Herbicide = "herbicide",
    Pesticide = "pesticide",
    Hammer = "hammer",
    AnimalMedicine = "animalMedicine",
    BugNet = "bugNet",
}

export interface ToolValue {
    name: string;
    description: string;
    imageUrl: string;
    availableInShop: boolean;
    price?: number;
    unlockLevel?: number;
    default?: boolean;
    givenAsDefault?: boolean;
}

export const tools: Record<ToolId, ToolValue> = {
    [ToolId.Hand]: {
        name: "Hand",
        description: "Use your hands to view the information of an item.",
        imageUrl: "/tools/hand.png",
        availableInShop: false,
        default: true,
    },
    [ToolId.Crate]: {
        name: "Crate",
        description: "A crate to store your items.",
        imageUrl: "/tools/crate.png",
        availableInShop: false,
        givenAsDefault: true,
    },
    [ToolId.WateringCan]: {
        name: "Watering Can",
        description: "Use to water your crops.",
        imageUrl: "/tools/watering-can.png",
        availableInShop: false,
        givenAsDefault: true,
    },
    [ToolId.Pesticide]: {
        name: "Pesticide",
        description: "Use to protect your crops from pests.",
        imageUrl: "/tools/pesticide.png",
        availableInShop: false,
        givenAsDefault: true,
    },
    [ToolId.Herbicide]: {
        name: "Herbicide",
        description: "Use to remove weeds from your farm.",
        imageUrl: "/tools/herbicide.png",
        availableInShop: false,
        givenAsDefault: true,
    },
    [ToolId.Hammer]: {
        name: "Hammer",
        description: "Use to break rocks and other obstacles.",
        imageUrl: "/tools/hammer.png",
        availableInShop: true,
        price: 200,
    },
    [ToolId.AnimalMedicine]: {
        name: "Animal Medicine",
        description: "Use to heal sick animals.",
        imageUrl: "/tools/animal-medicine.png",
        availableInShop: true,
        price: 200,
        unlockLevel: 5,
    },
    [ToolId.BugNet]: {
        name: "Bug Net",
        description: "Use to catch bugs and insects.",
        imageUrl: "/tools/bug-net.png",
        availableInShop: true,
        price: 200,
        unlockLevel: 10,
    },
}
