import { __ } from '@wordpress/i18n';

import { Component } from '@wordpress/element';

class InfoboxIcon extends Component {

	render() {

		const { attributes } = this.props

		return (
      <div className="alamin-icon-wrapp">
        <span className="alamin-icon">
          <i className={attributes.icon}></i>
        </span>
      </div>
		)
	}
}

export default InfoboxIcon
