import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSystemConfigPanelSettings", () => {
    const params = idosell().putSystemConfig.panelSettings({"mainStockSystem":"iai"}).checkParams();
    expect(params).toEqual({"panelSettings":{"mainStockSystem":"iai"}});
})