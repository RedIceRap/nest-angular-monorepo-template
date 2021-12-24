import * as entities from '@app/entities';

export const environment = {
  firebase: {
    projectId: 'app-4ebf9',
    appId: '1:752485237563:web:817d3d948a16c3b68fad1e',
    storageBucket: 'app-4ebf9.appspot.com',
    apiKey: 'AIzaSyBMjb77UajnL7m__daMm7BejIrPzwOA10U',
    authDomain: 'app-4ebf9.firebaseapp.com',
    messagingSenderId: '752485237563',
    measurementId: 'G-HT0H7XHN38',
  },
  production: false,
  typeOrmModuleOptions: {
    type: 'pq',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'app',
    entities: [entities],
    synchronize: true,
  },
};
