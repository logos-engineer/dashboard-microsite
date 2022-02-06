import * as React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex h-screen bg-gray-200'>
      <Sidebar />
      <div className='flex flex-1 flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-y-auto overflow-x-hidden bg-gray-200'>
          <div className='container mx-auto px-6 py-8'>{children}</div>
        </main>
      </div>
    </div>
  );
}
