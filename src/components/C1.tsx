import * as React from "react";
import useData from "../utils/useData";
import Loading, { genQuery, IProps } from "../utils/utilFunctions";

function C1(props: IProps) {
  const refreshInterval_Secs = 60;
  const query = genQuery(props.timeRange, "c1", Math.random());

  const { data } = useData(refreshInterval_Secs, query);

  if (!data) {
    return <Loading />;
  }

  return <h1>Hi {data}</h1>;
}

export default C1;
