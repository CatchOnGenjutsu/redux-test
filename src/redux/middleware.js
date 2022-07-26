import { COMMENT_CREATE } from "./types";
import { errorOn } from "./actions";

const badWords = ["козел", "осел", "нерг", "нигер", "натурал"]

export function spamFilter({dispatch}) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        console.log("spamFilter>>", action.data.text)
        const hasBadWords = badWords.some(res => action.data.text.includes(res));
        if (hasBadWords){
          return dispatch(errorOn("Шо ты тут пишешь пидор!?", 2000))
        }
      }
      return next(action);
    }
  }
}