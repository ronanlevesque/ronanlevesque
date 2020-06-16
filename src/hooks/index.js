import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              GitHub
              CodePen
              Twitter
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
