import { CreatePeriodLabel } from "helpers/create-period-label";
import { FormEvent, useState } from "react";
import Select from "react-select";
import { addSub } from "services/subs-service";
import { SELECT_STYLES, SUB_PERIOD } from "utils/constants";
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

  const options = Object.values(SUB_PERIOD).map((period) => ({
    label: CreatePeriodLabel(period),
    value: period,
  }));

  return (
    <form className="admin-page" onSubmit={formSubmit}>
      <h1>Add new application</h1>
      <div>
        <input
          type="text"
          className="admin-page__input"
          name="sub-name"
          placeholder="Name..."
          value={name}
          minLength={2}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {plans.map(({ price }, index) => (
        <div className="admin-page__container" key={index}>
          <input
            className="admin-page__input"
            type="number"
            min={1}
            step={0.01}
            value={price}
            onChange={(e) => onChangePrice({ value: Number(e.target.value), index })}
          />
          <Select
            styles={{ ...SELECT_STYLES }}
            options={options}
            defaultValue={options[0]}
            placeholder="Select..."
            classNamePrefix="add-sub__select"
            onChange={(state) =>
              onChangePeriod({ value: state?.value as SUB_PERIOD, index })
            }
          />
        </div>
      ))}
      {plans.length > 1 && (
        <button
          className="admin-page__button"
          onClick={() => setPlans((prev) => prev.slice(0, prev.length - 1))}
        >
          -
        </button>
      )}
      {plans.length < 5 && (
        <button
          type="button"
          className="admin-page__button"
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
      <button className="admin-page__button" type="submit">
        Submit
      </button>
    </form>
  );
};
