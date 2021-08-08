import re

        

def parser(mdText):
    htmlText = re.sub(r'^# (.*$)', r"<h1>\1</h1>", mdText, flags=re.I|re.M)
    htmlText2 = re.sub(r'## (.*$)', r"<h2>\1</h2>", htmlText, flags=re.M)
    htmlText3 = re.sub(r'^### (.*$)', r"<h3>\1</h3>", htmlText2, flags=re.M)
    htmlText4 = re.sub(r'\*\*(.*)\*\*', r"<b>\1</b>", htmlText3, flags=re.M)
    htmlText5 = re.sub(r'\*(.*)\*', r"<i>\1</i>", htmlText4, flags=re.M)
    htmlText6 = re.sub(r'\~\~(.*)\~\~', r"<del>\1</del>", htmlText5, flags=re.M)
    htmlText7 = re.sub(r'^\> (.*)', r"<blockquote>\1</blockquote>", htmlText6, flags=re.M)
    htmlText8 = re.sub(r'!\[(.*?)\]\((.*?)\)', r"<img alt='\1' src='\2' />", htmlText7, flags=re.M)
    htmlText9 = re.sub(r'\[(.*?)\]\((.*?)\)', r"<a href='\2'>\1</a>", htmlText8, flags=re.M)

    return htmlText9

test_Test = """
# A story
Now is the time for all good men to come to
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
"""

print(parser(test_Test))
