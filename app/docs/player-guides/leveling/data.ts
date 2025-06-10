
export interface Activities {
    [key: string]: {
        energyConsume: number;
        experiencesGain: number;
    }
}

export const activities: Activities = {
    plantSeed: {
        energyConsume: 1,
        experiencesGain: 0
    },
    useAnimalMedicine: {
        energyConsume: 1,
        experiencesGain: 3
    },
    harvestAnimal: {
        energyConsume: 1,
        experiencesGain: 0
    },
    useAnimalFeed: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUseAnimalMedicine: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUseAnimalFeed: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUseHerbicide: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUsePesticide: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUseWateringCan: {
        energyConsume: 1,
        experiencesGain: 3
    },
    thiefPlant: {
        energyConsume: 1,
        experiencesGain: 3
    },
    thiefAnimal: {
        energyConsume: 1,
        experiencesGain: 3
    },
    useFertilizer: {
        energyConsume: 1,
        experiencesGain: 3
    },
    useHerbicide: {
        energyConsume: 1,
        experiencesGain: 3
    },
    usePesticide: {
        energyConsume: 1,
        experiencesGain: 3
    },
    useWateringCan: {
        energyConsume: 1,
        experiencesGain: 3
    },
    harvestPlant: {
        energyConsume: 1,
        experiencesGain: 0
    },
    useFruitFertilizer: {
        energyConsume: 1,
        experiencesGain: 3
    },
    useBugNet: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUseFruitFertilizer: {
        energyConsume: 1,
        experiencesGain: 3
    },
    helpUseBugNet: {
        energyConsume: 1,
        experiencesGain: 3
    },
    harvestFruit: {
        energyConsume: 1,
        experiencesGain: 0
    },
    thiefFruit: {
        energyConsume: 1,
        experiencesGain: 3
    },
    harvestBeeHouse: {
        energyConsume: 1,
        experiencesGain: 0
    },
    thiefBeeHouse: {
        energyConsume: 1,
        experiencesGain: 3
    }
}

export const computeExperiencesQuota = (level: number): number => {
    //the formula to calculate the experience quota
    //compute first 10 levels
    // 1: 50
    // 2: 125
    // 3: 225
    // 4: 350
    // 5: 500
    // 6: 675
    // 7: 875
    // 8: 1100
    // 9: 1350
    // 10: 1625
    return 50 * level + 25 * Math.pow(level - 1, 2)
}