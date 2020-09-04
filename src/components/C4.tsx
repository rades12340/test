import React from "react";
import useData from "../utils/useData";
import Loading, { genQuery, IProps } from "../utils/utilFunctions";

function C4(props: IProps) {
  const refreshInterval_Secs = 42;
  const query = genQuery(props.timeRange, "c4", Math.random());
  const { data } = useData(refreshInterval_Secs, query);

  if (!data) {
    return <Loading />;
  }
  return <>A fox jumped {data}</>;
}

export default C4;
