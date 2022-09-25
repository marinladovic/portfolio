import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import ThemeProps from './ThemeProps';
import { applyTheme } from '../theme/utils';
import baseTheme from '../theme/base';
import darkTheme from '../theme/dark';
import lightTheme from '../theme/light';

function ToggleTheme() {
  return (
    <div>
      <Menu as="div" className="relative">
        <div className="flex justify-center items-center">
          <Menu.Button className="w-6 h-6 rounded-full bg-primary border-2 border-accent flex items-center justify-center">
            <FaChevronDown />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-0"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-0"
        >
          <Menu.Items className="absolute right-0 mt-2 z-30 origin-top-right bg-primary ring-1 ring-accent ring-opacity-5 focus:outline-none">
            <div className="px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => applyTheme(baseTheme)}
                    className="flex items-center hover:scale-110 transition duration-150 cursor-pointer"
                  >
                    <div className="w-5 h-5 mr-2 rounded-full bg-[#005963] border-2 border-[#00ffd0]"></div>
                    <p>Green</p>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => applyTheme(darkTheme)}
                    className="flex items-center hover:scale-110 transition duration-150 cursor-pointer"
                  >
                    <div className="w-5 h-5 mr-2 rounded-full bg-[#333] border-2 border-[#fff]"></div>
                    <p>Dark</p>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => applyTheme(lightTheme)}
                    className="flex items-center hover:scale-110 transition duration-150 cursor-pointer"
                  >
                    <div className="w-5 h-5 mr-2 rounded-full bg-[#fff] border-2 border-[#333]"></div>
                    <p>Light</p>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

ToggleTheme.propTypes = {
  ...ThemeProps,
};

ToggleTheme.defaultProps = {
  color: 'accent',
};

export default ToggleTheme;
