import React, { Component } from 'react';
import { Layout, Icon } from "antd";
import { connect } from "react-redux";
import TopNav from "../../components/topNav";
import Foot from '../../components/footer'
import * as global from "../../pages/global/action";
import { bindActionCreators } from "redux";
import './style.scss';
@connect(
	state => ({ ...state.global }),
	dispatch => bindActionCreators({ ...global }, dispatch)
)
export default class MainTpl extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.audio = new Audio(tips);
	}

	componentDidMount() {
		// this.props.getNavData({});
		// this.timer=setInterval(()=>{
		// 	http.get(apis.getMessageRemind).then((response)=>{
		// 		const {success,data} = response;
		// 		if(success&&data>0){
		// 			this.audio.play();
		// 			if(this.props.location.pathname != "/messageCenter"){
		// 				this.props.setMessage(data);
		// 			}
		// 		}
		// 	})
		// },2000);
		// this.props.websocketConnect();
	}
	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps.socketData, 'socketData')
	// 	if (this.props.socketData == undefined && nextProps.socketData) {
	// 		this.websocket = nextProps.socketData.connected && nextProps.socketData.subscribe(apis.getMessage, (response) => {
	// 			try {
	// 				this.audio.play();
	// 				if(nextProps.location.pathname != "/messageCenter"){
	// 					this.props.setMessage();
	// 				}
	// 			} catch (err) {
	// 				console.log(err, 'err')
	// 			}
	// 		})
	// 	}
	// }
	componentWillUnmount() {
		// this.websocket && this.websocket.unsubscribe();
		clearInterval(this.timer); 
	}


	render() {
		const { navData, match, location, messageCount } = this.props;
		return (
			<Layout className="g-container">
				<TopNav location={location} navData={navData.topNav} messageCount={messageCount} />
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
