import idosell from "./dist/index.js";

const req = idosell('https://monklights.com', 'YXBwbGljYXRpb24xOlNGWG5OOWtoeU83QmpzdHBZL2RENDVYZzdBOEpvaUQ1OGhTaE5qTVAwSzQyRHdpanlEdW9OMy9PZjJvRE5iREY=')
const res = await req.listOrders.dates('2023-01-01', '2023-01-18')
console.log(res);