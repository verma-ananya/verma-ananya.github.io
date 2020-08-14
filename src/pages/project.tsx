import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Projects from 'components/Projects';

const ProjectPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Project" />
      <Projects />
    </Layout>
  );
};

export default ProjectPage;
