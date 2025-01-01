'use client'
import { ReactNode } from "react";
import { store } from "./store";
import { Provider } from 'react-redux'

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;
