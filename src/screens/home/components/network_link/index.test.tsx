import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import NetworkLink from '.';

describe('AvatarDisplayHelper', () => {
  it('correctly renders UserDisplay', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <NetworkLink
          network={{
            chainId: 'hello world',
            url: 'a link',
            name: 'testnet',
          }}
          className="testnet"
        />,
        theme: lightTheme,
      }),
    );

    await awaitActions({
      wrapper,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find('a').first().text()).toEqual('hello world');
  });
});
