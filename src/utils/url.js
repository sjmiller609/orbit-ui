export const getParams = (query) => {
  if (!query) {
    return {};
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      const [key, value] = param.split('=');
      const value2 = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      params[key] =
        value2.charAt(0) === '{' && value2.charAt(value2.length - 1) === '}'
          ? JSON.parse(value2)
          : value2;
      return params;
    }, {});
};
