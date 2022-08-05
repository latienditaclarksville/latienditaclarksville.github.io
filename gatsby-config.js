/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'La Tiendita | 100% Auténtico.',
    description: '"Little Shop", La Tiendita aims to bring an authentic Latino culture to Clarksville, TN. Immerse yourself in a real Mexicano atmosphere when you step into our shop. With Latino music playing, Spanish speaking workers, and our variety of goods - snacks, medicines, candles, clothes, vegetables - all imported from Mexico, you will think you visited Mexico.',
    shopOwner: 'Francisco Hernandez',
    author: {
      name: 'Johnathan Dickson',
      github: 'jdcodes-12',
      instagram: 'ayojohnxy',
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "La Tiendita",
        short_name: "La Tiendita",
        start_url: "/",
        icon: "./src/assets/logos/favicon.ico",
        //crossOrigin: `use-credentials`,
      },
    },
  ],
}
