import { CreatePeriodLabel } from "helpers/create-period-label";
import getDateFromIso from "helpers/get-date-from-iso";
import { FormEvent, useState } from "react";
import { addSubToUser } from "services/user-service";
import { useUserStore } from "store/userStore";
import { SUB_PERIOD } from "utils/constants";

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

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        value={name}
        minLength={3}
        maxLength={20}
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
