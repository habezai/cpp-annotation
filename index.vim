let errMsg = ""
" 插入javascript到网页
silent! %s/<body>$/<body><script src="highlight.min.js"><\/script><script>hljs.highlightAll();<\/script>
let errMsg = errMsg . v:statusmsg
" 将<pre>变成<pre><code>
silent! %s/<pre.*>$\n/<pre><code>
let errMsg = errMsg . v:statusmsg
" 将</pre>变成</pre></code>
silent! %s/<\/pre>$/<\/pre><\/code>
let errMsg = errMsg . v:statusmsg

" 画面中央弹出弹窗，3秒钟后关闭
" call popup_create('highlight.js替换成功!', {'time': 3000})
let options = { 
            \ 'highlight': 'WarningMsg',
            \ 'moved':"any",
            \ }
let popup_id = popup_create('highlight.js替换成功!', options)
