import { ReactNode } from "react";

import Listeners from "./listeners";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Listeners />
      {children}
    </>
  );
};

export default MainLayout;
