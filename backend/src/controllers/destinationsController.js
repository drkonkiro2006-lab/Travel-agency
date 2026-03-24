const destinations = [
  {
    id: '1',
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbd-gfglyPCkVQFu57XhoUe9ubZI2C50c4wNt1lHBAZiz0IxEUvzgsyy-uzl4QcIdYVOfpaimAqDxJCa_cHHc1YojopI7I6AlSeRMo0AuyFvdZLgP-zj9vYjuGbzvd3B_MOOZn1_Wlp0GUXYr0dfZIAeHsAYuB6bY-0Tu1xk5wmc10WLZeGx_BFWqkbLB-V8T0l3JHAL-a6ufv9hQReiQXTgndcI4omXNIL4DT3DY-JaUjWARd2bEAxdN7r1hDQAqIk9FFfe-oytXg',
    type: 'Cultural Heritage',
    spanType: 'wide',
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP888gsky9R35Jm_hHFm6WKpBQUGz8CumAdOxO50Vtt5xdNmknWats0tKEaAre-OiMTT62GrOvBzFlg-vj9xbQDFywI5F47aEspShJqLAQ6BOhbL3gNbWRQOopFS75CBgbjERUwbe1Zmk5FjJq3GS7FCoHVYyRoxcEjc5OY5OBHq16y8dbevK7YuB9XpnCslX9uCHXYa__VHLDFemdBuGmhrqVw-rRgZ4kv7FpoSsTaesahamZhkojsm3qZircMy5McNJmub6oAhWb',
    type: 'Gastronomy',
    spanType: 'small',
  },
  {
    id: '3',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnOTk0SzfnbfBAYpWSGy_A6kf_UN2wOCQSiCakZqLJguZVD8_J9Pk7R-dOMOHw71pVpd51VyobGelK733f77UiE-IutHiJLCVHzfnhlI2N_VmkOuT6Xl9oiz8176EduFc3pXFpl2xhIEw08wxUWAWXwXQHcp4MD45CqYDnXsCZDK1ViqzALEfhI6qaYYi9kDfevikOcO-GN8Mgsw8dzCboE0iR-EE5mg0vEFkuA0_EW_f0DF2sb5wiRPCBAjuJM8LUdLErjE45xUI1',
    type: 'Seascape',
    spanType: 'small',
  },
  {
    id: '4',
    name: 'Patagonia',
    country: 'Chile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDctK-Ps5pBJVgOes_mPNL814UmdnXY9c3E8UtbGf-yGCsi32Arkn3LXe-kzFaPVHwUhtZ_frO-z2y0BxeiCtDzdBnPuqReGL0-R66VJhywRqCaZhlUCCp0vf4cD996X_x6226H4X7RpG16oL-otkboz6hpKrZFWCnYwUG9eeYOkiSkcbQeYnS09BWzeTjd3Bq13W55IBi11NItdv8uN-jEA37zmxZsCPayiheO5GZsP5ellUYv0Yx73fEzeSBLygj4AbMRLyxC_0Pb',
    type: 'Untamed Wilderness',
    spanType: 'wide',
  }
];

const getDestinations = (req, res) => {
  // Simulate network delay for frontend loading UI
  setTimeout(() => {
    res.json(destinations);
  }, 600);
};

module.exports = { getDestinations };
