import homeSource from '../home.md?raw';
import methodologySource from '../methodology.md?raw';
import interviewSource from '../interviews.md?raw';
import synthesisSource from '../synthesis.md?raw';
import criticismSource from '../criticisms.md?raw';
import { marked } from 'marked';
import './style.css';
import './header.css';


const path = window.location.pathname;

if (path === '/acled/') {
  document.getElementById('content').innerHTML = marked.parse(homeSource);
}

if (path === '/acled/interviews') {
  document.getElementById('content').innerHTML = marked.parse(interviewSource);
}

if (path === '/acled/methodology') {
  document.getElementById('content').innerHTML = marked.parse(methodologySource);
}

if (path === '/acled/synthesis') {
  document.getElementById('content').innerHTML = marked.parse(synthesisSource);
}

if (path === '/acled/criticisms') {
  document.getElementById('content').innerHTML = marked.parse(criticismSource);
}
