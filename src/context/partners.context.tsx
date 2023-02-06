import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import AppHelper from "../helpers/application.helper";

export const partnersContext: any = createContext(null);

export const PartnersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [partners, setPartners] = useState([]);
  const resultConteiner = document.getElementById("netwrix_result_conteiner");
  const helper = new AppHelper();
  useEffect(() => {
    const getPartners = helper.getPartnerLocators();
    Promise.all([getPartners]).then((res) => {
      setPartners(res[0]);
    });
  }, []);
  return (
    <partnersContext.Provider
      value={{ partners, setPartners, resultConteiner }}
    >
      {children}
    </partnersContext.Provider>
  );
};
