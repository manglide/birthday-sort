import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './components/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Birthday from './components/Birthday'
configure({ adapter: new Adapter() });

describe('BirthdayRecords <App/>', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  /* I ran out of time, would have ran more test here */
});
