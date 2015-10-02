'use strict';

var React = require('react'),
	smartdate = require('smartdate');

module.exports = React.createClass({
	render: function() {
		var config = smartdate.config,
			date = this.props.date,
			props;

		if (typeof date === 'string') {
			date = dateFromISOString(date);
		}

        props = {
            className: config.className,
            title: date.toLocaleString(),
            'data-timestamp': parseInt(date.getTime() / 1000)
        };

		return React.createElement(
			config.tagName,
			props,
			smartdate.format(date)
		);
	}
});

function dateFromISOString(ISODatetimeString) {
	if (typeof ISODatetimeString === 'string') {
		var parts = ISODatetimeString.match(
			/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z/);
		if (parts) {
			return new Date(Date.UTC(parts[1], parts[2] - 1, parts[3],
				parts[4], parts[5], parts[6]));
		}
	}
	return null;
}
