'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _YearPanel = require('./YearPanel');

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _CalendarMixin = require('rc-calendar/lib/mixin/CalendarMixin');

var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);

var _CommonMixin = require('rc-calendar/lib/mixin/CommonMixin');

var _CommonMixin2 = _interopRequireDefault(_CommonMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var YearCalendar = (0, _createReactClass2['default'])({
  displayName: 'YearCalendar',

  propTypes: {
    YearCellRender: _propTypes2['default'].func,
    dateCellRender: _propTypes2['default'].func
  },
  mixins: [_CommonMixin2['default'], _CalendarMixin2['default']],

  onKeyDown: function onKeyDown(event) {
    var keyCode = event.keyCode;
    var ctrlKey = event.ctrlKey || event.metaKey;
    var stateValue = this.state.value;
    var disabledDate = this.props.disabledDate;
    var value = stateValue;
    switch (keyCode) {
      case _KeyCode2['default'].DOWN:
        value = stateValue.clone();
        value.add(3, 'Years');
        break;
      case _KeyCode2['default'].UP:
        value = stateValue.clone();
        value.add(-3, 'Years');
        break;
      case _KeyCode2['default'].LEFT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.add(-1, 'years');
        } else {
          value.add(-1, 'Years');
        }
        break;
      case _KeyCode2['default'].RIGHT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.add(1, 'years');
        } else {
          value.add(1, 'Years');
        }
        break;
      case _KeyCode2['default'].ENTER:
        if (!disabledDate || !disabledDate(stateValue)) {
          this.onSelect(stateValue);
        }
        event.preventDefault();
        return 1;
      default:
        return undefined;
    }
    if (value !== stateValue) {
      this.setValue(value);
      event.preventDefault();
      return 1;
    }
  },
  render: function render() {
    
    var props = this.props;
    var children = _react2['default'].createElement(_YearPanel2['default'], {
      locale: props.locale,
      disabledDate: props.disabledDate,
      style: { position: 'relative' },
      value: this.state.value,
      cellRender: props.YearCellRender,
      contentRender: '',
      rootPrefixCls: 'ant-calendar',
      prefixCls: 'ant-calendar',
      onChange: this.setValue,
      onSelect: props.onSelect,
      defaultValue: props.defaultValue
    });
    return this.renderRoot({
      children: children
    });
  }
});

exports['default'] = YearCalendar;
module.exports = exports['default'];