import '~/modules/index.scss';

import Loading from '@/components/Loading';
import ListCards from '@/components/ListCards';

const listCards = new ListCards();

function addCards(data) {
    data.cards.forEach(card => {
      listCards.addCard(card);
    });
    listCards.render();
}

async function fetchCards() {
  try {
    listCards.$listCards.firstChild.style.display = 'flex';

    const response = await fetch('https://my-json-server.typicode.com/ArtemPapusha/store-back/db');
 
    const data = await response.json();

    addCards(data);

  } catch (error) {

    console.error('Fetch error ==> ', error);

  } finally {
    listCards.$listCards.firstChild.style.display = 'none';
  }
}

fetchCards();
