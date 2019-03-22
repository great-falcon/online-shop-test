const url = "https://jsonplaceholder.typicode.com";

function resolveAfterFewSeconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 100);
  });
}

export const makeRequest = async (path, method = "GET", body) => {
  let request;

  switch (method) {
    case "GET":
      request = await fetch(`${url}${path}`);
      break;
    case "POST":
      request = await fetch(`${url}${path}`, {
        method,
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      break;
    default:
      break;
  }

  if (request.ok) {
    const response = await request.json();
    return await resolveAfterFewSeconds(response);
  } else {
    console.log(request);

    throw new Error(request.status);
  }
};
