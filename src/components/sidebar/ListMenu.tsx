import { HandIcon, PresentationChartBarIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { FC } from 'react';

import LinkMenu from './LinkMenu';

const ListMenu: FC = () => {
  return (
    <>
      <nav className='mt-10'>
        <Link href='/webinar' passHref>
          <LinkMenu Icon={<PresentationChartBarIcon className='h-6 w-6' />}>
            Webinar
          </LinkMenu>
        </Link>
        <Link href='/support' passHref>
          <LinkMenu Icon={<HandIcon className='h-6 w-6' />}>
            Support Link
          </LinkMenu>
        </Link>
      </nav>
    </>
  );
};

export default ListMenu;
