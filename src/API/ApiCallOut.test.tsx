import * as React from 'react';
import { APICallOut } from './ApiCallOut';
import { mount } from 'enzyme';

it('this is to test API', async () => {
    const mockData = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };
    const promise = Promise.resolve(mockData);

    const wrapper = mount(<APICallOut />);

    await promise;
    expect(wrapper.state()).toHaveProperty('dataReady', false);
    wrapper.update();
    expect(wrapper.text()).toContain('spinner');
});