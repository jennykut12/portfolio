/** @type {import('next').NextConfig} */

const nextConfig = {};

// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Exclude .docx files from being processed by webpack
      config.module.rules.push({
        test: /\.docx$/,
        use: 'ignore-loader', // or any other loader you prefer
      });
      
      return config;
    },
  };  

export default nextConfig;
