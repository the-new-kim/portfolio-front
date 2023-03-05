import { atom } from "recoil";

export const bgColorState = atom<string>({
  key: "bgColorState",
  default: "white",
});

export interface IUpDownButtonState {
  showingUp: boolean;
  showingDown: boolean;
}

export const upDownButotnState = atom<IUpDownButtonState>({
  key: "upDownButotnState",
  default: {
    showingUp: false,
    showingDown: false,
  },
});

export const pageState = atom({
  key: "pageState",
  default: {
    currentPage: 0,
    total: 0,
  },
});

export const slideInViewState = atom({
  key: "slideInViewState",
  default: false,
});
