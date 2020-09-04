import * as React from "react";
import useData from "../utils/useData";
import Loading, { genQuery, IProps } from "../utils/utilFunctions";

export default function C2(props: IProps) {
  const refreshInterval_Secs = 10;
  const query = genQuery(props.timeRange, "c2", Math.random());
  const { data } = useData(refreshInterval_Secs, query);
  if (!data) {
    return <Loading />;
  }
  return <h1>Hello there {data}</h1>;
}
