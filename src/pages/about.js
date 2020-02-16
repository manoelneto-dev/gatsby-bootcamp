import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

// import { Container } from './styles';

export default function AboutPage() {
  return (
    <Layout>
        <h1>About</h1>
        <p>About info here.</p>
        <p><Link to='/contact'>Vamos conversar!</Link></p>
    </Layout>
  );
}
