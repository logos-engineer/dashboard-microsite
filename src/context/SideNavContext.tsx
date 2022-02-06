import * as React from 'react';

const SideNavContext = React.createContext<any>(null);

function Reducer(state: any, action: any) {
  switch (action.type) {
    case 'open': {
      return { ...state, mobileOpen: true };
    }

    case 'close': {
      return { ...state, mobileOpen: false };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function SideNavProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(Reducer, { mobileOpen: false });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  return (
    <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
  );
}

export { SideNavContext, SideNavProvider };
