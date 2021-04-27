import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.less';
import { DatePicker, Input } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
import Calendar from '../calendar';
import moment from 'moment';
moment.locale('zh-cn');
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: false, //默认不展示下拉
      time: props.defaultValue, //默认时间选项  需要父组件传参defaultTime
      showYearPanel: false,
    };
  }

  UNSAFE_componentWillMount() {}
  //日期触发
  handleselect() {
    const tag = !this.state.tag;

    this.setState({
      tag: tag,
      showYearPanel: !this.state.showYearPanel,
    });
  }
  //选择年份 事件
  handleYearChange(date, dateString) {
    this.setState({
      showYearPanel: false,
      tag: false,
      time: date,
    });
    //传给父组件
    this.props.onChange(date, dateString);
  }

  //判断是否是点击的组件外部
  outClick = e => {
    if (e.target !== this.dataPickerBox && this.dataPickerBox && !this.dataPickerBox.contains(e.target)) {
      this.setState({
        tag: false,
        showYearPanel: false,
      });
    }
  };
  //icon点击事件
  iconClick = () => {
    this.handleselect();
  };
  render() {
    var self = this;
    const { disabledDate } = this.props;
    if (this.state.tag) {
      document.addEventListener('click', this.outClick);
    } else {
      document.removeEventListener('click', this.outClick);
    }
    const suffix = <CalendarFilled onClick={this.iconClick} style={{ color: 'rgba(0, 0, 0, 0.25)' }} />;

    return (
      <div
        className="selection1 selection dataPickerBox"
        style={{ ...this.props.style }}
        ref={ref => {
          this.dataPickerBox = ref;
        }}
      >
        <Input
          type="text"
          onClick={this.handleselect.bind(this)}
          value={this.state.time.format('YYYY')}
          readOnly="readonly"
          suffix={suffix}
        />
        <ul className={this.state.tag ? 'select-option' : 'hide'}>
          {this.state.showYearPanel ? (
            <div className="ant-calendar-picker-container ant-calendar-picker-container-placement-bottomLeft">
              <Calendar
                disabledDate={disabledDate}
                getCalendarContainer={trigger => {
                  return document.querySelector('.dataPickerBox');
                }}
                defaultValue={this.state.time}
                prefixCls="ant-calendar ant-calendar-month ant-calendar-month-calendar"
                placeholder="选择年"
                onSelect={this.handleYearChange.bind(this)}
              />
            </div>
          ) : (
            ''
          )}
        </ul>
      </div>
    );
  }
}

export default Index;
