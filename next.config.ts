import type { NextConfig } from 'next';

const githubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: githubPages ? '/galaxia-para-danna' : '',
  assetPrefix: githubPages ? '/galaxia-para-danna/' : undefined,
};

export default nextConfig;
