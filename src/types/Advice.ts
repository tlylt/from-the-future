import { Moment } from "moment";

export type Advice = {
    date: string | Moment,
    note: string,
    id: string,
    owner: string,
};
  