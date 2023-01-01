import { CreatePeriodPriceLabel } from "helpers/create-period-label";
import getDateFromIso from "helpers/get-date-from-iso";
import { DetailedSubscription } from "pages/add-sub";
import { FormEvent, useState } from "react";
import { addSubToUser } from "services/user-service";
import { useUserStore } from "store/userStore";
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

  return (
    <form onSubmit={formSubmit}>
      <input type="text" value={selectValue.name} disabled />
      <select
        value={planSelectValue}
        onChange={(e) => setPlanSelectValue(e.target.value)}
      >
        {selectValue.plan.map(({ _id, price, period }) => (
          <option value={_id} key={_id}>
            {CreatePeriodPriceLabel(price, period)}
          </option>
        ))}
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
