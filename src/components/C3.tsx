import * as React from "react";
import useData from "../utils/useData";
import Loading, { genQuery, IProps } from "../utils/utilFunctions";

export default function C3(props: IProps) {
  const refreshInterval_Secs = 15;
  const query = genQuery(props.timeRange, "c3", Math.random());
  const { data } = useData(refreshInterval_Secs, query);
  if (!data) {
    return <Loading />;
  }
  return <>Charlie {data} Tango</>;
}
