import { createContext, FC, PropsWithChildren, useState } from "react";

export const dropdownsContext: any = createContext({});

export const DropDownsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSelects, setActiveSelects] = useState<any>([]);
  return (
    <dropdownsContext.Provider value={{ activeSelects, setActiveSelects }}>
      {children}
    </dropdownsContext.Provider>
  );
};
