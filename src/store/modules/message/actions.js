export const actionsMessage = {
  listMessage: () =>{
    const array = [
      { id: 1, text: "my text in here", user: "Jonathan 0", date: "20/20/2020" },
      { id: 2, text: "my text in here 2", user: "Jonathan 1", date: "20/20/2020" },
      { id: 3, text: "my text in here 3", user: "Jonathan 2", date: "20/20/2020" },
    ];
    return{type:'LIST_MESSAGE', payload:array}
  }
}
