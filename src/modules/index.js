import '~/modules/index.scss';

import ListCards from '@/components/ListCards';
import Loading from '@/components/Loading';

const loading = new Loading();

function addCards(data) {
    const listCards = new ListCards();
    data.cards.forEach(card => {
      listCards.addCard(card);
    });
    listCards.render();
}

async function fetchCards() {
  try {
    loading.$overlay.style.display = 'flex';

    const response = await fetch('https://my-json-server.typicode.com/ArtemPapusha/store-back/db');
 
    const data = await response.json();

    addCards(data);

  } catch (error) {

    console.error('Fetch error ==> ', error);

  } finally {
    loading.$overlay.style.display = 'none';
  }
}

fetchCards();
