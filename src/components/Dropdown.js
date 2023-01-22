import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (eveniment) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(eveniment.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((opt) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(opt)}
        key={opt.value}
      >
        {opt.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between item-center curosr-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
