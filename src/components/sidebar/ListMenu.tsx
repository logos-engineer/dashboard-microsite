import { HandIcon, PresentationChartBarIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { FC } from 'react';

const ListMenu: FC = () => {
  return (
    <>
      <nav className='mt-10'>
        <Link href='/' passHref>
          <a className='mt-4 flex items-center bg-gray-700 bg-opacity-25 py-2 px-6 text-gray-100'>
            <PresentationChartBarIcon className='h-6 w-6' />
            <span className='mx-3'>Webinar</span>
          </a>
        </Link>
        <Link href='/' passHref>
          <a className='mt-4 flex items-center bg-gray-700 bg-opacity-25 py-2 px-6 text-gray-100'>
            <HandIcon className='h-6 w-6' />
            <span className='mx-3'>Support Link</span>
          </a>
        </Link>
      </nav>
    </>
  );
};

export default ListMenu;
