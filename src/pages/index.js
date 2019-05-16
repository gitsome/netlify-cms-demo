import React from "react"
import { graphql } from "gatsby"

import "./index.css";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

    const Posts = edges.map(edge => {

        edge.node.frontmatter.thumbnail = edge.node.frontmatter.thumbnail.replace("/public", "");

        return (
            <div className="demo-page">
                <h3>{edge.node.frontmatter.title}</h3>
                <div dangerouslySetInnerHTML={{__html:edge.node.excerpt}}></div>
                <img alt="awesome" src={edge.node.frontmatter.thumbnail}/>
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