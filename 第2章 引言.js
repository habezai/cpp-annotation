// 创建一个包含内容的 HTML
var str = ''

str+='</ul>'
str+='<li>'
str+='<a href="第2章 引言.html#2.1: C++注释中的新增功能">#2.1: C++注释中的新增功能</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.2: C++的历史">#2.2: C++的历史</a>'

str+='<ul>'
str+='<li>'
str+='<a href="第2章 引言.html#2.2.1: C++注释的历史">#2.2.1: C++注释的历史</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.2.2: 使用C++编译器编译 C 程序">#2.2.2: 使用C++编译器编译 C 程序</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.2.3: 编译C++程序">#2.2.3: 编译C++程序</a>'

str+='<ul>'
str+='<li>'
str+='<a href="第2章 引言.html#2.2.3.1: 在 MS-Windows 下C++">#2.2.3.1: 在 MS-Windows 下C++</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.2.3.2: 编译C++源文本">#2.2.3.2: 编译C++源文本</a>'

str+='</ul>'
str+='</ul>'
str+='<li>'
str+='<a href="第2章 引言.html#2.3: C++：优势和主张">#2.3: C++：优势和主张</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.4: 什么是面向对象编程？">#2.4: 什么是面向对象编程？</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5: C 和 C++ 之间的差异">#2.5: C 和 C++ 之间的差异</a>'

str+='<ul>'
str+='<li>'
str+='<a href="第2章 引言.html#2.5.1: 函数main">#2.5.1: 函数main</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.2: 行尾注释">#2.5.2: 行尾注释</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.3: 严格的类型检查">#2.5.3: 严格的类型检查</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.4: 函数重载">#2.5.4: 函数重载</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.5: 默认函数参数">#2.5.5: 默认函数参数</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.6: NULL指针 和 0指针 和 nullptr">#2.5.6: NULL指针 和 0指针 和 nullptr</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.7: 参数列表void">#2.5.7: 参数列表void</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.8: define __cplusplus">#2.5.8: define __cplusplus</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.9: 使用标准 C 函数">#2.5.9: 使用标准 C 函数</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.10: C 和 C++ 的头文件">#2.5.10: C 和 C++ 的头文件</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.11: 定义局部变量">#2.5.11: 定义局部变量</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.12: 关键字typedef">#2.5.12: 关键字typedef</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.13: 作为结构的一部分的函数">#2.5.13: 作为结构的一部分的函数</a>'

str+='<li>'
str+='<a href="第2章 引言.html#2.5.14: 操作数的求值顺序">#2.5.14: 操作数的求值顺序</a>'

str+='</ul>'

// 将 HTML 插入到容器中
document.querySelector('.table-of-contents').innerHTML = str;
