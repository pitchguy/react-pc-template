import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { DatePicker, Select, Radio } from 'antd';
import { isEmpty, reverse } from 'lodash';
import moment from 'moment'
import YearPicker from './yearPicker';
import './style.scss'
const { WeekPicker, MonthPicker } = DatePicker;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class DatePickers extends Component {
	static defaultProps = {
		disabledDate: () => { },
		onChange: () => { },
		onRadioChange: () => { },
		onSelectChange: () => { },
		banRadio: false,
	}
	static propTypes = {
		disabledDate: PropTypes.func,/* 禁止选择的日期 */
		onSelectChange: PropTypes.func,/* 下拉框 */
		onRadioChange: PropTypes.func,/* 同比环比单选 */
		banRadio: PropTypes.bool,/* 是否禁用同比环比的单选框 */
		onChange: PropTypes.func,/* 日期 */
	}
	constructor(props) {
		super(props);
		this.state = {
			mode: 'date',
			startValue: moment().subtract(1, 'month'),
			endValue: moment().subtract(1, 'days'),
		};
	}
	componentWillMount() {
	}
	componentDidMount() {

	}
	componentWillReceiveProps(nextProps) {
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.props != nextProps || this.state != nextState;
	}
	/* 禁止选择的日期 */
	disabledDate = (current) => {
		const { mode } = this.state;
		if (mode == 'date') {
			return current && (current > moment().startOf('day') || current < this.state.startValue);
		} else if (mode == 'week') {
			return current && (current > moment().startOf('day') || current < this.state.startValue.startOf('week'));
		} else if (mode == 'month') {
			return current && (current > moment().endOf('month') || current < this.state.startValue.startOf('month'));
		} else if (mode == 'year') {
			return current && (current > moment().endOf('year') || current < this.state.startValue.startOf('year'));
		}
		return current && (current > moment().startOf('day') || current < this.state.startValue);
	}
	/* 禁止选择的日期 */
	disabledStartDate = (current) => {
		const { mode } = this.state;
		if (mode == 'date') {
			return current && (current > moment().startOf('day'));
		} else if (mode == 'week') {
			return current && (current > moment().startOf('day'));
		} else if (mode == 'month') {
			// console.log(current + ' > ' + moment().startOf('month'), current > moment().startOf('month'))
			return current && (current > moment().endOf('month'));
		} else if (mode == 'year') {
			return current && (current > moment().endOf('year'));
		}
		return false;
	}
	/**
	 * 统计粒度下拉框
	  */
	handleUnitPriceChange = (value) => {
		this.props.onSelectChange(value);
		this.props.onRadioChange(1);/* 选择时默认为同比 */
		if (value == 1) {
			this.setState({
				mode: 'date',
			})
		} else if (value == 2) {
			this.setState({
				mode: 'week',
			})
		} else if (value == 3) {
			this.setState({
				mode: 'month',
			})
		} else if (value == 4) {
			this.setState({
				mode: 'year',
			})
		}
	}
	/**
	 * 开始日期
	 */
	handleStartDate = (date, dateString) => {
		this.props.onChange([date, this.state.endValue])
		this.setState({
			startValue: date,
		})
	}
	/**
	 * 结束日期
	 */
	handleEndDate = (date, dateString) => {
		this.props.onChange([this.state.startValue, date])
		this.setState({
			endValue: date
		})
	}
	/* 选择同比环比 */
	handleRadioChange = (value) => {
		this.props.onRadioChange(value)
	}
	/**
	 * 渲染时间段控件
	 * @param mode-时间类型
	 */
	renderRangeDate = (mode) => {
		const { startValue, endValue } = this.state;
		let node;
		switch (mode) {
			case 'date':
				node = <span>
					<DatePicker
						allowClear={false}
						onChange={this.handleStartDate}
						value={startValue}
						disabledDate={this.disabledStartDate}
					/>
					<span style={{ margin: '0 10px' }}>~</span>
					<DatePicker
						allowClear={false}
						onChange={this.handleEndDate}
						disabledDate={this.disabledDate}
						value={endValue} />
				</span>
				break;
			case 'week':
				node = <span>
					<WeekPicker
						allowClear={false}
						onChange={this.handleStartDate}
						value={startValue}
						disabledDate={this.disabledStartDate}
					/>
					<span style={{ margin: '0 10px' }}>~</span>
					<WeekPicker
						allowClear={false}
						onChange={this.handleEndDate}
						disabledDate={this.disabledDate}
						value={endValue} />
				</span>
				break;
			case 'month':
				node = <span>
					<MonthPicker
						allowClear={false}
						onChange={this.handleStartDate}
						value={startValue}
						disabledDate={this.disabledStartDate}
					/>
					<span style={{ margin: '0 10px' }}>~</span>
					<MonthPicker
						allowClear={false}
						onChange={this.handleEndDate}
						disabledDate={this.disabledDate}
						value={endValue} />
				</span>
				break;
			case 'year':
				node = <span>
					<YearPicker
						disabledDate={this.disabledStartDate}
						onChange={this.handleStartDate}
						option={[]}
						defaultValue={moment()} />
					<span style={{ margin: '0 10px' }}>~</span>
					<YearPicker
						disabledDate={this.disabledDate}
						onChange={this.handleEndDate}
						option={[]}
						defaultValue={moment()} />
				</span>
				break;
		}
		return node;
	}
	render() {
		const { banRadio } = this.props;
		const { mode } = this.state;
		return (
			<div style={{ margin: '0 .277778rem', display: 'inline-block' }}>
				{
					mode == 'month' && !banRadio && <RadioGroup style={{ marginRight: 20 }} onChange={(e) => this.handleRadioChange(e.target.value)} defaultValue={1}>
						<RadioButton value={1}>环比</RadioButton>
						<RadioButton value={0}>同比</RadioButton>
					</RadioGroup>
				}
				{
					this.renderRangeDate(mode)
				}
				<Select
					style={{ width: '2.22222rem', marginLeft: '.277778rem' }}
					defaultValue={1}
					onChange={this.handleUnitPriceChange}>
					<Option value={1}>按天统计</Option>
					<Option value={2}>按周统计</Option>
					<Option value={3}>按月统计</Option>
					<Option value={4}>按季度统计</Option>
				</Select>
			</div>
		)
	}
}
export default DatePickers