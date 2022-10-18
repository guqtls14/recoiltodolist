import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    { id: 12323, text: "lalala", isComplete: false },
    { id: 123231, text: "lalala1", isComplete: false },
    { id: 123232, text: "lalala2", isComplete: true },
  ],
});
