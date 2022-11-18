import markdown from '../content.md?raw';
import { marked } from "marked";
import "./style.css";

document.getElementById('content').innerHTML =
  marked.parse(markdown);
