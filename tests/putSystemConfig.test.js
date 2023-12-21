import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putSystemConfigPanelSettings", () => {
    const params = idosell().putSystemConfig.panelSettings({"mainStockSystem":"iai"}).getParams();
    expect(params).toEqual({"panelSettings":{"mainStockSystem":"iai"}});
})