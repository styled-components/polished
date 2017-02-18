// @flow
export const isRgb = (color: string) : bool => /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(color)
