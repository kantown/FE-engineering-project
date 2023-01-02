import { MenuIcon } from "assets/menu-icon";
import { CommonInputWrapper } from "components/common-input-wrapper";
import { CreatePeriodLabel } from "helpers/create-period-label";
import getDateFromIso from "helpers/get-date-from-iso";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";
import { PATHS } from "utils/constants";
import "./subs.scss";

export const SubsPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const [search, setSearch] = useState("");

  return (
    <div>
      <CommonInputWrapper className="subs__search-bar">
        <input
          type="text"
          className="subs__search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="subs__search-button"
          onClick={() => navigate(PATHS.ADD_SUBSCRIPTION)}
        >
          +
        </button>
      </CommonInputWrapper>
      {!!user.subs &&
        user.subs.map(({ name, payment, period, price }) => {
          console.log(payment);
          return name.toLowerCase().includes(search.toLowerCase()) ? (
            <div className="subs__sub-label">
              <div className="subs__sub-name">{name}</div>
              <div className="subs__sub-date">{getDateFromIso(payment)}</div>
              <div className="subs__sub-price">${price}</div>
              <div className="subs__sub-period">{CreatePeriodLabel(period)}</div>
              <MenuIcon className="subs__sub-menu" />
            </div>
          ) : (
            <></>
          );
        })}
    </div>
  );
};
