/** @format */

import { filterTruthy } from "../filters"

export const buildRoot = (path: string): string =>
  path
    .split("/")
    .filter(v => v != ".")
    .filter(filterTruthy)
    .map(() => "../")
    .join("")
