// Use ES module syntax for Next.js config
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bkcpkgwemxwrkaewlfff.supabase.co',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },
    // output: "export" //by doing this our site gets exported completly as static assest that we can deploy anywhere
};
