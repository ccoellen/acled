import homeSource from '../home.md?raw';
import methodologySource from '../methodology.md?raw';
import interviewSource from '../interviews.md?raw';
import synthesisSource from '../synthesis.md?raw';
import criticismSource from '../criticisms.md?raw';
import { marked } from 'marked';
import './style.css';
import './header.css';

const page = new URLSearchParams(window.location.search).get('page');

if (!page) {
  document.getElementById('content').innerHTML = marked.parse(homeSource);
}

if (page === 'interviews') {
  document.getElementById('content').innerHTML = marked.parse(interviewSource);
}

if (page === 'methodology') {
  document.getElementById('content').innerHTML = marked.parse(methodologySource);
}

if (page === 'synthesis') {
  document.getElementById('content').innerHTML = marked.parse(synthesisSource);
}

if (page === 'criticisms') {
  document.getElementById('content').innerHTML = marked.parse(criticismSource);
}
