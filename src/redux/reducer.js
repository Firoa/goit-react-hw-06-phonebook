import  {Type}  from "./actionTypes";




const contactFormReducer = (state=[],action) =>{
  
 switch (action.type) {
     case Type.ADDCONTACT:      
          return [...state,action.payload];
   
        case Type.DELETECONTACT:
           const filtredContacts =  state.filter((contact)=>contact.id !== action.payload)
            return [...filtredContacts];
     default:
         return state;
   
 }
}

export default contactFormReducer;