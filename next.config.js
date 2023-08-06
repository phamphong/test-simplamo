module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
