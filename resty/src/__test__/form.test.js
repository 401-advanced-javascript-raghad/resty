import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../../src/form/Form';

describe('<Form/>', ()=> {
    it('is alive at application start', () =>{
        let app = shallow(<Form />);
        expect(app.find('main').exists()).toBeTruthy();
    });

    // it('changes state on click', ()=> {
    //     let app = mount(<Form />);
    //     let button = app.find('button');
    //     button.simulate('click');
    //     expect(app.state('method')).toBe();
    //     expect(app.find('span').text()).toContain('false');
    // });

    // it('renders correctly', ()=> {
    //     const tree = renderer.create(<Form />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });


});