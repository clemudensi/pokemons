export const splitString = <T = string> (url: string, split: string): string[] => {
  return url.split(split);
};