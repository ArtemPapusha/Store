import '~/modules/index.scss';

import Validation from '@/components/input/Validation';
import FieldInput from '@/components/input/FieldInput';
import FieldInputCheckbox from '@/components/input/FieldInputCheckbox';
import FieldInputRadio from '@/components/input/FieldInputRadio';
import CardProdact from '@/components/CardProduct';
import FieldCards from '@/components/FieldCards';

const fieldCards = new FieldCards([
  new CardProdact({
    name: 'laptop',
    title: 'Ноутбук ASUS ROG Strix G17 2023 G713PI-HX049',
    image: 'laptopsmall1.jpg',
    description: 'Екран 17.3" IPS (1920x1080) Full HD 144 Гц, матовий / AMD Ryzen 9 7845HX (3.0 - 5.2 ГГц) / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce RTX 4070, 8 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.8 кг / сірий',
    price: '2000 грн',
  }),
  new CardProdact({
    name: 'console',
    title: 'Sony PlayStation 5 White 825Gb + DualSense (White) + Charging Station',
    image: 'consolesmall1.jpg',
    description: 'AMD Ryzen Zen 2 8х3.5 GHz, 16 ГБ GDDR5, AMD Radeon RDNA 2 2.23 GHz 10.3 TFLOPS, Підтримка технологій 8K та HDR, Прискорення трасування променів',
    price: '1000 грн',
  }),
  new CardProdact({
    name: 'PC',
    title: `Компю'тер Lenovo IdeaCentre G5 Gaming 14IOB6`,
    image: 'pcsmall1.jpg',
    description: 'Intel Core i5-10400F (2.9 — 4.3 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 256 ГБ / nVidia GeForce GTX 1650 Super, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС',
    price: '500 грн',
  })
]);

fieldCards.render();