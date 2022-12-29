import { CreatePeriodLabel } from "helpers/create-period-label";
import { FormEvent, useState } from "react";
import { addSub } from "services/subs-service";
import { SUB_PERIOD } from "utils/constants";
import "./admin.scss";

export const AdminPage = () => {
  const [name, setName] = useState("");
  const [plans, setPlans] = useState([
    {
      price: 1,
      period: SUB_PERIOD.MONTH,
    },
  ]);

  const onChangePrice = ({ value, index }: { value: number; index: number }) => {
    setPlans((prev) => {
      let prevCopy = [...prev];
      prevCopy[index].price = value;
      return prevCopy;
    });
  };
  const onChangePeriod = ({ value, index }: { value: SUB_PERIOD; index: number }) => {
    setPlans((prev) => {
      const prevCopy = [...prev];
      prevCopy[index].period = value;
      return prevCopy;
    });
  };

  const formSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    await addSub({ name, plan: plans });
  };

  return (
    <form onSubmit={formSubmit}>
      <h1>Add new application</h1>
      <div>
        <input
          type="text"
          name="sub-name"
          value={name}
          minLength={2}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {plans.map(({ price, period }, index) => (
        <div key={index}>
          <input
            type="number"
            min={1}
            step={0.01}
            value={price}
            onChange={(e) => onChangePrice({ value: Number(e.target.value), index })}
          />
          <select
            value={period}
            onChange={(e) =>
              onChangePeriod({ value: e.target.value as SUB_PERIOD, index })
            }
          >
            {Object.values(SUB_PERIOD).map((period) => (
              <option value={period} key={period}>
                {CreatePeriodLabel(period)}
              </option>
            ))}
          </select>
        </div>
      ))}
      {plans.length > 1 && (
        <button onClick={() => setPlans((prev) => prev.slice(0, prev.length - 1))}>
          -
        </button>
      )}
      {plans.length < 5 && (
        <button
          type="button"
          onClick={() =>
            setPlans((prev) => [
              ...prev,
              {
                price: 1,
                period: SUB_PERIOD.MONTH,
              },
            ])
          }
        >
          Add plan
        </button>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
