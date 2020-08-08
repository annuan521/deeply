import React from 'react';
import styles from './index.css';
import Head from '../component/Header'
import { Layout } from 'antd';
import LeftMenu from '../layouts/component/menu'
const { Sider, Content } = Layout;

export default function (props: any) {

  return (
    <Layout  className = {styles.mainContainer}>
      <Head></Head>
      <Layout>
        <Sider className = {styles.sider}>
          <LeftMenu></LeftMenu>
        </Sider>
        <Content className = {styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
