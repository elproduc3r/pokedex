import { CharacterType } from "./Search/search.slice";

const LS_APP_KEY = 'pokemon';

export interface LocalStorageDataType {
  history?: CharacterType[];
};

export const getLSHistory = (): CharacterType[] => {
  let ls = localStorage.getItem(LS_APP_KEY);
  const lsData = ls ? JSON.parse(ls) : {};
  const initialHistory = lsData?.history || [];
  return initialHistory;
};

export const updateLSHistory = (character: CharacterType) => {
  const ls = localStorage.getItem(LS_APP_KEY);
  let lsData: LocalStorageDataType = ls ? JSON.parse(ls) : {};

  if(lsData?.history) {
    lsData.history.push(character);
  } else {
    lsData['history'] = [character];
  }
  localStorage.setItem(LS_APP_KEY, JSON.stringify(lsData));
}