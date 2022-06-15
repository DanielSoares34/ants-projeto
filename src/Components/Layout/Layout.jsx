import {
    OrderedListOutlined ,
    FileOutlined,
    HomeOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import Tabela from '../Tabela/table';



  const { Header, Content, Footer, Sider } = Layout;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Inicio', '1', <HomeOutlined />),
    getItem('Lista de Contatos', '2', <OrderedListOutlined />),
    getItem('Alunos', 'sub1', <UserOutlined />, [
      getItem('Materiais Educativos', '3'),
      getItem('Projetos de Sucesso', '4'),
      getItem('Programação', '5'),
      getItem('Secretaria', '6'),
    ]),
    getItem('Cursos', 'sub2', <TeamOutlined />, [getItem('Inglês', '7'), getItem('Espanhol', '8'),getItem('Francês', '9'), getItem('Italiano', '10')]),
    getItem('Arquivos', '11', <FileOutlined />),
  ];
  
  export function Layout1 () {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
           
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              
              <Tabela/>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Tera ©2022 Created by Daniel
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default Layout1;