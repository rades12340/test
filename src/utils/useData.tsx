import React from "react";
import { urlUsed, METRIC_ENDPOINT } from "./utilFunctions";

function useData(refreshInterval_Secs: number, query: any) {
  const [data, setData] = React.useState<undefined | object>(undefined);
  React.useEffect(() => {
    fetch(urlUsed + METRIC_ENDPOINT, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: query,
    })
      .then((x) => console.log(x.json()))
      //   .then((data) => setData(data))
      .catch((err) => console.log(err));
    return () => {
      setData({});
    };
  }, [refreshInterval_Secs]);

  return {
    data,
  };
}

export default useData;
