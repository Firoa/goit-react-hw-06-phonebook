import { Type } from './actionTypes';

export const contactFormReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ADDCONTACT:
      if(!(state.find((contact)=>contact.name === action.payload.name)))
      {        
        return [...state, action.payload];
      };
      return state;
    case Type.DELETECONTACT:
      const filtredContacts = state.filter(
        contact => contact.id !== action.payload,
      );
      return [...filtredContacts];
      case Type.WRITETOLOCALSTORE:
        localStorage.setItem("contacts",JSON.stringify(state))               
        return state;
        case Type.READFROMLOCALSTORE:
          return [...action.payload]
    default:
      return state;
  }
};

export const filterReducer = (state='',action) => {
  switch (action.type) {
    case Type.CHANGEFILTER:      
      return action.payload;  
    default:
     return state;
  }
}

