import App from './App';
import 'primeflex/primeflex.css';

const app = async () => {
  document.getElementById('app').appendChild(await App());
};
// Load app
app();
