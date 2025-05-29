
export interface EnvConfig {
    assetBaseUrl: string;
}

export const envConfig = (): EnvConfig => ({
    assetBaseUrl: process.env.ASSET_BASE_URL || "https://cifarm.sgp1.cdn.digitaloceanspaces.com/assets",
})