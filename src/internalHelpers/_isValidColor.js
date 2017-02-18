// @flow
export const isRgb = (color: string) : bool => /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(color)
export const isRgba = (color: string) : bool => /rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(\d{1})?.?(\d{1,2})\)/.test(color)
export const isHsl = (color: string) : bool => /hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)/.test(color)
export const isHsla = (color: string) : bool => /hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(\d{1})?.?(\d{1,2})\)/.test(color)
