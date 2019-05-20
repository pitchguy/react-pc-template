import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Foot() {
  return <Footer style={{backgroundColor:'#F0F5F3'}}>
    <div style={{textAlign:"center"}}>
      <b>©Copyright </b>
      { (new Date()).getFullYear() } 杭州XX科技有限公司 浙ICP备150XXXXXX号-1
    </div>
  </Footer>
}
