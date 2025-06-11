export enum CropId {
    Turnip = "turnip",
    Carrot = "carrot",
    Potato = "potato",
    Pineapple = "pineapple",
    Watermelon = "watermelon",
    Cucumber = "cucumber",
    BellPepper = "bellPepper",
    Strawberry = "strawberry",
    Pumpkin = "pumpkin",
    Cauliflower = "cauliflower",
    Tomato = "tomato",
    Eggplant = "eggplant",
    Pea = "pea",
}

export interface CropValue {
    growthStages: {
        [key: number]: {
            title: string;
            description: string;
            imageUrl: string;
        }
    }
    information: CropInformation;
}

export interface CropInformation {
    name: string;
    description: string;
    imageUrl: string;
    type: string
    seed: {
        name: string;
        price: number;
        imageUrl: string;
    },
    basicHarvestExperiences: number;
    qualityHarvestExperiences: number; // 2x basicHarvestExperiences
    growthStageDuration: number; // seconds
    basicSellPrice: number; // sell price
    qualitySellPrice: number; // 2x basicSellPrice
    unlockLevel: number;
    harvestQuantity: number;
    perennialCount: number;
    availableInShop: boolean;
}


export const crops: Record<CropId, CropValue> = {
    [CropId.Turnip]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "4 minutes",
                imageUrl: "/crops/turnip/1.png",
            },
            2: {
                title: "Stage 2",
                description: "4 minutes",
                imageUrl: "/crops/turnip/2.png",
            },
            3: {
                title: "Stage 3",
                description: "4 minutes",
                imageUrl: "/crops/turnip/3.png",
            },
            4: {
                title: "Stage 4",
                description: "4 minutes",
                imageUrl: "/crops/turnip/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/turnip/5.png",
            },
        },
        information: {
            name: "Turnip",
            description: "A turnip is a root vegetable that is a member of the cabbage family.",
            imageUrl: "/products/turnip.png",
            type: "Crops",
            seed: {
                name: "Turnip Seed",
                price: 50,
                imageUrl: "/shop/crops/turnip.png",
            },
            growthStageDuration: 240, //seconds
            unlockLevel: 1,
            basicHarvestExperiences: 4,
            qualityHarvestExperiences: 8,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 4,
            qualitySellPrice: 8,
        },
    },
    [CropId.Carrot]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "10 minutes",
                imageUrl: "/crops/carrot/1.png",
            },
            2: {
                title: "Stage 2",
                description: "10 minutes",
                imageUrl: "/crops/carrot/2.png",
            },
            3: {
                title: "Stage 3",
                description: "10 minutes",
                imageUrl: "/crops/carrot/3.png",
            },
            4: {
                title: "Stage 4",
                description: "10 minutes",
                imageUrl: "/crops/carrot/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/carrot/5.png",
            },
        },
        information: {
            name: "Carrot",
            description: "A carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow varieties exist.",
            imageUrl: "/products/carrot.png",
            type: "Crops",
            seed: {
                name: "Carrot Seed",
                price: 50,
                imageUrl: "/shop/crops/carrot.png",
            },
            growthStageDuration: 600,
            unlockLevel: 2,
            basicHarvestExperiences: 6,
            qualityHarvestExperiences: 12,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 6,
            qualitySellPrice: 12,
        },
    },
    [CropId.Potato]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "15 minutes",
                imageUrl: "/crops/potato/1.png",
            },
            2: {
                title: "Stage 2",
                description: "15 minutes",
                imageUrl: "/crops/potato/2.png",
            },
            3: {
                title: "Stage 3",
                description: "15 minutes",
                imageUrl: "/crops/potato/3.png",
            },
            4: {
                title: "Stage 4",
                description: "15 minutes",
                imageUrl: "/crops/potato/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/potato/5.png",
            },
        },
        information: {
            name: "Potato",
            description: "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas.",
            imageUrl: "/products/potato.png",
            type: "Crops",
            seed: {
                name: "Potato Seed",
                price: 100,
                imageUrl: "/shop/crops/potato.png",
            },
            growthStageDuration: 900,
            unlockLevel: 3,
            basicHarvestExperiences: 11,
            qualityHarvestExperiences: 22,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 11,
            qualitySellPrice: 22,
        },
    },
    [CropId.Pineapple]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "20 minutes",
                imageUrl: "/crops/pineapple/1.png",
            },
            2: {
                title: "Stage 2",
                description: "20 minutes",
                imageUrl: "/crops/pineapple/2.png",
            },
            3: {
                title: "Stage 3",
                description: "20 minutes",
                imageUrl: "/crops/pineapple/3.png",
            },
            4: {
                title: "Stage 4",
                description: "20 minutes",
                imageUrl: "/crops/pineapple/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/pineapple/5.png",
            },
        },
        information: {
            name: "Pineapple",
            description: "The pineapple is a tropical plant with an edible fruit and is the most economically significant plant in the family Bromeliaceae.",
            imageUrl: "/products/pineapple.png",
            type: "Crops",
            seed: {
                name: "Pineapple Seed",
                price: 120,
                imageUrl: "/shop/crops/pineapple.png",
            },
            growthStageDuration: 1200,
            unlockLevel: 4,
            basicHarvestExperiences: 13,
            qualityHarvestExperiences: 26,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 13,
            qualitySellPrice: 26,
        },
    },
    [CropId.Watermelon]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "25 minutes",
                imageUrl: "/crops/watermelon/1.png",
            },
            2: {
                title: "Stage 2",
                description: "25 minutes",
                imageUrl: "/crops/watermelon/2.png",
            },
            3: {
                title: "Stage 3",
                description: "25 minutes",
                imageUrl: "/crops/watermelon/3.png",
            },
            4: {
                title: "Stage 4",
                description: "25 minutes",
                imageUrl: "/crops/watermelon/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/watermelon/5.png",
            },
        },
        information: {
            name: "Watermelon",
            description: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit.",
            imageUrl: "/products/watermelon.png",
            type: "Crops",
            seed: {
                name: "Watermelon Seed",
                price: 120,
                imageUrl: "/shop/crops/watermelon.png",
            },
            growthStageDuration: 1500,
            unlockLevel: 5,
            basicHarvestExperiences: 15,
            qualityHarvestExperiences: 30,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 15,
            qualitySellPrice: 30,
        },
    },
    [CropId.Cucumber]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "33.33 minutes",
                imageUrl: "/crops/cucumber/1.png",
            },
            2: {
                title: "Stage 2",
                description: "33.33 minutes",
                imageUrl: "/crops/cucumber/2.png",
            },
            3: {
                title: "Stage 3",
                description: "33.33 minutes",
                imageUrl: "/crops/cucumber/3.png",
            },
            4: {
                title: "Stage 4",
                description: "33.33 minutes",
                imageUrl: "/crops/cucumber/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/cucumber/5.png",
            },
        },
        information: {
            name: "Cucumber",
            description: "The cucumber is a widely-cultivated creeping vine plant in the Cucurbitaceae family that bears usually cylindrical fruits.",
            imageUrl: "/products/cucumber.png",
            type: "Crops",
            seed: {
                name: "Cucumber Seed",
                price: 120,
                imageUrl: "/shop/crops/cucumber.png",
            },
            growthStageDuration: 2000,
            unlockLevel: 6,
            basicHarvestExperiences: 17,
            qualityHarvestExperiences: 34,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 17,
            qualitySellPrice: 34,
        },
    },
    [CropId.BellPepper]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "20 minutes",
                imageUrl: "/crops/bell-pepper/1.png",
            },
            2: {
                title: "Stage 2",
                description: "20 minutes",
                imageUrl: "/crops/bell-pepper/2.png",
            },
            3: {
                title: "Stage 3",
                description: "20 minutes",
                imageUrl: "/crops/bell-pepper/3.png",
            },
            4: {
                title: "Stage 4",
                description: "20 minutes",
                imageUrl: "/crops/bell-pepper/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/bell-pepper/5.png",
            },
            6: {
                title: "Regrowth",
                description: "40 minutes", //"20 minutes" x2
                imageUrl: "/crops/bell-pepper/3.png",
            },
        },
        information: {
            name: "Bell Pepper",
            description: "The bell pepper is the fruit of plants in the Grossum Group of the species Capsicum annuum.",
            imageUrl: "/products/bell-pepper.png",
            type: "Crops",
            seed: {
                name: "Bell Pepper Seed",
                price: 150,
                imageUrl: "/shop/crops/bell-pepper.png",
            },
            growthStageDuration: 1200,
            unlockLevel: 7,
            basicHarvestExperiences: 12,
            qualityHarvestExperiences: 24,
            harvestQuantity: 10,
            perennialCount: 3,
            availableInShop: true,
            basicSellPrice: 12,
            qualitySellPrice: 24,
        },
    },
    [CropId.Strawberry]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "26.67 minutes",
                imageUrl: "/crops/strawberry/1.png",
            },
            2: {
                title: "Stage 2",
                description: "26.67 minutes",
                imageUrl: "/crops/strawberry/2.png",
            },
            3: {
                title: "Stage 3",
                description: "26.67 minutes",
                imageUrl: "/crops/strawberry/3.png",
            },
            4: {
                title: "Stage 4",
                description: "26.67 minutes",
                imageUrl: "/crops/strawberry/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/strawberry/5.png",
            },
            6: {
                title: "Regrowth",
                description: "53.33 minutes", //"26.67 minutes" x2
                imageUrl: "/crops/strawberry/3.png",
            },
        },
        information: {
            name: "Strawberry",
            description: "The strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries.",
            imageUrl: "/products/strawberry.png",
            type: "Crops",
            seed: {
                name: "Strawberry Seed",
                price: 130,
                imageUrl: "/shop/crops/strawberry.png",
            },
            growthStageDuration: 1600,
            unlockLevel: 8,
            basicHarvestExperiences: 10,
            qualityHarvestExperiences: 20,
            harvestQuantity: 16,
            perennialCount: 2,
            availableInShop: true,
            basicSellPrice: 10,
            qualitySellPrice: 20,
        },
    },
    [CropId.Pumpkin]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "50 minutes",
                imageUrl: "/crops/pumpkin/1.png",
            },
            2: {
                title: "Stage 2",
                description: "50 minutes",
                imageUrl: "/crops/pumpkin/2.png",
            },
            3: {
                title: "Stage 3",
                description: "50 minutes",
                imageUrl: "/crops/pumpkin/3.png",
            },
            4: {
                title: "Stage 4",
                description: "50 minutes",
                imageUrl: "/crops/pumpkin/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/pumpkin/5.png",
            },
        },
        information: {
            name: "Pumpkin",
            description: "A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
            imageUrl: "/products/pumpkin.png",
            type: "Crops",
            seed: {
                name: "Pumpkin Seed",
                price: 150,
                imageUrl: "/shop/crops/pumpkin.png",
            },
            growthStageDuration: 3000,
            unlockLevel: 9,
            basicHarvestExperiences: 20,
            qualityHarvestExperiences: 40,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 20,
            qualitySellPrice: 40,
        },
    },
    [CropId.Cauliflower]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "53.33 minutes",
                imageUrl: "/crops/cauliflower/1.png",
            },
            2: {
                title: "Stage 2",
                description: "53.33 minutes",
                imageUrl: "/crops/cauliflower/2.png",
            },
            3: {
                title: "Stage 3",
                description: "53.33 minutes",
                imageUrl: "/crops/cauliflower/3.png",
            },
            4: {
                title: "Stage 4",
                description: "53.33 minutes",
                imageUrl: "/crops/cauliflower/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/cauliflower/5.png",
            },
        },
        information: {
            name: "Cauliflower",
            description: "Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae family.",
            imageUrl: "/products/cauliflower.png",
            type: "Crops",
            seed: {
                name: "Cauliflower Seed",
                price: 150,
                imageUrl: "/shop/crops/cauliflower.png",
            },
            growthStageDuration: 3200,
            unlockLevel: 10,
            basicHarvestExperiences: 18,
            qualityHarvestExperiences: 36,
            harvestQuantity: 20,
            perennialCount: 1,
            availableInShop: true,
            basicSellPrice: 18,
            qualitySellPrice: 36,
        },
    },
    [CropId.Tomato]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "80 minutes",
                imageUrl: "/crops/tomato/1.png",
            },
            2: {
                title: "Stage 2",
                description: "80 minutes",
                imageUrl: "/crops/tomato/2.png",
            },
            3: {
                title: "Stage 3",
                description: "80 minutes",
                imageUrl: "/crops/tomato/3.png",
            },
            4: {
                title: "Stage 4",
                description: "80 minutes",
                imageUrl: "/crops/tomato/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/tomato/5.png",
            },
        },
        information: {
            name: "Tomato",
            description: "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant.",
            imageUrl: "/products/tomato.png",
            type: "Crops",
            seed: {
                name: "Tomato Seed",
                price: 150,
                imageUrl: "/shop/crops/tomato.png",
            },
            growthStageDuration: 4800,
            unlockLevel: 11,
            basicHarvestExperiences: 14,
            qualityHarvestExperiences: 28,
            harvestQuantity: 16,
            perennialCount: 2,
            availableInShop: true,
            basicSellPrice: 14,
            qualitySellPrice: 28,
        },
    },
    [CropId.Eggplant]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "100 minutes",
                imageUrl: "/crops/eggplant/1.png",
            },
            2: {
                title: "Stage 2",
                description: "100 minutes",
                imageUrl: "/crops/eggplant/2.png",
            },
            3: {
                title: "Stage 3",
                description: "100 minutes",
                imageUrl: "/crops/eggplant/3.png",
            },
            4: {
                title: "Stage 4",
                description: "100 minutes",
                imageUrl: "/crops/eggplant/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/eggplant/5.png",
            },
        },
        information: {
            name: "Eggplant",
            description: "The eggplant, aubergine, or brinjal is a plant species in the nightshade family Solanaceae.",
            imageUrl: "/products/eggplant.png",
            type: "Crops",
            seed: {
                name: "Eggplant Seed",
                price: 150,
                imageUrl: "/shop/crops/eggplant.png",
            },
            growthStageDuration: 6000,
            unlockLevel: 12,
            basicHarvestExperiences: 16,
            qualityHarvestExperiences: 32,
            harvestQuantity: 16,
            perennialCount: 2,
            availableInShop: true,
            basicSellPrice: 16,
            qualitySellPrice: 32,
        },
    },
    [CropId.Pea]: {
        growthStages: {
            1: {
                title: "Stage 1",
                description: "120 minutes",
                imageUrl: "/crops/pea/1.png",
            },
            2: {
                title: "Stage 2",
                description: "120 minutes",
                imageUrl: "/crops/pea/2.png",
            },
            3: {
                title: "Stage 3",
                description: "120 minutes",
                imageUrl: "/crops/pea/3.png",
            },
            4: {
                title: "Stage 4",
                description: "120 minutes",
                imageUrl: "/crops/pea/4.png",
            },
            5: {
                title: "Stage 5",
                description: "Harvest time",
                imageUrl: "/crops/pea/5.png",
            },
        },
        information: {
            name: "Pea",
            description: "The pea is most commonly the small spherical seed or the seed-pod of the flowering plant species Pisum sativum.",
            imageUrl: "/products/pea.png",
            type: "Crops",
            seed: {
                name: "Pea Seed",
                price: 150,
                imageUrl: "/shop/crops/pea.png",
            },
            growthStageDuration: 7200,
            unlockLevel: 13,
            basicHarvestExperiences: 18,
            qualityHarvestExperiences: 36,
            harvestQuantity: 16,
            perennialCount: 2,
            availableInShop: true,
            basicSellPrice: 18,
            qualitySellPrice: 36,
        },
    },
}