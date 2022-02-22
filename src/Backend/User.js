import React from 'react'
import Panel from './NL_Components/Panel'
import Layout from './Layout/Layout'

export default function User() {
  return (
    <Layout>
      <div>
        <h1>User</h1>
      </div>
      <br/>
      <Panel header="Panel Header">
        <h4>Panel body</h4>
      </Panel>
    </Layout>
  )
}
