/**
* @param {{ headers: Object }} response
* @returns { Number }
*/
const getAmountPage = (response) => {
  const header = response?.headers;

  const link = header?.get("link");

  if (!link) {
    return 0;
  }

  return parseInt(String(link).split(",")[2].match(/page=(\d+)/)[1]);
}

export default getAmountPage;

