/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Header from '../components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Renders correctly', () => {
  renderer.create(<App />);
});

it('Renders Header component correctly', () => {
  const header = renderer.create(<Header />).toJSON();
  expect(header).toMatchSnapshot();
});
