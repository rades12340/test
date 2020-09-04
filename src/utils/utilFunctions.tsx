import * as React from "react";
const DEV_SVR = "https://dev.dummy-svr.com";
const PROD_SVR = "https://prod.dummy-svr.com";
export const METRIC_ENDPOINT = "/metrics";

export const urlUsed =
  process.env.NODE_ENV === "production" ? PROD_SVR : DEV_SVR;

export function genQuery(
  timeRange: string,
  componentName: string,
  seed: number
) {
  return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${
    seed % 7 == 0 ? "true" : "false"
  }`;
}

export default function Loading() {
  return <h2>Loading </h2>;
}

export interface IProps {
  timeRange: string;
}
