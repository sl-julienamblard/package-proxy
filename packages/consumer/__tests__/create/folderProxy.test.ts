/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly create folderProxyA proxy", () => {
  test("should have create folderProxyA folder", () => {
    expect(fs.existsSync(base + "folderProxyA")).toBe(true)
  })
  test("should have create package.json in folderProxyA folder", () => {
    expect(fs.existsSync(base + "folderProxyA/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "folderProxyA/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../lib/folderProxy/folderProxyA/index.js",
      module: "../esm/folderProxy/folderProxyA/index.js",
      name: "consumer/folderProxyA",
      private: true,
      types: "../lib/folderProxy/folderProxyA/index.d.ts",
    })
  })
})

describe("should have correctly create folderProxyB proxy", () => {
  test("should have create folderProxyB folder", () => {
    expect(fs.existsSync(base + "folderProxyB")).toBe(true)
  })
  test("should have create package.json in folderProxyB folder", () => {
    expect(fs.existsSync(base + "folderProxyB/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "folderProxyB/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../lib/folderProxy/folderProxyB/index.js",
      module: "../esm/folderProxy/folderProxyB/index.js",
      name: "consumer/folderProxyB",
      private: true,
      types: "../lib/folderProxy/folderProxyB/index.d.ts",
    })
  })
})
