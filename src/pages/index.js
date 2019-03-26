import React from 'react'
import './index.css'
import Tab from '../components/tab';

const IndexPage = () => (
  <div className="BG">
    <div className="logo-part">
      <img src={require('../images/bg/logo-l.png')} alt='logo-l' />
      <img src={require('../images/bg/logo-r.png')} alt='logo-r' />
    </div>
    
    <Tab />
  </div>


)



export default IndexPage
