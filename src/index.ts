import homeSource from '../content/home.md?raw';
import homeHeroSource from '../content/home-hero.md?raw';
import methodologySource from '../content/methodology.md?raw';
import interviewSource from '../content/interviews.md?raw';
import synthesisSource from '../content/synthesis.md?raw';
import criticismSource from '../content/criticisms.md?raw';
import { marked } from 'marked';

const page = new URLSearchParams(window.location.search).get('page');

const renderer = {
  image(href: string, title: string, text: string) {
    let caption = false;
    if (text.startsWith('caption: ')) {
      caption = true;
      text = text.replace('caption: ', '');
    }
    let html = `<figure><img src="${href}" alt="${text}" />`;
    if (caption) {
      html += `<figcaption>${text}</figcaption>`;
    }
    html += '</figure>';
    return html;
  }
}

marked.use({ renderer });


function generateHtmlForHomepage() {
  const heroHtmlElement = document.createElement('div');
  heroHtmlElement.id = 'home-hero';
  heroHtmlElement.innerHTML = marked.parse(homeHeroSource);
  return heroHtmlElement.outerHTML + marked.parse(homeSource);
}


function getHtmlContentForCurrentPage(page?: string) {
  switch (page) {
    case 'interviews':
      return marked.parse(interviewSource);
    case 'methodology':
      return marked.parse(methodologySource);
    case 'criticisms':
      return marked.parse(criticismSource);
    case 'synthesis':
      return marked.parse(synthesisSource);
    default:
      return generateHtmlForHomepage();
  }
}

document.getElementById('content').innerHTML = getHtmlContentForCurrentPage(page);
