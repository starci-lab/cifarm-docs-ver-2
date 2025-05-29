import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  experimental: {
    turbopack: {
      resolveAlias: {
        'next-mdx-import-source-file': './mdx-components.js'
      }
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cifarm.sgp1.cdn.digitaloceanspaces.com',
        protocol: 'https',  
      },
    ],
  },
})