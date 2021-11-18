<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/Profile">
           <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="images" />
          <ion-label>Photos</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Maps" href="/tabs/Maps">
          <ion-icon :icon="locate" />
          <ion-label>Maps</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {images, square, triangle, person,locate } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
    images, 
      square, 
      triangle,
      person,
      locate
    }
  }
}
</script>