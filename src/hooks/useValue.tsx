import React, { useMemo } from "react";

export const useValue = (item: any, setter: any) => {
  const memo = useMemo(
    () => ({
      item,
      setter,
    }),
    [item]
  );
  return memo;
};
