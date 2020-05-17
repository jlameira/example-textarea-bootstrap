import produce from "immer";

export default function message(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return produce(state, (draft) => {
        const date = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(new Date());

        const newComment = {
          id: draft.length + 1,
          text: action.payload,
          user: `Jonathan ${draft.length + 1}`,
          date:date ,
        };
        draft.unshift(newComment);
      });
    case "LIST_MESSAGE":
      return action.payload;
    default:
      return state;
  }
}
