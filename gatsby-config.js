module.exports = {
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
