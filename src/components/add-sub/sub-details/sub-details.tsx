import { CreatePeriodPriceLabel } from "helpers/create-period-label";
import getDateFromIso from "helpers/get-date-from-iso";
import { DetailedSubscription } from "pages/add-sub";
import { FormEvent, useState } from "react";
import { addSubToUser } from "services/user-service";
import { useUserStore } from "store/userStore";
import { SELECT_STYLES } from "utils/constants";
import Select from "react-select";
import "./sub-details.scss";

export const SubDetails = ({ selectValue }: { selectValue: DetailedSubscription }) => {
  const [planSelectValue, setPlanSelectValue] = useState(selectValue.plan[0]._id);
  const [date, setDate] = useState(getDateFromIso(new Date().toISOString()));
  const { setUser } = useUserStore();

  const formSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const selectedPlan = selectValue.plan.find(({ _id }) => _id === planSelectValue);
    if (!selectedPlan) {
      console.error("Invalid data");
      return;
    }
    const { name } = selectValue;
    const { period, price } = selectedPlan;
    if (!name || !period || !price || !date) {
      console.error("Invalid data");
      return;
    }
    const res = await addSubToUser({ name, period, price, date });
    setUser({ ...res });
  };

  const options = selectValue.plan.map(({ _id, price, period }) => ({
    label: CreatePeriodPriceLabel(price, period),
    value: _id,
  }));

  return (
    <form className="sub-details" onSubmit={formSubmit}>
      <input
        className="sub-details__input"
        type="text"
        value={selectValue.name}
        disabled
      />
      <Select
        styles={{ ...SELECT_STYLES }}
        options={options}
        defaultValue={options[0]}
        placeholder="Select..."
        classNamePrefix="add-sub__select"
        onChange={(state) => setPlanSelectValue(state?.value || options[0].value)}
      />
      <input
        className="sub-details__input sub-details__input--icon"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="sub-details__button" type="submit">
        Submit
      </button>
    </form>
  );
};
