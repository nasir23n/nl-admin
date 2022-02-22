import React from 'react'
import Panel from './NL_Components/Panel'
import Layout from './Layout/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div>
        <h1>Dashboard</h1>
      </div>
      <br/>
      <Panel header="Panel Header">
        <h4>Panel body</h4>
      </Panel>
    </Layout>
  )
}
