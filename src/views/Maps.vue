<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="large">Maps</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Maps</ion-title>
        </ion-toolbar>
      </ion-header>
     <ion-item>
       <ion-label>Teste Mapa</ion-label>
     </ion-item>

      <ion-item>
       <ion-label>Latitude {{posicao.latitude}}</ion-label>
       <ion-label>Longitude</ion-label>
       <ion-label>Altitude</ion-label>
     </ion-item>

     <ion-fab vertical="bottom" horizontal="center" slot="fixed">
     <ion-fab-button @click="getCurrentPosition()">
     <ion-icon :icon="locate"></ion-icon>
     </ion-fab-button>
     </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";

import{maps} from "@/composables/maps";
import { locate } from "ionicons/icons";




export default {
  name: "Maps",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonFab,
  IonFabButton,
  IonIcon, },
  setup() {
    const { getCurrentPosition,posicao } = maps();
    return {
      locate,
      getCurrentPosition,
      posicao,
    };
  },
};
</script>