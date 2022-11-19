import homeSource from '../home.md?raw';
import methodologySource from '../methodology.md?raw';
import interviewSource from '../interviews.md?raw';
import synthesisSource from '../synthesis.md?raw';
import criticismSource from '../criticisms.md?raw';
import { marked } from 'marked';
import './style.css';
import './header.css';

const page = new URLSearchParams(window.location.search).get('page');

function getContentForCurrentPage(page?: string) {
  switch (page) {
    case 'interviews':
      return interviewSource;
    case 'methodology':
      return methodologySource;
    case 'criticisms':
      return criticismSource;
    case 'synthesis':
      return synthesisSource;
    default:
      return homeSource;
  }
}

document.getElementById('content').innerHTML = marked.parse(getContentForCurrentPage(page));
