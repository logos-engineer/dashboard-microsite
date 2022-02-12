/* eslint-disable @next/next/no-img-element */
import { BellIcon, MenuAlt2Icon, SearchIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';

import useDropdown from '@/hooks/useDropdown';

import { SideNavContext } from '@/context/SideNavContext';

export default function Header() {
  const { dispatch: SideNavDispatch } = useContext(SideNavContext);
  const [handleDropdown, Dropdown, outsideRef] = useDropdown();

  return (
    <header className='flex items-center justify-between border-b-4 border-indigo-600 bg-white py-4 px-6'>
      {/* Nav and Search Section*/}
      <div className='flex items-center'>
        <button
          className='text-gray-500 focus:outline-none lg:hidden'
          onClick={() => {
            SideNavDispatch({
              type: 'open',
            });
          }}
        >
          <MenuAlt2Icon className='h-6 w-6' />
        </button>

        <div className='relative mx-4 lg:mx-0'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <SearchIcon className='h-5 w-5 text-gray-500' />
          </span>

          <input
            className='form-input w-32 rounded-md pl-10 pr-4 focus:border-indigo-600 sm:w-64'
            type='text'
            placeholder='Search'
          />
        </div>
      </div>

      {/* Notif and Profile Section*/}
      <div className='flex items-center'>
        <div className='relative'>
          <button className='mx-4 flex text-gray-600 focus:outline-none'>
            <BellIcon className='h-6 w-6' />
          </button>
          <div
            className='fixed inset-0 z-10 h-full w-full'
            style={{ display: 'none' }}
          ></div>
        </div>

        <div className='relative' ref={outsideRef}>
          <button
            onClick={handleDropdown}
            className='relative block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none'
          >
            <img
              className='h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80'
              alt='Your avatar'
            />
          </button>
          <Dropdown classNames='right-0 top-10 z-10 w-24 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:bg-gray-700 '>
            <ul className='py-1' aria-labelledby='dropdownButton'>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Sign out
                </a>
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
