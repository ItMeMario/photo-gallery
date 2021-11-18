<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-item>
     <ion-label>Nome</ion-label>
     <ion-input v-model="user.nome"></ion-input>
    </ion-item>
     <ion-item>
     <ion-label>Email</ion-label>
     <ion-input v-model="user.email"></ion-input>
     </ion-item>
      <ion-item>
     <ion-label>Data de Nascimento</ion-label>
     <ion-input v-model="user.dataDeNascimento"></ion-input>
      </ion-item>
    <ion-button shape="round" @click="save()">Salvar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import{defineComponent} from "vue";

import {User, UserProfile} from"@/composables/userProfile";
export default  defineComponent({
  name: 'Profile',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  methods:{
    save(){
      console.log("botão clicado");
      console.log(this.user);
      this.saveProfile(this.user);
    },
  
  },
  setup(){
    const {user, saveProfile} = UserProfile();
    return{
      user,
      saveProfile,
    }
  },

});
</script>