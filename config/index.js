module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Four Satellites', // Navigation and Site Title
  siteTitleAlt: 'Four Satellites', // Alternative Site title for SEO
  siteTitleManifest: 'FourSatellites',
  siteUrl: 'https://foursatellites.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/four-satellites.png', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Consulting | Speaking | Education | Design', // Your site description
  author: 'Brett Haymaker', // Author for schemaORGJSONLD
  siteLogo: '/social/four-satellites-logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@minimal', // Twitter Username - Optional
  ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c'
};
