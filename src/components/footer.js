import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          author
        }
      }
    }
  `)

  return (
    <footer>
        <p>Feito com <span role='img' aria-label='coffee'>☕</span> por {data.site.siteMetaData.author}</p>
    </footer>
  );
}
