
function parser(mdText) {
   const htmlText = mdText.replace(/^# (.*$)/igm, "<h1>$1</h1>")
            .replace(/^## (.*$)/igm, "<h2>$1</h2>")
            .replace(/^### (.*$)/igm, "<h3>$1</h3>")
            .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
            .replace(/\*(.*)\*/igm, "<i>$1</i>")
            .replace(/\~\~(.*)\~\~/igm, "<del>$1</del>")
            .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
            .replace(/!\[(.*?)\]\((.*?)\)/gim,"<img alt='$1' src='$2'/>")
            .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
            .replace(/\n$/gim, "<br />")

    return htmlText
}

const test_Test = `Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote
Some of these words *are emphasized*.
Use two asterisks for **strong emphasis**.
This is an [example link](http://example.com/).
![alt text](/path/to/img.jpg)
`

console.log(parser(test_Test));

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