export const getQueryProps = (key, as) => ({ data }) => {
  if (data.loading) { return { loading: data.loading }; }
  if (data.error) {
    return { loading: false, error: data.error };
  }

  if (Array.isArray(key)) {
    const res = { loading: false };
    key.forEach((k) => {
      res[k] = data[k];
    });
    return {
      ...res,
      fetchMore: data.fetchMore,
    };
  }

  return {
    loading: false,
    [as || key]: data[key],
    fetchMore: data.fetchMore,
  };
};

export const getMutationProps = (key, as) => ({ mutate }) => ({
  [as || key]: variables => mutate({ variables }),
});

export const addToCache = (cache, newData, key, query) => {
  const cachedData = cache.readQuery({ query });
  cachedData[key].push(newData);
  cache.writeQuery({ query, data: newData });
};

export const updateCache = (cache, updatedData, key, query) => {
  const cachedData = cache.readQuery({ query });
  cache.writeQuery({
    query,
    data: Array.isArray(cachedData[key])
      ? cachedData[key].map(d => (d.id === updatedData.id ? updatedData : d))
      : { [key]: updatedData },
  });
};

export const removeFromCache = (cache, deletedData, key, query) => {
  const cachedData = cache.readQuery({ query });
  cache.writeQuery({
    query,
    data: {
      [key]: cachedData[key].filter(d => d.id !== deletedData.id),
    },
  });
};
