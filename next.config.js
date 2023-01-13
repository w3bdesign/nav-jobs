/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["nb-NO"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "nb-NO",
  },
}

module.exports = nextConfig
