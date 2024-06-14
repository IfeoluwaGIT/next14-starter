/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          }
        ]
      } // so this is how to add external images the image.pexel is because it has to be the image url
}

module.exports = nextConfig
