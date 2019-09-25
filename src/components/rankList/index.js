import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { List, Skeleton } from 'antd';
import { isEmpty } from 'lodash';
import './style.scss'

export default class RankList extends Component {
	static defaultProps = {
		title: '近7日商品销量TOP5',
		style: {},
		contentHeight: 40,
		columns: ['name', 'num'],
		color: 'green',
		loading: false
	}
	static propTypes = {
		title: PropTypes.string,/* 排行榜的标题 */
		data: PropTypes.array.isRequired,/* 数据源 */
		style: PropTypes.object,/* css */
		contentHeight: PropTypes.number,/* 	内容区域高度 */
		columns: PropTypes.array,/* 展示的列 */
		color: PropTypes.string,/* 前三名的背景颜色 */
		loading: PropTypes.bool,/* 加载中的占位符 */
	}
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
	}
	UNSAFE_componentWillReceiveProps(nextProps) {

	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.props != nextProps || this.state != nextState;
	}
	render() {
		const { title, data, style, contentHeight, columns, color, loading } = this.props;
		let height = (contentHeight - 40) / 5;
		return (
			<div className="rankList" style={{ ...style, height: contentHeight + 49 }}>
				<List
					dataSource={data}
					bordered={false}
					header={<div>{title}</div>}
					renderItem={(item, index) => (
						<div className="listItem" style={{ height: height }}>
							<Skeleton active loading={loading}>
								<span className={index < 3 ? color + ' item_icon' : 'item_icon'}>{index + 1}</span>
								<span className="itemName">{item[columns[0]]}</span>
								<span className="itemNum">{item[columns[1]]}</span>
							</Skeleton>
						</div>
					)} />
			</div>
		)
	}
}
