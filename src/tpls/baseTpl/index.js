import React, { Component } from 'react';
import { Layout, Icon } from "antd";
import Foot from '../../components/footer'
import './style.scss';
const { Header } = Layout;
export default class BaseTpl extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    UNSAFE_componentWillReceiveProps(nextProps) { }


    render() {
        return (
            <Layout className="g-container">
                <Header className="top-nav">
                    <div className="logo">
                        {/* <span className="logoImg">LOGO</span> */}
                        <span>基本模版项目</span>
                    </div>
                </Header>
                <Layout className="g-body">
                    <Layout className="g-main" >
                        <div className="g-content">
                            {this.props.children}
                        </div>
                        <Foot className="g-footer" />
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
