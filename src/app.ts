import './style.scss';
import {displaySecurityPage} from './assets/renderPage'
import {Security} from './assets/types'

export let securitiesArray: Security[] = JSON.parse(localStorage.getItem('securitiesArray') || '[]');

console.log (securitiesArray);

displaySecurityPage();
