import { AttributeName, FruitId, NFTRarity, fruits } from "../_data";

interface FruitRarityInfoProps {
    fruitId: FruitId;
}

const attributeExplanations = {
    [AttributeName.GrowthAcceleration]: {
        title: "Growth Acceleration",
        description: "This attribute affects the growth speed of the plant. Higher values result in faster growth.",
        formula: "Growth rate = 1 + (value / (1000 + value))",
        examples: [
            "Common (100): 1.09x growth speed",
            "Rare (200): 1.17x growth speed",
            "Epic (300): 1.23x growth speed"
        ]
    },
    [AttributeName.QualityYield]: {
        title: "Quality Yield",
        description: "Increases the chance of harvesting high-quality fruits. Higher values result in better quality chances.",
        formula: "Quality rate = 1 + (value / (1000 + value))",
        examples: [
            "Common (100): 1.09x quality chance",
            "Rare (200): 1.17x quality chance",
            "Epic (300): 1.23x quality chance"
        ]
    },
    [AttributeName.DiseaseResistance]: {
        title: "Disease Resistance",
        description: "Reduces the chance of the plant getting diseases. Higher values provide better disease resistance.",
        formula: "Resistance rate = 1 + (value / (1000 + value))",
        examples: [
            "Common (100): 1.09x disease resistance",
            "Rare (200): 1.17x disease resistance",
            "Epic (300): 1.23x disease resistance"
        ]
    },
    [AttributeName.HarvestYieldBonus]: {
        title: "Harvest Yield Bonus",
        description: "Increases the amount of fruits harvested. Higher values result in more fruits per harvest.",
        formula: "Yield rate = 1 + (value / (1000 + value))",
        examples: [
            "Common (100): 1.09x harvest amount",
            "Rare (200): 1.17x harvest amount",
            "Epic (300): 1.23x harvest amount"
        ]
    }
};

const rarityInfo = {
    [NFTRarity.Common]: {
        color: "text-gray-500 dark:text-gray-400",
        bgColor: "bg-gray-100 dark:bg-gray-800",
        description: "Basic rarity, suitable for beginners",
        attributes: {
            [AttributeName.GrowthAcceleration]: 100,
            [AttributeName.QualityYield]: 100,
            [AttributeName.DiseaseResistance]: 100,
            [AttributeName.HarvestYieldBonus]: 100
        }
    },
    [NFTRarity.Rare]: {
        color: "text-blue-500 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        description: "Rare rarity, provides significant benefits",
        attributes: {
            [AttributeName.GrowthAcceleration]: 200,
            [AttributeName.QualityYield]: 200,
            [AttributeName.DiseaseResistance]: 200,
            [AttributeName.HarvestYieldBonus]: 200
        }
    },
    [NFTRarity.Epic]: {
        color: "text-purple-500 dark:text-purple-400",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        description: "Epic rarity, provides maximum benefits",
        attributes: {
            [AttributeName.GrowthAcceleration]: 300,
            [AttributeName.QualityYield]: 300,
            [AttributeName.DiseaseResistance]: 300,
            [AttributeName.HarvestYieldBonus]: 300
        }
    }
};

export const FruitRarityInfo: React.FC<FruitRarityInfoProps> = ({ fruitId }) => {
    const fruit = fruits[fruitId];
    const isNFT = fruit.infomation.isNFT;

    if (!isNFT) {
        return null;
    }

    return (
        <div className="space-y-8 mt-4">
            {/* Attribute Explanations */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold dark:text-white">Attribute Explanations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(attributeExplanations).map(([key, info]) => (
                        <div key={key} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h4 className="font-semibold text-lg mb-2 dark:text-white">{info.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{info.description}</p>
                            <p className="text-sm font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2 dark:text-gray-200">{info.formula}</p>
                            <div className="space-y-1">
                                {info.examples.map((example, index) => (
                                    <p key={index} className="text-sm text-gray-500 dark:text-gray-400">{example}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rarity Information */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold dark:text-white">Rarity Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(rarityInfo).map(([rarity, info]) => (
                        <div key={rarity} className={`p-4 rounded-lg ${info.bgColor} flex flex-col justify-between`}>
                            <div className="space-y-2">
                                <h4 className={`text-lg font-bold mb-2 ${info.color}`}>
                                    {rarity}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{info.description}</p>
                            </div>
                            <div className="space-y-2">
                                {Object.entries(info.attributes).map(([attr, value]) => (
                                    <div key={attr} className="flex justify-between items-center">
                                        <span className="text-sm font-medium dark:text-gray-200">{attr}</span>
                                        <span className="text-sm font-mono dark:text-gray-300">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 