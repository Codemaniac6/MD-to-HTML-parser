
function parser(mdText) {
    pass;
}

const input = "[GitHub Pages](https://pages.github.com/)"
const h1 = /^#(.*$)/igm;
const h2 = /^##(.*$)/igm;
const h3 = /^###(.*$)/igm;
const h4 = /^####(.*$)/igm;
const h5 = /^#####(.*$)/igm;
const h6 = /^######(.*$)/igm;
const bold = /\*\*(.*)\*\*/igm;
const italic = /^\*(.*)\*/igm;
const strikethrough = /^\~\~(.*)\~\~/igm;
const blockQuote = /\>(.*$)/gim;
const link = /\[(.*?)\]\((.*?)\)/gi;
const unorderedList = /^\- (.*)/ig;
const image = /!\[(.*?)\]\((.*?)\)/gim;
const lineBreak = /\n$/gim

const result = input.replace(link, '<a href="$2">$1</a>');
console.log(result);