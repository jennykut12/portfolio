/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, { isServer }) => {
        // Exclude .docx files from being processed by webpack
        config.module.rules.push({
          test: /\.docx$/,
          use: 'ignore-loader',
        });
        
        return config;
      },
};

export default nextConfig;
