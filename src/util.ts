/**
 * Sample usage: replaceAll('embed/:token/dashcard/:dashcard_id/card/:card_id', {":token":"abcde", ":dashcardId":"23", ":cardId":"24"})
 * Camel case (e.g. dashcardId) will not work, you must use snake_case
 * Reference: https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
 * @param str
 * @param mapObj
 */
export const replaceAll = (str: string, mapObj: any) => {
  const re = new RegExp(Object.keys(mapObj).join("|"), "gi");

  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()];
  });
};
