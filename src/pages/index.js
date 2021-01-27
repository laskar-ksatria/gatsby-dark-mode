import React from 'react';
import Layout from '../components/layout'
import Toggle from '../components/Toggle'

function Index() {

  return (
    <Layout>
      <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <Toggle />
      </div>
    </Layout>
  )
}

export default Index