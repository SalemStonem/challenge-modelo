
export const useSendFetch = (url) => {

  const sendingData = async (data) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    const resp = await response.json();
    // console.log('resp: ', resp);

  };
  // console.log('state: ', stateData);
  return sendingData;
};
