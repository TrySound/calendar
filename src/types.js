// @flow

export type Year = {
  number: number,
  disabled: boolean
};

export type Month = {
  number: number,
  year: number,
  disabled: boolean
};

export type Day = {
  number: number,
  dayOfWeek: number,
  month: number,
  year: number,
  disabled: boolean
};

export type Constraints = {
  min?: Date,
  max?: Date,
  disabled?: Date[],
  available?: Date[]
};

export type Selection = {
  name: string,
  days: Date[]
};
