import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"shopsuahang","appId":"1:736510378634:web:f8efef4b9ac4fe4e412373","storageBucket":"shopsuahang.appspot.com","apiKey":"AIzaSyDEpGArYmXLp7clepZybwsVlD0yJGFEAS0","authDomain":"shopsuahang.firebaseapp.com","messagingSenderId":"736510378634","measurementId":"G-T5GX9ZWYFQ"})), TuiRootModule), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
