export const splitString = <T = string> (url: string, split: string): string[] => {
  return url.split(split);
};

export const sanitizeString = (str: string): string => {
  return str.replace(/[^a-z0-9\s]/gi, '');
};
