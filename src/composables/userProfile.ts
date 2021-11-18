import {onMounted, watch } from "vue";
import { Storage } from "@capacitor/storage";




export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export interface User{
  nome: string;
  email: string;
  dataDeNascimento: string;
}

export function UserProfile(){
    const USER_STORAGE ="profile";
    let user ={
        nome:"",
        email:"",
        dataDeNascimento:"",
    }

    // o cache monitora aquilo q será modificado na função UserProfile
    const cacheUser = () => {
        Storage.set({
          key: USER_STORAGE,
          value: JSON.stringify(user)
        });
      };

      //passa o usuario User e salva ele em forma de string
      const saveProfile = async (user: User): Promise<User> => {
          Storage.set({
              key: USER_STORAGE,
              value: JSON.stringify(user),
          });
          return user;
      }

    const loadSaved = async() =>{
        const userInStorage = await Storage.get({key: USER_STORAGE});
        user = userInStorage.value
        ? JSON.parse(userInStorage.value)
        :{
            nome:"",
            email:"",
            dataDeNascimento:"",
        };

     
    };

    onMounted(loadSaved);
    watch(user,cacheUser);
    return{
        user,
        saveProfile,
    };
}

 
