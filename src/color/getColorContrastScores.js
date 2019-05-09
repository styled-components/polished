// @flow
import getColorContrast from './getColorContrast'

import type { ContrastScores } from '../types/color'

/**
 * Returns the contrast scores between two colors based on the
 * [contrast scores recommended by W3](https://www.w3.org/TR/WCAG20/#visual-audio-contrast).
 *
 * @example
 * const scores = getColorContrastScores('#444', '#fff');
 */
export default function getColorContrastScores(
  color1: string,
  color2: string,
): ContrastScores {
  const contrastRatio = getColorContrast(color1, color2)
  return {
    AA: contrastRatio >= 4.5,
    AALarge: contrastRatio >= 3,
    AAA: contrastRatio >= 7,
    AAALarge: contrastRatio >= 4.5,
  }
}
