import { SUB_PERIOD } from "utils/constants";

export const CreatePeriodLabel = (period: SUB_PERIOD) => {
  switch (period) {
    case SUB_PERIOD.MONTH:
      return "Month";
    case SUB_PERIOD.THREE_MONTHS:
      return "3 Months";
    case SUB_PERIOD.SIX_MONTHS:
      return "6 Months";
    case SUB_PERIOD.TWO_WEEKS:
      return "2 Weeks";
    case SUB_PERIOD.WEEK:
      return "Week";
    case SUB_PERIOD.YEAR:
      return "Year";
  }
};

export const CreatePeriodPriceLabel = (price: number, period: SUB_PERIOD) => {
  const periodLabel = CreatePeriodLabel(period);
  return `$${price} / ${periodLabel}`;
};
