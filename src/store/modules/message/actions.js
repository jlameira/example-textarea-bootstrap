import api from '../../../services/api';
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(api);

mock.onGet("/messages").reply(200, {
  messages: [
     { id: 1, text: "my text in here", user: "Jonathan 0", date: "20/20/2020" },
     { id: 2, text: "my text in here 2", user: "Jonathan 1", date: "20/20/2020" },
     { id: 3, text: "my text in here 3", user: "Jonathan 2", date: "20/20/2020" },
   ],
 });


export const actionsMessage = {
  listMessage: () => async (dispatch) => {
    const onSuccess = (success) => {
      debugger
      dispatch({ type: 'LIST_MESSAGE', payload: success.data.messages });
      return success;
    }
    const onError = (error) => {
      dispatch({ type: 'ERROR_GET', error });
      return error;
    }
    try {
      const success = await api.get('/messages');
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }}

  // {

  //   const messages = await axios.get("/users");
  //   debugger
    
  //   return {type:'LIST_MESSAGE', payload:messages.messages}
  // }
