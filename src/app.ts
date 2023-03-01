import './style.scss';
import data from './data';
import {addUnd, block} from './addSpending';
import income from './income';
import progress from './progressbar';
import addSpending from './changeStyle';
import {displaySecurityPage} from './renderPage'
import {Security} from './types'
import { incomeExpensesBoreder } from './incomeExpensesBorder';

export let securitiesArray: Security[] = JSON.parse(localStorage.getItem('securitiesArray') || '[]');


displaySecurityPage();
incomeExpensesBoreder()
data()
addUnd()
income()
addSpending()
block()
progress()


alert(`Доброго врмени суток, не могли бы вы проверить нашу работу в конце кросс чека. Заранее благодарим и целуем. ♡♡♡`)

<<<<<<< HEAD
// alert('Доброго врмени суток, не могли бы вы проверить нашу работу в конце кросс чека. Заранее благодарим и целуем. ♡♡♡')
=======
>>>>>>> 3d299fd1ea315f3645b8b638adfe789eb38416d2
