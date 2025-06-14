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
    information: ToolInformation;
    usage: {
        [key: string]: {
            title: string;
            description: string;
            imageUrl: string;
        }
    }
}

export interface ToolInformation {
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
        information: {
            name: "Hand",
            description: "Your trusty hands - the most basic tool for interacting with your farm. Use them to view information about items and perform basic actions.",
            imageUrl: "/tools/hand.png",
            availableInShop: false,
            default: true,
        },
        usage: {
            inspect: {
                title: "Inspect",
                description: "View detailed information about any item or object",
                imageUrl: "/screenshots/tools/hand.jpg",
            }
        }
    },
    [ToolId.Crate]: {
        information: {
            name: "Crate",
            description: "A sturdy wooden crate for storing your farm's produce and tools. Essential for organizing your inventory.",
            imageUrl: "/tools/crate.png",
            availableInShop: false,
            givenAsDefault: true,
        },
        usage: {
            harvestCrop: {
                title: "Harvest",
                description: "Harvest from your farm",
                imageUrl: "/screenshots/tools/crate.jpg",
            },
        }
    },
    [ToolId.WateringCan]: {
        information: {
            name: "Watering Can",
            description: "A reliable watering can for keeping your crops hydrated. Essential for crop growth and health.",
            imageUrl: "/tools/watering-can.png",
            availableInShop: false,
            givenAsDefault: true,
        },
        usage: {
            water: {
                title: "Water Crops",
                description: "Water your crops to help them grow",
                imageUrl: "/screenshots/tools/wateringCan.png",
            }
        }
    },
    [ToolId.Pesticide]: {
        information: {
            name: "Pesticide",
            description: "Protect your crops from harmful pests with this effective pesticide spray.",
            imageUrl: "/tools/pesticide.png",
            availableInShop: false,
            givenAsDefault: true,
        },
        usage: {
            spray: {
                title: "Spray Pesticide",
                description: "Apply pesticide to protect crops from pests",
                imageUrl: "/screenshots/tools/pests.png",
            }
        }
    },
    [ToolId.Herbicide]: {
        information: {
            name: "Herbicide",
            description: "Keep your farm weed-free with this powerful herbicide solution.",
            imageUrl: "/tools/herbicide.png",
            availableInShop: false,
            givenAsDefault: true,
        },
        usage: {
            spray: {
                title: "Spray Herbicide",
                description: "Apply herbicide to remove weeds",
                imageUrl: "/screenshots/tools/weed.png",
            }
        }
    },
    [ToolId.Hammer]: {
        information: {
            name: "Hammer",
            description: "A sturdy hammer for breaking rocks and clearing obstacles from your farm.",
            imageUrl: "/tools/hammer.png",
            availableInShop: true,
            price: 200,
        },
        usage: {
            upgrade: {
                title: "Upgrade",
                description: "Upgrade your tools to improve their efficiency",
                imageUrl: "/screenshots/tools/hammer.jpg",
            }
        }
    },
    [ToolId.AnimalMedicine]: {
        information: {
            name: "Animal Medicine",
            description: "Essential medicine for treating sick animals on your farm. Keep your livestock healthy and productive.",
            imageUrl: "/tools/animal-medicine.png",
            availableInShop: true,
            price: 200,
            unlockLevel: 5,
        },
        usage: {
            treat: {
                title: "Treat Animals",
                description: "Cure animals of sickness",
                imageUrl: "/screenshots/tools/animalMedicine.jpg",
            },
        }
    },
    [ToolId.BugNet]: {
        information: {
            name: "Bug Net",
            description: "Catch bugs and insects with this specialized net. Perfect for collecting rare specimens and protecting your crops.",
            imageUrl: "/tools/bug-net.png",
            availableInShop: true,
            price: 200,
            unlockLevel: 10,
        },
        usage: {
            catch: {
                title: "Catch Bugs",
                description: "Swing the net to catch insects",
                imageUrl: "/screenshots/tools/bugnet.jpg",
            }
        }
    },
}
