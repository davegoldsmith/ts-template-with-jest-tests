export const pigIt = (str: string): string => {
  let result = "";
  if (str.length > 0) {
    const pigWords = str
      .split(" ")
      .map((value) => value.match("[a-z0-9]+") ? value.substring(1) + value.charAt(0) + "ay" : value);
    result = pigWords.join(" ");
  }
  return result;
};
