import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("putPromotionsSettingsAutomaticallySuggestDefaultEndDate", () => {
    const params = idosell().putPromotionsSettings.automaticallySuggestDefaultEndDate("on").checkParams();
    expect(params).toEqual({"automaticallySuggestDefaultEndDate":"on"});
})