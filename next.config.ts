import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

type SvgRule = {
  test?: { test: (value: string) => boolean };
  issuer?: unknown;
  resourceQuery?: RegExp | { not?: RegExp[] };
  exclude?: RegExp;
  use?: string[];
};

type WebpackConfigWithRules = {
  module: {
    rules: SvgRule[];
  };
};

const nextConfig: NextConfig = {
  webpack(config) {
    const configWithRules = config as WebpackConfigWithRules;
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = configWithRules.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    if (!fileLoaderRule) {
      return config;
    }

    configWithRules.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [
            ...(
              fileLoaderRule.resourceQuery &&
              typeof fileLoaderRule.resourceQuery === 'object' &&
              'not' in fileLoaderRule.resourceQuery
                ? fileLoaderRule.resourceQuery.not ?? []
                : []
            ),
            /url/,
          ],
        }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
