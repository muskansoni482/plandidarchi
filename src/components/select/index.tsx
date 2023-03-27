import React, { useState } from "react";
import Select from "react-select";

function SelectMultiple({placeholder}:any) {
  const data = [
    {
      value: 1,
      label: "cerulean",
    },
    {
      value: 2,
      label: "fuchsia rose",
    },
    {
      value: 3,
      label: "true red",
    },
    {
      value: 4,
      label: "aqua sky",
    },
    {
      value: 5,
      label: "tigerlily",
    },
    {
      value: 6,
      label: "blue turquoise",
    },
  ];

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([] as any);

  // handle onChange event of the dropdown
  const handleChange = (e: any) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  return (
    <div className="App">
      <Select
        className="dropdown"
        placeholder={placeholder}
        value={data.filter((obj) => selectedValue.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />

      {selectedValue && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <div>
            {Object.values(data).map(({ value, label }) => {
              if (selectedValue.includes(value)) return <span>{label} </span>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectMultiple;
