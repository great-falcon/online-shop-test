const makeRequest = (instance, authRefreshToken) => async (
  method,
  url,
  ...params
) => {
  const token = getToken();
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${
      token.accessToken
    }`;
  }
  try {
    return await instance[method](url, ...params);
  } catch (error) {
    if (error.response && error.response.data.message === "jwt expired") {
      switch (error.response.status) {
        case 400: {
          if (token) {
            try {
              const refreshToken = token.refreshToken;
              removeToken();
              const tokens = await authRefreshToken(refreshToken);
              setToken(tokens.data);
              instance.defaults.headers.common.Authorization = `Bearer ${
                tokens.data.accessToken
              }`;
              return await instance[method](url, ...params, true);
            } catch (e) {
              // window.location.replace(urls.login);
              window.location = urls.login;
              return Promise.reject(error);
            }
          } else {
            return (window.location = urls.login);
          }
        }
        default: return
      }
    }
    return Promise.reject(error);
  }
};
const request = (method, url) => (...params) =>
  makeRequest(mainInstance, auth.refreshToken)(method, url, ...params);

export const getToken = () => JSON.parse(localStorage.getItem("authData"));
