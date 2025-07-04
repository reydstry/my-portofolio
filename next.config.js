const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
};

module.exports = nextConfig;
