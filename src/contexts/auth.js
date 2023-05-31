import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
  
    useEffect(()=> {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("user_db");

    
        if(userToken && userStorage){
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if (hasUser) setUser(hasUser[0]);
        }
    
    },[])
const signin = (email , password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db"))
    const hasUser = userStorage?.filter((user) => user.email === email);

    if(hasUser?.length){
        if(hasUser[0].email === email && hasUser[0].password === password){
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({email, token}));
         setUser({email, password});
         return;
    }else{
        return "Email ou Senha incorreto"
    }
}else{
        return "usuario não cadastrado"
    }
}

const signup = (email,password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db")) 

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length){
        return "Já tem uma conta com esse E-mail";
    }
    let newUser;
    if(userStorage){
        newUser = [...userStorage,{email,password}];
    }else{
        newUser = [{email,password}];
    }
    localStorage.setItem("user_db", JSON.stringify(newUser));

    return;
    };
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };
    async function postJSON(data) {
        try {
          const response = await fetch("https://localhost:7146/swagger/index.html", {
            method: "GET",
            mode: "no-cors",
            // credentials: "include",
            // headers: {
            //   "Content-Type": "application/json",
            // },
            // body: JSON.stringify(data),
          });
      
          const result = await response.text();
          console.log("Sucesso:", result);
        } catch (error) {
          console.error("Erro:", error);
        }
      }
      
      const data = { int: "", Email: "", Senha: "" };
      postJSON(data);
    
      

    return <AuthContext.Provider
    value={{user,signed: !!user,signin,signup,signout}}
    >
        {children}
        </AuthContext.Provider>
};
