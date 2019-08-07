export const getQueryProps = (key, as) => ({ data }) => {
  if (data.loading) return { loading: data.loading }
  if (data.error) {
    return { loading: false, error: data.error }
  }

  if (Array.isArray(key)) {
    const res = { loading: false }
    key.forEach(k => {
      res[k] = data[k]
    })
    return {
      ...res,
      fetchMore: data.fetchMore,
    }
  }

  return {
    loading: false,
    [as || key]: data[key],
    fetchMore: data.fetchMore,
  }
}

export const getMutationProps = (key, as) => ({ mutate }) => ({
  [as || key]: variables => mutate({ variables }),
})
