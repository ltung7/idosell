import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("deletePackagesPackageId", () => {
    const params = idosell().deletePackages.packageId(242).checkParams();
    expect(params).toEqual({"packageId":242});
})