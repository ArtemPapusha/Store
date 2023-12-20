const endpoint = (method, route) => {
  return {
    endpoint: `${method} ${route}`,
    url: route,
    method,
  };
};

export default endpoint;