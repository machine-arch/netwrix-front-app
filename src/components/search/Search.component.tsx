import Dropdown from "../dropdown/Dropdown.component";
import "./search.stylesheet.scss";
import { useState, useEffect, useContext } from "react";
import { partnersContext } from "../../context/partners.context";
import AppHelper from "../../helpers/application.helper";
import { loaderContext } from "../../context/loader.context";

const Search = () => {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const helper = new AppHelper();
  const { setPartners, resultConteiner } = useContext<any>(partnersContext);
  const { setIsLoading, loaderTimeout } = useContext<any>(loaderContext);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [showCountryOptions, setShowCountryOptions] = useState(false);
  const [showStateOptions, setShowStateOptions] = useState(false);
  const [selectTypeedOption, setSelectTypeedOption] = useState("");
  const [selectCountryOption, setSelectCountryOption] = useState("");
  const [selectStateOption, setSelectStateOption] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    const getCountry = helper.getCountryList();
    const getState = helper.getStateList();
    Promise.all([getCountry, getState]).then((res) => {
      setCountry(res[0]);
      setState(res[1]);
    });
  }, []);

  const TYPE_OPTIONS = [
    { id: "", value: "MSP Partner" },
    { id: "", value: "Preferred Partner" },
    { id: "", value: "Premium Partner" },
    { id: "", value: "Elite Partner" },
    { id: "", value: "Distributor" },
  ];

  const filterPartnersByselects = async (data: any) => {
    setIsLoading(true);
    await helper.getPartnersByParams(data).then((res) => {
      setPartners(res);
    });
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({
        top: resultConteiner?.offsetTop,
        behavior: "smooth",
      });
    }, loaderTimeout);
  };

  const getPartnersByEnter = async (e: any) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      const searchedPartners = await helper.searchPartnerLocators({
        searchValue,
      });
      Promise.all([searchedPartners])
        .then((res) => {
          setPartners(res[0]);
        })
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
            window.scrollTo({
              top: resultConteiner?.offsetTop,
              behavior: "smooth",
            });
          }, loaderTimeout);
        });
    }
  };

  const getPartnersBySearchBtn = async () => {
    setIsLoading(true);
    const searchedPartners = await helper.searchPartnerLocators({
      searchValue,
    });
    Promise.all([searchedPartners])
      .then((res) => {
        setPartners(res[0]);
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo({
            top: resultConteiner?.offsetTop,
            behavior: "smooth",
          });
        }, loaderTimeout);
      });
  };

  const toggleOptions = (e: any) => {
    switch (e.currentTarget.getAttribute("datatype")) {
      case "Type":
        setShowTypeOptions(!showTypeOptions);
        setShowCountryOptions(false);
        setShowStateOptions(false);
        break;
      case "Country":
        setShowCountryOptions(!showCountryOptions);
        setShowTypeOptions(false);
        setShowStateOptions(false);
        break;
      case "State":
        setShowStateOptions(!showStateOptions);
        setShowTypeOptions(false);
        setShowCountryOptions(false);
        break;
      default:
        return;
    }
  };

  const clearForm = async () => {
    setIsLoading(true);
    setSelectTypeedOption("");
    setSelectCountryOption("");
    setSelectStateOption("");
    setShowClearButton(false);
    await helper.getPartnerLocators().then((res) => {
      setPartners(res);
    });
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, loaderTimeout);
  };

  return (
    <div className="netwrix_search">
      <div className="netwrix_search_input_conteiner">
        <input
          className="netwrix_search_input"
          type="text"
          placeholder="Search by company name or adress..."
          onKeyDown={getPartnersByEnter}
          onChange={(e) => {
            setSearchValue(e.target.value.trim());
          }}
        />
        <img
          className="netwrix_search_ico"
          src="assets/ico/search-ico.svg"
          alt="search_icon"
          onClick={getPartnersBySearchBtn}
        />
      </div>
      <div className="netwrix_search_selects">
        <Dropdown
          inputClass="dropdown-inpt"
          Pleacheholder="Type"
          id={Math.random() + "Type" + Date.now().toString()}
          options={TYPE_OPTIONS}
          onChange={filterPartnersByselects}
          showOptions={showTypeOptions}
          setShowOptions={setShowTypeOptions}
          toggleOptions={toggleOptions}
          name="Type"
          selectedOption={selectTypeedOption}
          setSelectedOption={setSelectTypeedOption}
          setShowClearButton={setShowClearButton}
        />
        <div className="netwrix_search_selects_seperator">
          <Dropdown
            inputClass="dropdown-inpt border-radius-left"
            Pleacheholder="Country"
            id={Math.random() + "Country" + Date.now().toString()}
            options={country}
            onChange={filterPartnersByselects}
            showOptions={showCountryOptions}
            setShowOptions={setShowCountryOptions}
            toggleOptions={toggleOptions}
            name="Country"
            selectedOption={selectCountryOption}
            setSelectedOption={setSelectCountryOption}
            setShowClearButton={setShowClearButton}
          />
          <Dropdown
            inputClass="dropdown-inpt border-radius-right"
            Pleacheholder="State"
            id={Math.random() + "State" + Date.now().toString()}
            options={state}
            onChange={filterPartnersByselects}
            showOptions={showStateOptions}
            setShowOptions={setShowStateOptions}
            toggleOptions={toggleOptions}
            name="State"
            selectedOption={selectStateOption}
            setSelectedOption={setSelectStateOption}
            setShowClearButton={setShowClearButton}
          />
        </div>
        {showClearButton && (
          <div className="clear_form" onClick={clearForm}>
            <img src="assets/ico/close.svg" alt="clear form" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
