'use strict';

var React = require('react'),
    smartdate = require('smartdate');

module.exports = React.createClass({
  propTypes: {
    date: React.PropTypes.any,
    mode: React.PropTypes.string,
  },
	render: function() {
		var config = smartdate.config,
        date = this.props.date,
        mode = this.props.mode,
        props;

		if (typeof date === 'string') {
			date = dateFromISOString(date);
		}

    props = {
        className: config.className,
        title: date.toLocaleString(),
        'data-timestamp': parseInt(date.getTime() / 1000),
        'data-mode': typeof mode === 'undefined' ? 'auto' : mode
    };

		return React.createElement(
			config.tagName,
			props,
			smartdate.format(date)
		);
	}
});

function dateFromISOString(ISODatetimeString) {
  var parts = typeof ISODatetimeString === 'string' ?
      ISODatetimeString.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z/) : '';
  return parts ? new Date(Date.UTC(parts[1], parts[2] - 1, parts[3],
         parts[4], parts[5], parts[6])) : null;
}
