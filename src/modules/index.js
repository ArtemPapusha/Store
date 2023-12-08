import '~/modules/index.scss';

import Validation from '@/components/input/Validation';
import FieldInput from '@/components/input/FieldInput';
import FieldInputCheckbox from '@/components/input/FieldInputCheckbox';
import FieldInputRadio from '@/components/input/FieldInputRadio';
import CardProdact from '@/components/CardProduct';
import FieldCards from '@/components/FieldCards';
import Typography from '@/components/Typography';

const fieldCards = new FieldCards({
  cards: [
  new CardProdact({
    name: 'laptop',
    title: {
      text: 'Ноутбук ASUS ROG Strix G17 2023 G713PI-HX049',
      type: 'h6',
      textColor: '',
      textWeight: ''
    },
    image: 'laptopsmall1.jpg',
    description: {
      text: 'Екран 17.3" IPS (1920x1080) Full HD 144 Гц, матовий / AMD Ryzen 9 7845HX (3.0 - 5.2 ГГц) / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce RTX 4070, 8 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.8 кг / сірий',
      type: 'body2',
      textColor: '',
      textWeight: ''
    },
    price: {
      text: '2000 грн',
      type: 'caption',
      textColor: '',
      textWeight: ''
    },
    button: {
      className: 'laptop',
      textContent: {
        text: '',
        type: 'button',
        textColor: '',
        textWeight: ''
      },
      variant: 'outlined',
      size: 'medium',
      color: 'secondary-light',
      disabled: false,
      startIcon: {
        iconName: 'cart',
        size: '14',
        color: 'black',
        className: '',
      }
    }
  }),
  new CardProdact({
    name: 'console',
    title: {
      text: 'Sony PlayStation 5 White 825Gb + DualSense (White) + Charging Station',
      type: 'h6',
      textColor: '',
      textWeight: ''
    },
    image: 'consolesmall1.jpg',
    description: {
      text: 'AMD Ryzen Zen 2 8х3.5 GHz, 16 ГБ GDDR5, AMD Radeon RDNA 2 2.23 GHz 10.3 TFLOPS, Підтримка технологій 8K та HDR, Прискорення трасування променів',
      type: 'body2',
      textColor: '',
      textWeight: ''
    },
    price: {
      text: '1000 грн',
      type: 'caption',
      textColor: '',
      textWeight: ''
    },
    button: {
      className: 'console',
      textContent: {
        text: '',
        type: 'button',
        textColor: '',
        textWeight: ''
      },
      variant: 'outlined',
      size: 'medium',
      color: 'secondary-light',
      disabled: false,
      startIcon: {
        iconName: 'cart',
        size: '14',
        color: 'black',
        className: '',
      }
    }
  }),
  new CardProdact({
    name: 'PC',
    title: {
      text: `Компю'тер Lenovo IdeaCentre G5 Gaming 14IOB6`,
      type: 'h6',
      textColor: '',
      textWeight: ''
    },
    image: 'pcsmall1.jpg',
    description: {
      text: 'Intel Core i5-10400F (2.9 — 4.3 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 256 ГБ / nVidia GeForce GTX 1650 Super, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС',
      type: 'body2',
      textColor: '',
      textWeight: ''
    },
    price: {
      text: '500 грн',
      type: 'caption',
      textColor: '',
      textWeight: ''
    },
    button: {
      className: 'PC',
      textContent: {
        text: '',
        type: 'button',
        textColor: '',
        textWeight: ''
      },
      variant: 'outlined',
      size: 'medium',
      color: 'secondary-light',
      disabled: false,
      startIcon: {
        iconName: 'cart',
        size: '14',
        color: 'black',
        className: '',
      }
    }
  }),
]});

fieldCards.render();