import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

// import { Container } from './styles';

export default function IndexPage() {
  return (
    <Layout>
        <h1>Olá.</h1>
        <h2>Me chamo Manoel, sou um Dev e QA Leader.</h2>
        <p>Precisa de um Dev? <Link to='/contact'>Fala comigo!</Link></p>
    </Layout>
  );
}
