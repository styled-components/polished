// @flow
export const isRgb = (color: string) : bool => /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(color)
export const isRgba = (color: string) : bool => /rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(\d{1})?.?(\d{1,2})\)/.test(color)
