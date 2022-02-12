import React, { useMemo, useRef, useState } from 'react';

import useOutsideClick from '@/helper/useOutsideClick';

type Props = {
  children: React.ReactNode;
  classNames: string;
};

function useDropdown(): [
  () => void,
  ({ classNames, children }: Props) => JSX.Element,
  any
] {
  const [viewDropdown, setviewDropdown] = useState<boolean>(false);
  const outsideRef = useRef(null);

  const handleViewDropdown = () => {
    setviewDropdown(!viewDropdown);
  };

  useOutsideClick(outsideRef, () => {
    setviewDropdown(false);
  });

  const Dropdown = useMemo(() => {
    return ({ classNames, children = <></> }: Props) => (
      <div
        className={
          'absolute  ' + classNames + (viewDropdown ? ' block' : ' hidden')
        }
      >
        {children}
      </div>
    );
  }, [viewDropdown]);
  return [handleViewDropdown, Dropdown, outsideRef];
}

export default useDropdown;
