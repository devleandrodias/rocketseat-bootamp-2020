import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com emulador localhost
 * iOS IP máquina local
 *
 * android com emulador adb reverce tcp:3000 tcp:3000 (localhost)
 * android com emulador ip especifico para emulador 10.0.0.2 (Android Studio)
 * android com emulador ip especifico para emulador 10.0.0.3 (GenyMotion)
 * android com dispositivo, ip da máquina local
 */
