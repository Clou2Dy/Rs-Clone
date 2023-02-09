import {createElement} from './functions'

export function renderSearchPage(){
    const searchPage = createElement('div', null, 'search-page');
    document.body.appendChild(searchPage);
    const searchPageContainer = createElement('div', null, 'search-page__container');
    searchPage.appendChild(searchPageContainer);
    const searchBlock = createElement('div', null, 'search-block');
    searchPageContainer.appendChild(searchBlock);
    const searchInput = createElement('input', null, 'search-input') as HTMLInputElement;
    searchBlock.appendChild(searchInput);
    searchInput.defaultValue = 'Компания, тикер, ISIN';
    const cancelInput = createElement('div', 'Отменить', 'search-cancel');
    searchBlock.appendChild(cancelInput);

    const securityPage = document.querySelector('.security-page') as HTMLElement
    cancelInput.addEventListener('click', () => {
        searchPage.style.display = 'none';
        securityPage.style.display = 'block';
    });
}