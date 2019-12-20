import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';


describe('List component', () => {
  it('renders without crashing', () => {

    const div = document.createElement('div');

    ReactDOM.render(<List header="testHeader" 
    cards={[]}
    key="a"/>,  div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Snapshot test', () => {
  const tree = renderer.create(<List header = "testHeader"
  cards={[]}
  key="a"/>).toJSON();
  expect(tree).toMatchSnapshot(); 
});










