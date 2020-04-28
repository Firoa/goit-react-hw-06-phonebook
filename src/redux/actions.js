import  {Type}  from "./actionTypes";

export const addContact = (data)=>({
    type: Type.ADDCONTACT,
    payload: data,
})
export const deleteContact = (data)=>({
    type: Type.DELETECONTACT,
    payload: data,
})