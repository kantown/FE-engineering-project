import { CreatePeriodPriceLabel } from "helpers/create-period-label";
import { DetailedSubscription } from "pages/add-sub";
import { FormEvent, useState } from "react";

export const SubDetails = ({ selectValue }: { selectValue: DetailedSubscription }) => {
  const [planSelectValue, setPlanSelectValue] = useState(selectValue.plan[0]._id);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();
    const selectedPlan = selectValue.plan.find(({ _id }) => _id === planSelectValue);
    if (!selectedPlan) {
      console.error("Invalid data");
      return;
    }
    console.log(selectValue.name, selectedPlan.period, selectedPlan.price, date);
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
