import React from "react"
import { graphql } from "gatsby"

import "./index.css";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

    const Posts = edges.map(edge => {

        return (
            <div className="demo-page">
                <h3>{edge.node.frontmatter.title}{JSON.stringify(edge, null, 2)}</h3>
                <div dangerouslySetInnerHTML={{__html:edge.node.excerpt}}></div>
                <img width={200} alt="awesome" src={edge.node.frontmatter.thumbnail}/>
            </div>
        );
    });

    return (
        <div>
            <h2>Pages</h2>
            <div>{Posts}</div>
        </div>

    );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail
          }
          excerpt(format: HTML)
        }
      }
    }
  }
`