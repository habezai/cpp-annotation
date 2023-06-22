// 创建一个包含内容的 HTML
var str = ''

str+='<a href="第1章 章节概述.html">第1章 章节概述</a>';
str += "<br >";

str+='<a href="第2章 引言.html">第2章 引言</a>';
str += "<br >";

str+='<a href="第3章 C++的第一印象.html">第3章 C++的第一印象</a>';
str += "<br >";

str+='<a href="第4章 命名空间.html">第4章 命名空间</a>';
str += "<br >";

str+='<a href="第5章 数据类型string.html">第5章 数据类型string</a>';
str += "<br >";

str+='<a href="第6章 IO 流库.html">第6章 IO 流库</a>';
str += "<br >";

str+='<a href="第7章 类.html">第7章 上课</a>';
str += "<br >";

str+='<a href="第8章 Static 数据和函数.html">第8章 Static Data And Functions</a>';
str += "<br >";

str+='<a href="第9章 类和内存分配.html">第9章 类和内存分配</a>';
str += "<br >";

str+='<a href="第10章 异常.html">第10章 异常</a>';
str += "<br >";

str+='<a href="第11章 更多运算符重载.html">第11章 更多运算符重载</a>';
str += "<br >";

str+='<a href="第12章 抽象容器.html">第12章 抽象容器</a>';
str += "<br >";

str+='<a href="第13章 继承.html">第13章 继承</a>';
str += "<br >";

str+='<a href="第14章 多态性.html">第14章 多态性</a>';
str += "<br >";

str+='<a href="第15章 朋友.html">第15章 朋友</a>';
str += "<br >";

str+='<a href="第16章 具有指向成员的指针的类.html">第16章 具有指向成员的指针的类</a>';
str += "<br >";

str+='<a href="第17章 嵌套类.html">第17章 嵌套类</a>';
str += "<br >";

str+='<a href="第18章 标准模板库.html">第18章 标准模板库</a>';
str += "<br >";

str+='<a href="第19章 STL泛型算法.html">第19章 STL泛型算法</a>';
str += "<br >";

str+='<a href="第20章 多线程.html">第20章 多线程</a>';
str += "<br >";

str+='<a href="第21章 函数和变量模板.html">第21章 函数和变量模板</a>';
str += "<br >";

str+='<a href="第22章：类模板.html">第22章：类模板</a>';
str += "<br >";

str+='<a href="第23章 高级模板使用.html">第23章 高级模板使用</a>';
str += "<br >";

str+='<a href="第24章 协程.html">第24章 协程</a>';
str += "<br >";

str+='<a href="第25章 具体例子.html">第25章 具体例子</a>';

// 将 HTML 插入到容器中
document.querySelector('.table-of-contents').innerHTML = str;
