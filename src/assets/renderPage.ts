import {createElement} from './functions';
import {moexTickerLast} from './api';

export function displaySecurityPage() {
    const securityPage = createElement('div', 'Ценные бумаги', 'security-page');
    document.body.appendChild(securityPage);
    const securityPageContainer = createElement('div', null, 'security-page__container');
    securityPage.appendChild(securityPageContainer);

    const shareBlock = createElement('div', 'Акции', 'share-block');
    securityPageContainer.appendChild(shareBlock);
    const bondsBlock = createElement('div', 'Облигации', 'bonds-block');
    securityPageContainer.appendChild(bondsBlock);
    const etfBlock = createElement('div', 'БПИФ', 'etf-block');
    securityPageContainer.appendChild(etfBlock);

    moexTickerLast('GAZP').then(console.log);
}