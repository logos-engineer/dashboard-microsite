import React from 'react';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  Icon?: JSX.Element;
}

const LinkMenu = React.forwardRef(({ Icon, ...props }: Props, ref: any) => (
  <a
    ref={ref}
    className={
      'mt-4 flex items-center  bg-opacity-25 py-2 px-6 text-gray-100 ' +
      props.className
    }
    {...props}
  >
    {Icon}

    <span className='mx-3'>{props.children}</span>
  </a>
));

// function LinkMenu({ Icon, itemRef, ...props }: Props) {
//   return (

//   );
// }

export default LinkMenu;
