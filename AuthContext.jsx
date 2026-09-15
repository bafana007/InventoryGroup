import {createContext,useContext,useState} from 'react'
import * as Store from '../services/inventoryStore'
const C=createContext(null)
export function AuthProvider({children}){const [user,setUser]=useState(Store.currentUser());const signIn=(u,p)=>{const r=Store.login(u,p);if(r.user)setUser(r.user);return r};const signOut=()=>{Store.logout();setUser(null)};return <C.Provider value={{user,signIn,signOut,refresh:()=>setUser(Store.currentUser())}}>{children}</C.Provider>}
export const useAuth=()=>useContext(C)
