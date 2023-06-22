" 插入javascript到网页
let insertionHighlightJs = '<body><script src="highlight.min.js"></script><script>hljs.highlightAll();</script>'
" 创建空的容器类table-of-contents " 
let insertionTableOfContents = '<div class="table-of-contents"></div>'
" silent! %s/\(^<body>.*script>\)$/\1<div class="table-of-contents"><\/div>
" 后期调用同名字js动态创建html中的 table-of-contents 。
 let creationTableOfContents = '<script src=' .'"'.expand("%:r").'.js"'.'></script>'

" silent! %s/\(^<body>.*div>\)$/\=submatch(0)."<script src=" .'"'.expand("%:r").'"'.".js><\/script>"
silent! %s/^<body>$/\=insertionHighlightJs.insertionTableOfContents.creationTableOfContents

" 将<pre>变成<pre><code>
silent! %s/<pre.*>$\n/<pre><code class="language-cpp">
" 将</pre>变成</pre></code>
silent! %s/<\/pre>$/<\/pre><\/code>

" 画面中央弹出弹窗，3秒钟后关闭
" call popup_create('highlight.js替换成功!', {'time': 3000})
let options = { 
            \ 'highlight': 'WarningMsg',
            \ 'moved':"any",
            \ 'border':[3,3,3,3],
            \ }
let popup_id = popup_create('highlight.js替换成功!', options)
w
