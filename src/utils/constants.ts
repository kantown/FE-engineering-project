export enum PATHS {
  HOME = "/home",
  SUBSCRIPTIONS = "/subscriptions",
  PROFILE = "/profile",
  EDIT_PROFILE = "/edit-profile",
  ADMIN = "/admin",
  ADD_SUBSCRIPTION = "/add-subscription",
}

export enum SUB_PERIOD {
  WEEK = "week",
  TWO_WEEKS = "twoWeeks",
  MONTH = "month",
  THREE_MONTHS = "threeMonths",
  SIX_MONTHS = "sixMonths",
  YEAR = "year",
}

export interface Subscription {
  name: string;
  plan: {
    price: number;
    period: SUB_PERIOD;
  }[];
}

export const SELECT_STYLES = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: "#b4c9eb",
    height: "60px",
    paddingLeft: "20px",
    borderRadius: "15px",
    border: "1px solid #2c5fae",
    fontSize: "1.3rem",
  }),
  indicatorSeparator: (baseStyles: any) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles: any) => ({
    ...baseStyles,
    color: "#000000",
  }),
};
