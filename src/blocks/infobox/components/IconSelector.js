import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import React from 'react';
import AlaminIcon from './AlaminIcon.json';

 const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	ButtonGroup,
} = wp.components

const { Component, Fragment } = wp.element

let alamin_icons = Object.keys( AlaminIcon )

class IconSelector extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: 'fas fa-star',
    };
  }
  handleChange = (value) => {
    this.setState({ value });
  }
	render() {	
			
		const props = {
      icons: alamin_icons,
      theme: 'bluegrey',
      renderUsing: 'class',
      value: this.state.value,
      onChange: this.handleChange,
      isMulti: false,
    };

    console.log(props.onChange);
		
		return (
      <div className='iconselector-wrapper'>
        <FontIconPicker {...props}/>
      </div>				
		);
	}
}

export default IconSelector;