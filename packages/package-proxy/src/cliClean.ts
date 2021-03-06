/** @format */

import { cleanProxy } from "./cleanProxy"
import { loadConfigJSON, errorLog } from "./utils"

export const cliClean = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadConfigJSON(options.config)

  if (!Array.isArray(proxify) || proxify.length === 0) {
    errorLog('"proxify" is missing or is empty in config file')
    return
  }

  proxify.forEach(toProxify => {
    if (!toProxify.src) {
      errorLog('"proxify[x].src" is missing or is empty in config file')
      return
    }
    cleanProxy({ root, ...rest, ...toProxify })
  })
}
