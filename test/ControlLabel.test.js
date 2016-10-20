import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import ControlLabel from '../src/index';

describe('Enzyme Shallow', function() {
	it('ControlLable should be exist', function() {
		let controlLabel = shallow(<ControlLabel/>);
		expect(controlLabel.hasClass('control-label')).to.equal(true);
	})
})
