import { createContext, FC, PropsWithChildren, useState } from "react";

export const loaderContext: any = createContext({});

export const LoaderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderTimeout, setLoaderTimeout] = useState<Number>(500);

  return (
    <loaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loaderTimeout,
        setLoaderTimeout,
      }}
    >
      {children}
    </loaderContext.Provider>
  );
};
