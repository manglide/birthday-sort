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

  it('check default/initial state of the application', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Birthday).text()).toEqual('Birthday RecordsSort By NameSort By AgeNameDate of BirthAlexander Alfred02/09/1891Cecilia Olsson09/16/1992Deborah T. Decker10/31/1999Janice Shroyer12/01/1982Jimmy Shergil12/12/2001Peter Parker01/16/1992Ralph White11/30/2011Veronica Mize11/29/2011');
  });

  /* I ran out of time, would have ran more test here */
});
