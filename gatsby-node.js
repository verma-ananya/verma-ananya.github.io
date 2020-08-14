const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`]
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.tsx`);
  const projectPostTemplate = path.resolve(`src/templates/ProjectPost/index.tsx`);


  const resBlog = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  
  //generate pages for posts

  const posts = resBlog.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next
      }
    });
  });

  const resProject = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const projects = resProject.data.allMarkdownRemark.edges;
  
  projects.forEach((project, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `${project.node.fields.slug}`,
      component: projectPostTemplate,
      context: {
        slug: `${project.node.fields.slug}`,
        previous,
        next
      }
    });
  });

};

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   //generate pages for projects

//   const projectPostTemplate = path.resolve(`src/templates/ProjectPost/index.tsx`);

//   const res2 = await graphql(`
//     query {
//       allMarkdownRemark(
//         sort: { fields: frontmatter___date, order: DESC }
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   `);

//   const projects = res2.data.allMarkdownRemark.edges;
  
//   projects.forEach((project, index) => {
//     const previous = index === projects.length - 1 ? null : projects[index + 1].node;
//     const next = index === 0 ? null : projects[index - 1].node;

//     createPage({
//       path: `${project.node.fields.slug}`,
//       component: projectPostTemplate,
//       context: {
//         slug: `${project.node.fields.slug}`,
//         previous,
//         next
//       }
//     });
//   });

// };


// filter: { frontmatter: { category: { eq: "blog" } } }
// filter: { frontmatter: { category: { eq: "project" } } }
