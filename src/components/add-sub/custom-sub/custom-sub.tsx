import { CreatePeriodLabel } from "helpers/create-period-label";
import { FormEvent, useState } from "react";
import { SUB_PERIOD } from "utils/constants";

export const CustomSub = () => {
  const [name, setName] = useState("");
  const [plan, setPlan] = useState({
    price: 1,
    period: SUB_PERIOD.MONTH,
  });
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(name, plan.period, plan.price, date);
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        value={name}
        minLength={3}
        maxLength={15}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        value={plan.period}
        onChange={(e) =>
          setPlan((prev) => {
            const copy = { ...prev };
            copy.period = e.target.value as SUB_PERIOD;
            return copy;
          })
        }
      >
        {Object.values(SUB_PERIOD).map((period) => (
          <option value={period} key={period}>
            {CreatePeriodLabel(period)}
          </option>
        ))}
      </select>
      <input
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
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
