import { HomePage } from './pages/HomePage';
// import { OrderPage } from './pages/OrderPage';
import './style.css';

console.log('funguju!');
// const pageElement = document.createElement('div');
// pageElement.classList.add('page');

// const main = document.createElement('main');
// main.append(Banner(), Menu(), Gallery(), Contact());

// pageElement.append(Header(), main, Footer());

// document.querySelector('#app').append(pageElement);

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
