import React, { FC, useState, useEffect, useContext } from "react";
import "./dropdown.stylesheet.scss";
import { DropdownInterface } from "../../interfaces/Dropdown.interface";
import { dropdownsContext } from "../../context/dropdowns.context";

const Dropdown: FC<DropdownInterface> = (props) => {
  const [options, setOptions] = useState<any>([]);
  const { activeSelects, setActiveSelects } = useContext<any>(dropdownsContext);

  useEffect(() => {
    document.addEventListener("click", hendleDocumentClick);
    setOptions(props?.options);
    return () => {
      document.removeEventListener("click", hendleDocumentClick);
    };
  }, [props?.options]);

  const handleOptionClick = (
    value: string,
    selectName: string | any,
    id: string | undefined
  ) => {
    props?.setSelectedOption(value);
    props?.setShowOptions(false);
    props?.setShowClearButton(true);
    switch (selectName) {
      case "Type":
        props?.onChange({ ...activeSelects, [selectName]: value });
        setActiveSelects({ ...activeSelects, [selectName]: value });
        break;
      case "Country":
        props?.onChange({ ...activeSelects, [selectName]: id });
        setActiveSelects({ ...activeSelects, [selectName]: id });
        break;
      case "State":
        props?.onChange({ ...activeSelects, [selectName]: id });
        setActiveSelects({ ...activeSelects, [selectName]: id });
    }
  };

  const hendleDocumentClick = (e: any) => {
    if (!e.target.closest(".dropdown")) {
      props?.setShowOptions(false);
    }
  };

  const filterOptions = (e: any) => {
    const filterValue = e.target?.value?.toLowerCase();
    if (filterValue.length > 0) {
      const filteredOptions = props?.options?.filter(
        (option: any) =>
          option?.value?.toLowerCase().includes(filterValue) ||
          option?.name?.toLowerCase().includes(filterValue)
      );
      setOptions(filteredOptions);
    } else {
      setOptions(props?.options);
    }
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown_opener_conteiner"
        datatype={props.name}
        onClick={props.toggleOptions}
      >
        <input
          className={props.inputClass}
          placeholder={props.Pleacheholder}
          type="text"
          value={props?.selectedOption}
          readOnly
        />
        <img src="assets/ico/deop_down.svg" alt="drop_down_ico" />
      </div>
      {props.showOptions && (
        <ul className="dropdown_oprions_conteiner">
          <div className="dropdown_filter_conteiner">
            <input
              type="text"
              className="dropdown_filter"
              onKeyUp={filterOptions}
            />
          </div>
          <div className="option_conteiner">
            {options?.map((option: any, index: any) => (
              <li
                className="dropdown_option"
                key={index}
                onClick={() =>
                  handleOptionClick(
                    option.value || option.name,
                    props.name,
                    option.short_name || option.short_name
                  )
                }
              >
                {option.value || option.name}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
