import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import { Link } from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'

import icon from '../image/tải xuống.png'

export const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Menu theme="dark" style={{width: '100%'}}>
                <Menu.Item key={1} icon={<HomeOutlined/>} selected={true}>
                    <Link to="">Home</Link>
                </Menu.Item>
                <Menu.Item key={2} icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                </Menu.Item>
            
                <Menu.Item key={3} icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
               
            </Menu>
        </div>
    </div>
  )
}