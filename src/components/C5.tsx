import * as React from "react";
import useData from "../utils/useData";
import Loading, { genQuery, IProps } from "../utils/utilFunctions";

export default function C5(props: IProps) {
  const refreshInterval_Secs = 30;
  const query = genQuery(props.timeRange, "c5", Math.random());
  const { data } = useData(refreshInterval_Secs, query);

  if (!data) {
    return <Loading />;
  }
  return <>{data} is king</>;
}
