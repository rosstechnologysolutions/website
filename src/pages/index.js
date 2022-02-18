import React from 'react';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Divider from '../components/Divider';

// TODO: use parallax to move between sections

const IndexPage = () => {
  return (
    <>
    <Layout>
      <Helmet title="Ross Technology Solutions">
        <meta name="description" content="Ross Technology Solutions is a Cloud-Native Consulting Firm helping organizations adopt and mature DevOps practices." />
        <meta name="keywords" content="devops, cloud, native, cloud-native, ci, cd, ci/cd, continous, integration, deployment, delivery" />
      </Helmet>
      <Services />
      <Divider />
      <CallToAction />
    </Layout>
    </>
  )
}

export default IndexPage
