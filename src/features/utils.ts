export const getIdFromString = (str: string): number => {
  return Number(str.slice(-5).replace(/[^0-9]/g, ''));
};
