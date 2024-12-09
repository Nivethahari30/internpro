import { createContext } from "react";
import { useState } from "react";


// create context
 export const UserRegContext=createContext();

// create data save logic with function 
  export const UserRegProvider=({children})=>{
    // usestate for save the objects from the reg page
    const[UserContext,setUserContext]=useState(null);
    const[SaveUserPlan,setSaveUserPlan]=useState(null);
// save logic for userdata
    const SaveUserReg=(userList)=>{
        setUserContext(userList);
        console.log(UserContext)
        console.log("data saved successfully");
       

    };
    // logic for save the user clicked plan

    const savePlan=(Plan)=>{
        setSaveUserPlan(Plan);
        console.log(Plan,"user plan saved in context");

    }

    // save logic for combine the userlist object and plan into one object
   
        const UserFullData={
            ...UserContext,
            Plan:SaveUserPlan, 
        }
        

// console.log(CompleteData,"successfully saved as a object")
    
                        
    return(
        
        <UserRegContext.Provider value={{UserContext,SaveUserPlan,SaveUserReg,UserFullData,savePlan}}>
            {children}

</UserRegContext.Provider>
    )

 };


 


