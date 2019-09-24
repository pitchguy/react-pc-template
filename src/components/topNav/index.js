import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import { Link, NavLink } from "react-router-dom";
import { Layout, Icon, Dropdown, Menu, Avatar, message, Badge, Select } from 'antd';
const { Header } = Layout;
import './style.scss'
import pic from '../../assets/img/self.png'
import http from '../../utils/http';
import apis from '../../constants/apis';
import Cookie from '../../utils/cookie';

@connect(
    state => ({ ...state.topNav }),
    dispatch => bindActionCreators(actions, dispatch)
)
export default class TopNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '未知',
		}
		const { getShopId } = this.props;
		getShopId();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props != nextProps || this.state != nextState;
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps, 'nextProps');
	}
	componentDidMount() {
		this.setState({
			username: Cookie.getCookie('username')
		})
	}

	logout() {
		http.post(apis.logout).then((res) => {
			if (res.success) {
				window.location.href = "/"
			} else {
				message.warning("退出失败！")
			}
		})
	}

	shopChange = (val) => {
		const { setShopId } = this.props;

		setShopId(val);
	}


	render() {
		const { username } = this.state;
		const { allShopId, currentShopId, navData, location, userData, messageCount } = this.props;
		let menuKeys = location.pathname.match(/\/\w*/g);
		const topMenu = (
			<Menu mode="horizontal"
				selectedKeys={[menuKeys[0]]}
			>
				{
					navData.length ?
						navData.map((item, idx) => (
							<Menu.Item key={item.permissionUrl.match(/\/\w*/g)[0]}>
								<NavLink to={item.permissionUrl}>{item.permissionName}</NavLink>
							</Menu.Item>
						))
						: <Menu.Item></Menu.Item>
				}
			</Menu>
		);
		const menu = (
			<Menu
				selectedKeys={[menuKeys[0]]}
				className="rightZoom">
				<Menu.Item key="/messageCenter">
					<NavLink to='/messageCenter'>
						<Badge count={messageCount} offset={[10,0]} showZero={false}>
							消息中心
						</Badge>
					</NavLink>
				</Menu.Item>
				<Menu.Item key="/resetPassword">
					<NavLink to='/resetPassword'>修改密码</NavLink>
				</Menu.Item>
				<Menu.Item>
					<a href="javascript:void(0)" onClick={this.logout}>退出</a>
				</Menu.Item>
			</Menu >
		)
		return <Header className="top-nav">
			<div className="logo">
				<span>基础项目名称</span>
			</div>
			<div className="top-nav-left">
				{topMenu}
			</div>
			<div className="top-nav-right">
				<Dropdown
					trigger={['hover', 'click']}
					placement="bottomCenter"
					getPopupContainer={() => document.querySelector('.top-nav-right')}
					overlay={menu}>
					<a className="ant-dropdown-link" href="javascript:void(0)">
						{username}&nbsp;&nbsp;<Icon type="down" />
					</a>
				</Dropdown>
			</div>
			{
				menuKeys[0]=="/operatingSight"||menuKeys[0]=="/operationSight"?
				<div className="top-nav-right goods-ct">
					<Select 
						style={{ width: 200,marginTop: 9 }} 
						value={currentShopId}
						onChange={this.shopChange}
					>
						{
							allShopId.map((item,index) =>{
								return <Select.Option value={item.shopId} key={index}>{item.shopName}</Select.Option>
							})
						}
					</Select>
				</div>:''
			}
		</Header>
	}
}
