import { CustomSub } from "components/add-sub/custom-sub";
import { SubDetails } from "components/add-sub/sub-details";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getSubs } from "services/subs-service";
import { SELECT_STYLES, SUB_PERIOD } from "utils/constants";
import Select from "react-select";
import "./add-sub.scss";

const customSub = {
  name: "Custom",
  plan: [
    {
      price: 1,
      period: SUB_PERIOD.MONTH,
      _id: "0",
    },
  ],
};

export interface DetailedSubscription {
  name: string;
  plan: {
    price: number;
    period: SUB_PERIOD;
    _id: string;
  }[];
}

export const AddSub = () => {
  const [subs, setSubs] = useState([customSub] as DetailedSubscription[]);
  const [selectValue, setSelectValue] = useState("0");
  const getSubByName = useCallback(
    (name: string) => {
      return subs.find((sub) => sub.name === name);
    },
    [subs]
  );

  useEffect(() => {
    const fetchSubs = async () => {
      const res = await getSubs();
      const fetchedSubs = res.map(({ name, plan }: DetailedSubscription) => ({
        name,
        plan,
      }));
      setSubs([customSub, ...fetchedSubs]);
    };
    fetchSubs();
  }, []);

  const selectedValue = useMemo(
    () => getSubByName(selectValue),
    [getSubByName, selectValue]
  );
  const options = subs.map(({ name }) => {
    return { label: name, value: name };
  });
  return (
    <div>
      <span className="add-sub__header">New subscription</span>
      <Select
        styles={{ ...SELECT_STYLES }}
        options={options}
        defaultValue={options[0]}
        placeholder="Select..."
        classNamePrefix="add-sub__select"
        value={options.find((item) => selectValue.includes(item.value))}
        onChange={(state) => setSelectValue(state ? state.value : options[0].value)}
      />
      {!selectedValue || selectedValue.name === "Custom" ? (
        <CustomSub />
      ) : (
        <SubDetails selectValue={selectedValue} />
      )}
    </div>
  );
};
