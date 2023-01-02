import { CreatePeriodLabel } from "helpers/create-period-label";
import getDateFromIso from "helpers/get-date-from-iso";
import { FormEvent, useState } from "react";
import { addSubToUser } from "services/user-service";
import { useUserStore } from "store/userStore";
import { SELECT_STYLES, SUB_PERIOD } from "utils/constants";
import Select from "react-select";
import { LabelInput } from "components/label-input";
import "./custom-sub.scss";

export const CustomSub = () => {
  const [name, setName] = useState("");
  const [plan, setPlan] = useState({
    price: 1,
    period: SUB_PERIOD.MONTH,
  });
  const [date, setDate] = useState(getDateFromIso(new Date().toISOString()));
  const { setUser } = useUserStore();
  const formSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { period, price } = plan;
    if (!name || !period || !price || !date) {
      console.error("Invalid data");
      return;
    }
    const res = await addSubToUser({ name, period, price, date });
    setUser({ ...res });
  };

  const options = Object.values(SUB_PERIOD).map((period) => ({
    label: CreatePeriodLabel(period),
    value: period,
  }));

  return (
    <form onSubmit={formSubmit} className="custom-sub">
      <LabelInput label="Name">
        <input
          className="custom-sub__input"
          type="text"
          placeholder="Name..."
          value={name}
          minLength={3}
          maxLength={20}
          onChange={(e) => setName(e.target.value)}
        />
      </LabelInput>
      <LabelInput label="Period">
        <Select
          styles={{ ...SELECT_STYLES }}
          options={options}
          defaultValue={options[0]}
          placeholder="Select..."
          classNamePrefix="add-sub__select"
          onChange={(state) =>
            setPlan((prev) => {
              const copy = { ...prev };
              copy.period = !!state ? state.value : SUB_PERIOD.MONTH;
              return copy;
            })
          }
        />
      </LabelInput>
      <LabelInput label="Price">
        <input
          className="custom-sub__input"
          type="number"
          min={1}
          step={0.01}
          value={plan.price}
          onChange={(e) =>
            setPlan((prev) => {
              const copy = { ...prev };
              copy.price = Number(e.target.value);
              return copy;
            })
          }
        />
      </LabelInput>
      <LabelInput label="Date">
        <input
          className="custom-sub__input custom-sub__input--icon"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </LabelInput>
      <button className="custom-sub__input custom-sub__input--button" type="submit">
        Submit
      </button>
    </form>
  );
};
