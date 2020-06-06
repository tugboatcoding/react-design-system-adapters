export const omitNil = (obj) => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (typeof v === 'undefined') {
      return acc;
    }
    return {
      ...acc,
      [k]: v
    }
  }, {});
};
