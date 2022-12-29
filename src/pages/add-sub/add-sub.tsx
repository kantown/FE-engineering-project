import { CustomSub } from "components/add-sub/custom-sub";
import { SubDetails } from "components/add-sub/sub-details";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getSubs } from "services/subs-service";
import { SUB_PERIOD } from "utils/constants";

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

  return (
    <div>
      <h1>Add subscription</h1>
      <select
        name="subscriptions"
        id="subscription"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {subs.map(({ name }, index) => (
          <option value={name} key={index}>
            {name}
          </option>
        ))}
      </select>
      {!selectedValue || selectedValue.name === "Custom" ? (
        <CustomSub />
      ) : (
        <SubDetails selectValue={selectedValue} />
      )}
    </div>
  );
};
