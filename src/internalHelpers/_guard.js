// @flow

export default function guard(
  lowerBoundary: number,
  upperBoundary: number,
  value: number,
): number {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value))
}
