export enum FlowerId {
    Daisy = "daisy",
    Sunflower = "sunflower",
}

export interface FlowerValue {
    id: FlowerId;
    infomation: FlowerInfomation;
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
            price?: number;
            priceIcon?: string;
            icon?: string;
        }
    },
    growthStages: {
        [key: number]: {
            title: string;
            description: string;
            imageUrl: string;
            className?: string;
            containerClassName?: string;
        }
    }
}

export interface FlowerInfomation {
    price: number;
    growthStageDuration: number;
    unlockLevel: number;
    basicHarvestExperiences: number;
    qualityHarvestExperiences: number;
    harvestQuantity: number;
    availableInShop: boolean;
    honeyYieldCoefficient: number;
    honeyQualityChancePlus: number;
    imageUrl: string;
    description: string;
}

export const flowers: Record<FlowerId, FlowerValue> = {
    [FlowerId.Daisy]: {
        id: FlowerId.Daisy,
        infomation: {
            description: "A cheerful and common flower that provides a steady source of honey production. Perfect for beginners with its quick growth cycle and reliable harvests.",
            price: 50,
            growthStageDuration: 300,
            unlockLevel: 1,
            basicHarvestExperiences: 6,
            qualityHarvestExperiences: 12,
            harvestQuantity: 20,
            availableInShop: true,
            honeyYieldCoefficient: 2.5,
            honeyQualityChancePlus: 0,
            imageUrl: "/products/daisy.png"
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "12 hours",
                imageUrl: "/flowers/daisy/1.png",
                className: "scale-50"
            },
            2: {
                title: "Stage 2",
                description: "12 hours",
                imageUrl: "/flowers/daisy/2.png",
            },
            3: {
                title: "Stage 3",
                description: "12 hours",
                imageUrl: "/flowers/daisy/3.png",
            },
            4: {
                title: "Stage 4",
                description: "12 hours",
                imageUrl: "/flowers/daisy/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest",
                imageUrl: "/flowers/daisy/5.png",
            },
        },
        obtain: {
            1: {
                title: "Shop available",
                description: "You can buy this flower in the shop - In shop tab",
                price: 100,
                priceIcon: "/icons/gold.png",
                icon: "/icons/shop.png",
            }
        },
        usage: {
            1: {
                title: "Harvest",
                description: "You can harvest this flower to sell",
                imageUrl: "/icons/sell.png"
            },
            2: {
                title: "Increase honey yield",
                description: "You can plant this flower around the beehive to increase the honey yield",
                imageUrl: "/products/honey.png"
            },
        }
    },
    [FlowerId.Sunflower]: {
        id: FlowerId.Sunflower,
        infomation: {
            description: "A tall, majestic flower that significantly boosts honey production. With its high honey yield coefficient and quality chance bonus, its a valuable addition to any beekeeper garden.",
            price: 100,
            growthStageDuration: 4320,
            unlockLevel: 10,
            basicHarvestExperiences: 12,
            qualityHarvestExperiences: 24,
            harvestQuantity: 20,
            availableInShop: true,
            honeyYieldCoefficient: 5,
            honeyQualityChancePlus: 10,
            imageUrl: "/products/sunflower.png"
        },
        growthStages: {
            1: {
                title: "Stage 1",
                description: "12 hours",
                imageUrl: "/flowers/sunflower/1.png",
                className: "scale-50"
            },
            2: {
                title: "Stage 2",
                description: "12 hours",
                imageUrl: "/flowers/sunflower/2.png",
            },
            3: {
                title: "Stage 3",
                description: "12 hours",
                imageUrl: "/flowers/sunflower/3.png",
            },
            4: {
                title: "Stage 4",
                description: "12 hours",
                imageUrl: "/flowers/sunflower/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest",
                imageUrl: "/flowers/sunflower/5.png",
            },
        },
        obtain: {
            1: {
                title: "Shop available",
                description: "You can buy this flower in the shop - In shop tab",
                price: 100,
                priceIcon: "/icons/gold.png",
                icon: "/icons/shop.png",
            }
        },
        usage: {
            1: {
                title: "Harvest",
                description: "You can harvest this flower to sell",
                imageUrl: "/icons/sell.png"
            },
            2: {
                title: "Increase honey yield",
                description: "You can plant this flower around the beehive to increase the honey yield",
                imageUrl: "/products/honey.png"
            },
        }
    },
}