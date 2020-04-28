(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{404:function(a,e,t){"use strict";t.r(e);var v=t(10),s=Object(v.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"elastic-技术栈之-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-技术栈之-kibana"}},[a._v("#")]),a._v(" Elastic 技术栈之 Kibana")]),a._v(" "),t("h2",{attrs:{id:"discover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discover"}},[a._v("#")]),a._v(" Discover")]),a._v(" "),t("p",[a._v("单击侧面导航栏中的 "),t("code",[a._v("Discover")]),a._v(" ，可以显示 "),t("code",[a._v("Kibana")]),a._v(" 的数据查询功能功能。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/current/images/tutorial-discover.png",alt:"img"}})]),a._v(" "),t("p",[a._v("在搜索栏中，您可以输入Elasticsearch查询条件来搜索您的数据。您可以在 "),t("code",[a._v("Discover")]),a._v(" 页面中浏览结果并在 "),t("code",[a._v("Visualize")]),a._v(" 页面中创建已保存搜索条件的可视化。")]),a._v(" "),t("p",[a._v("当前索引模式显示在查询栏下方。索引模式确定提交查询时搜索哪些索引。要搜索一组不同的索引，请从下拉菜单中选择不同的模式。要添加索引模式（index pattern），请转至 "),t("code",[a._v("Management/Kibana/Index Patterns")]),a._v(" 并单击 "),t("code",[a._v("Add New")]),a._v("。")]),a._v(" "),t("p",[a._v("您可以使用字段名称和您感兴趣的值构建搜索。对于数字字段，可以使用比较运算符，如大于（>），小于（<）或等于（=）。您可以将元素与逻辑运算符 "),t("code",[a._v("AND")]),a._v("，"),t("code",[a._v("OR")]),a._v(" 和 "),t("code",[a._v("NOT")]),a._v(" 链接，全部使用大写。")]),a._v(" "),t("p",[a._v("默认情况下，每个匹配文档都显示所有字段。要选择要显示的文档字段，请将鼠标悬停在“可用字段”列表上，然后单击要包含的每个字段旁边的添加按钮。例如，如果只添加account_number，则显示将更改为包含五个帐号的简单列表：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-discover-3.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"查询语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询语义"}},[a._v("#")]),a._v(" 查询语义")]),a._v(" "),t("p",[a._v("kibana 的搜索栏遵循 "),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax",target:"_blank",rel:"noopener noreferrer"}},[a._v("query-string-syntax"),t("OutboundLink")],1),a._v(" 文档中所说明的查询语义。")]),a._v(" "),t("p",[a._v("这里说明一些最基本的查询语义。")]),a._v(" "),t("p",[a._v('查询字符串会被解析为一系列的术语和运算符。一个术语可以是一个单词（如：quick、brown）或用双引号包围的短语（如"quick brown"）。')]),a._v(" "),t("p",[a._v("查询操作允许您自定义搜索 - 下面介绍了可用的选项。")]),a._v(" "),t("h4",{attrs:{id:"字段名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字段名称"}},[a._v("#")]),a._v(" 字段名称")]),a._v(" "),t("p",[a._v("正如查询字符串查询中所述，将在搜索条件中搜索default_field，但可以在查询语法中指定其他字段：")]),a._v(" "),t("p",[a._v("例如：")]),a._v(" "),t("ul",[t("li",[a._v("查询 "),t("code",[a._v("status")]),a._v(" 字段中包含 "),t("code",[a._v("active")]),a._v(" 关键字")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("status:active\n")])])]),t("ul",[t("li",[t("code",[a._v("title")]),a._v(" 字段包含 "),t("code",[a._v("quick")]),a._v(" 或 "),t("code",[a._v("brown")]),a._v(" 关键字。如果您省略 "),t("code",[a._v("OR")]),a._v(" 运算符，则将使用默认运算符")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("title:(quick OR brown)\ntitle:(quick brown)\n")])])]),t("ul",[t("li",[a._v('author 字段查找精确的短语 "john smith"，即精确查找。')])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('author:"John Smith"\n')])])]),t("ul",[t("li",[a._v("任意字段 "),t("code",[a._v("book.title")]),a._v("，"),t("code",[a._v("book.content")]),a._v(" 或 "),t("code",[a._v("book.date")]),a._v(" 都包含 "),t("code",[a._v("quick")]),a._v(" 或 "),t("code",[a._v("brown")]),a._v("（注意我们需要如何使用 "),t("code",[a._v("\\*")]),a._v(" 表示通配符）")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("book.\\*:(quick brown)\n")])])]),t("ul",[t("li",[a._v("title 字段包含任意非 null 值")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("_exists_:title\n")])])]),t("h4",{attrs:{id:"通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[a._v("#")]),a._v(" 通配符")]),a._v(" "),t("p",[a._v("ELK 提供了 ? 和 * 两个通配符。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("?")]),a._v(" 表示任意单个字符；")]),a._v(" "),t("li",[t("code",[a._v("*")]),a._v(" 表示任意零个或多个字符。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("qu?ck bro*\n")])])]),t("blockquote",[t("p",[t("strong",[a._v("注意：通配符查询会使用大量的内存并且执行性能较为糟糕，所以请慎用。")]),a._v(" "),t("strong",[a._v("提示")]),a._v("：纯通配符 * 被写入 "),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-exists-query.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("exsits"),t("OutboundLink")],1),a._v(" 查询，从而提高了查询效率。因此，通配符 "),t("code",[a._v("field：*")]),a._v(" 将匹配包含空值的文档，如："),t("code",[a._v("{“field”：“”}")]),a._v("，但是如果字段丢失或显示将值置为null则不匹配，如："),t("code",[a._v("“field”：null}")]),a._v(" "),t("strong",[a._v("提示")]),a._v("：在一个单词的开头（例如："),t("code",[a._v("*ing")]),a._v("）使用通配符这种方式的查询量特别大，因为索引中的所有术语都需要检查，以防万一匹配。通过将 "),t("code",[a._v("allow_leading_wildcard")]),a._v(" 设置为 "),t("code",[a._v("false")]),a._v("，可以禁用。")])]),a._v(" "),t("h4",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[a._v("#")]),a._v(" 正则表达式")]),a._v(" "),t("p",[a._v("可以通过 "),t("code",[a._v("/")]),a._v(" 将正则表达式包裹在查询字符串中进行查询")]),a._v(" "),t("p",[a._v("例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("name:/joh?n(ath[oa]n)/\n")])])]),t("p",[a._v("支持的正则表达式语义可以参考："),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html#regexp-syntax",target:"_blank",rel:"noopener noreferrer"}},[a._v("Regular expression syntax"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"模糊查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询"}},[a._v("#")]),a._v(" 模糊查询")]),a._v(" "),t("p",[a._v("我们可以使用 "),t("code",[a._v("~")]),a._v(" 运算符来进行模糊查询。")]),a._v(" "),t("p",[a._v("例：")]),a._v(" "),t("p",[a._v("假设我们实际想查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("quick brown forks\n")])])]),t("p",[a._v("但是，由于拼写错误，我们的查询关键字变成如下情况，依然可以查到想要的结果。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("quikc\\~ brwn\\~ foks\\~\n")])])]),t("p",[a._v("这种模糊查询使用 Damerau-Levenshtein 距离来查找所有匹配最多两个更改的项。所谓的更改是指单个字符的插入，删除或替换，或者两个相邻字符的换位。")]),a._v(" "),t("p",[a._v("默认编辑距离为 "),t("code",[a._v("2")]),a._v("，但编辑距离为 "),t("code",[a._v("1")]),a._v(" 应足以捕捉所有人类拼写错误的80％。它可以被指定为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("quikc\\~1\n")])])]),t("h4",{attrs:{id:"近似检索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#近似检索"}},[a._v("#")]),a._v(" 近似检索")]),a._v(" "),t("p",[a._v("尽管短语查询（例如，"),t("code",[a._v("john smith")]),a._v("）期望所有的词条都是完全相同的顺序，但是近似查询允许指定的单词进一步分开或以不同的顺序排列。与模糊查询可以为单词中的字符指定最大编辑距离一样，近似搜索也允许我们指定短语中单词的最大编辑距离：")]),a._v(" "),t("p",[a._v("例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"fox quick"\\~5\n')])])]),t("p",[a._v("字段中的文本越接近查询字符串中指定的原始顺序，该文档就越被认为是相关的。当与上面的示例查询相比时，短语 "),t("code",[a._v('"quick fox"')]),a._v(" 将被认为比 "),t("code",[a._v('"quick brown fox"')]),a._v(" 更近似查询条件。")]),a._v(" "),t("h4",{attrs:{id:"范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#范围"}},[a._v("#")]),a._v(" 范围")]),a._v(" "),t("p",[a._v("可以为日期，数字或字符串字段指定范围。闭区间范围用方括号 "),t("code",[a._v("[min TO max]")]),a._v(" 和开区间范围用花括号 "),t("code",[a._v("{min TO max}")]),a._v(" 来指定。")]),a._v(" "),t("p",[a._v("我们不妨来看一些示例。")]),a._v(" "),t("ul",[t("li",[a._v("2012 年的所有日子")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("date:[2012-01-01 TO 2012-12-31]\n")])])]),t("ul",[t("li",[a._v("数字 1 到 5")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("count:[1 TO 5]\n")])])]),t("ul",[t("li",[a._v("在 "),t("code",[a._v("alpha")]),a._v(" 和 "),t("code",[a._v("omega")]),a._v(" 之间的标签，不包括 "),t("code",[a._v("alpha")]),a._v(" 和 "),t("code",[a._v("omega")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tag:{alpha TO omega}\n")])])]),t("ul",[t("li",[a._v("10 以上的数字")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("count:[10 TO *]\n")])])]),t("ul",[t("li",[a._v("2012 年以前的所有日期")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("date:{* TO 2012-01-01}\n")])])]),t("p",[a._v("此外，开区间和闭区间也可以组合使用")]),a._v(" "),t("ul",[t("li",[a._v("数组 1 到 5，但不包括 5")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("count:[1 TO 5}\n")])])]),t("p",[a._v("一边无界的范围也可以使用以下语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("age:>10\nage:>=10\nage:<10\nage:<=10\n")])])]),t("p",[a._v("当然，你也可以使用 AND 运算符来得到连个查询结果的交集")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("age:(>=10 AND <20)\nage:(+>=10 +<20)\n")])])]),t("h4",{attrs:{id:"boosting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boosting"}},[a._v("#")]),a._v(" Boosting")]),a._v(" "),t("p",[a._v("使用操作符 "),t("code",[a._v("^")]),a._v(" 使一个术语比另一个术语更相关。例如，如果我们想查找所有有关狐狸的文档，但我们对狐狸特别感兴趣：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("quick^2 fox\n")])])]),t("p",[a._v("默认提升值是1，但可以是任何正浮点数。 0到1之间的提升减少了相关性。")]),a._v(" "),t("p",[a._v("增强也可以应用于短语或组：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"john smith"^2   (foo bar)^4\n')])])]),t("h4",{attrs:{id:"布尔操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布尔操作"}},[a._v("#")]),a._v(" 布尔操作")]),a._v(" "),t("p",[a._v("默认情况下，只要一个词匹配，所有词都是可选的。搜索 "),t("code",[a._v("foo bar baz")]),a._v(" 将查找包含 "),t("code",[a._v("foo")]),a._v(" 或 "),t("code",[a._v("bar")]),a._v(" 或 "),t("code",[a._v("baz")]),a._v(" 中的一个或多个的任何文档。我们已经讨论了上面的"),t("code",[a._v("default_operator")]),a._v("，它允许你强制要求所有的项，但也有布尔运算符可以在查询字符串本身中使用，以提供更多的控制。")]),a._v(" "),t("p",[a._v("首选的操作符是 "),t("code",[a._v("+")]),a._v("（此术语必须存在）和 "),t("code",[a._v("-")]),a._v(" （此术语不得存在）。所有其他条款是可选的。例如，这个查询：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("quick brown +fox -news\n")])])]),t("p",[a._v("这条查询意味着：")]),a._v(" "),t("ul",[t("li",[a._v("fox 必须存在")]),a._v(" "),t("li",[a._v("news 必须不存在")]),a._v(" "),t("li",[a._v("quick 和 brown 是可有可无的")])]),a._v(" "),t("p",[a._v("熟悉的运算符 "),t("code",[a._v("AND")]),a._v("，"),t("code",[a._v("OR")]),a._v(" 和 "),t("code",[a._v("NOT")]),a._v("（也写成 "),t("code",[a._v("&&")]),a._v("，"),t("code",[a._v("||")]),a._v(" 和 "),t("code",[a._v("!")]),a._v("）也被支持。然而，这些操作符有一定的优先级："),t("code",[a._v("NOT")]),a._v(" 优先于 "),t("code",[a._v("AND")]),a._v("，"),t("code",[a._v("AND")]),a._v(" 优先于 "),t("code",[a._v("OR")]),a._v("。虽然 "),t("code",[a._v("+")]),a._v(" 和 "),t("code",[a._v("-")]),a._v(" 仅影响运算符右侧的术语，但 "),t("code",[a._v("AND")]),a._v(" 和 "),t("code",[a._v("OR")]),a._v(" 会影响左侧和右侧的术语。")]),a._v(" "),t("h4",{attrs:{id:"分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[a._v("#")]),a._v(" 分组")]),a._v(" "),t("p",[a._v("多个术语或子句可以用圆括号组合在一起，形成子查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(quick OR brown) AND fox\n")])])]),t("p",[a._v("可以使用组来定位特定的字段，或者增强子查询的结果：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("status:(active OR pending) title:(full text search)^2\n")])])]),t("h4",{attrs:{id:"保留字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保留字"}},[a._v("#")]),a._v(" 保留字")]),a._v(" "),t("p",[a._v("如果你需要使用任何在你的查询本身中作为操作符的字符（而不是作为操作符），那么你应该用一个反斜杠来转义它们。例如，要搜索（1 + 1）= 2，您需要将查询写为 "),t("code",[a._v("\\(1\\+1\\)\\=2")])]),a._v(" "),t("p",[a._v("保留字符是："),t("code",[a._v('+ - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \\ /')])]),a._v(" "),t("p",[a._v("无法正确地转义这些特殊字符可能会导致语法错误，从而阻止您的查询运行。")]),a._v(" "),t("h4",{attrs:{id:"空查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空查询"}},[a._v("#")]),a._v(" 空查询")]),a._v(" "),t("p",[a._v("如果查询字符串为空或仅包含空格，则查询将生成一个空的结果集。")]),a._v(" "),t("h2",{attrs:{id:"visualize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visualize"}},[a._v("#")]),a._v(" Visualize")]),a._v(" "),t("p",[a._v("要想使用可视化的方式展示您的数据，请单击侧面导航栏中的 "),t("code",[a._v("Visualize")]),a._v("。")]),a._v(" "),t("p",[a._v("Visualize工具使您能够以多种方式（如饼图、柱状图、曲线图、分布图等）查看数据。要开始使用，请点击蓝色的 "),t("code",[a._v("Create a visualization")]),a._v(" 或 "),t("code",[a._v("+")]),a._v(" 按钮。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-landing.png",alt:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-landing.png"}})]),a._v(" "),t("p",[a._v("有许多可视化类型可供选择。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-wizard-step-1.png",alt:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-wizard-step-1.png"}})]),a._v(" "),t("p",[a._v("下面，我们来看创建几个图标示例：")]),a._v(" "),t("h3",{attrs:{id:"pie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pie"}},[a._v("#")]),a._v(" Pie")]),a._v(" "),t("p",[a._v("您可以从保存的搜索中构建可视化文件，也可以输入新的搜索条件。要输入新的搜索条件，首先需要选择一个索引模式来指定要搜索的索引。")]),a._v(" "),t("p",[a._v("默认搜索匹配所有文档。最初，一个“切片”包含整个饼图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-pie-1.png",alt:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-pie-1.png"}})]),a._v(" "),t("p",[a._v("要指定在图表中展示哪些数据，请使用Elasticsearch存储桶聚合。分组汇总只是将与您的搜索条件相匹配的文档分类到不同的分类中，也称为分组。")]),a._v(" "),t("p",[a._v("为每个范围定义一个存储桶：")]),a._v(" "),t("ol",[t("li",[a._v("单击 "),t("code",[a._v("Split Slices")]),a._v("。")]),a._v(" "),t("li",[a._v("在 "),t("code",[a._v("Aggregation")]),a._v(" 列表中选择 "),t("code",[a._v("Terms")]),a._v("。"),t("em",[a._v("注意：这里的 Terms 是 Elk 采集数据时定义好的字段或标签。")])]),a._v(" "),t("li",[a._v("在 "),t("code",[a._v("Field")]),a._v(" 列表中选择 "),t("code",[a._v("level.keyword")]),a._v("。")]),a._v(" "),t("li",[a._v("点击 "),t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/6.1/images/apply-changes-button.png",alt:"images/apply-changes-button.png"}}),a._v(" 按钮来更新图表。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/3101171-7fb2042dc6d59520.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("完成后，如果想要保存这个图表，可以点击页面最上方一栏中的 "),t("code",[a._v("Save")]),a._v(" 按钮。")]),a._v(" "),t("h3",{attrs:{id:"vertical-bar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vertical-bar"}},[a._v("#")]),a._v(" Vertical Bar")]),a._v(" "),t("p",[a._v("我们在展示一下如何创建柱状图。")]),a._v(" "),t("ol",[t("li",[a._v("点击蓝色的 "),t("code",[a._v("Create a visualization")]),a._v(" 或 "),t("code",[a._v("+")]),a._v(" 按钮。选择 "),t("code",[a._v("Vertical Bar")])]),a._v(" "),t("li",[a._v("选择索引模式。由于您尚未定义任何 bucket ，因此您会看到一个大栏，显示与默认通配符查询匹配的文档总数。")]),a._v(" "),t("li",[a._v("指定 Y 轴所代表的字段")]),a._v(" "),t("li",[a._v("指定 X 轴所代表的字段")]),a._v(" "),t("li",[a._v("点击 "),t("img",{attrs:{src:"https://www.elastic.co/guide/en/kibana/6.1/images/apply-changes-button.png",alt:"images/apply-changes-button.png"}}),a._v(" 按钮来更新图表。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/3101171-5aa7627284c19a56.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("完成后，如果想要保存这个图表，可以点击页面最上方一栏中的 "),t("code",[a._v("Save")]),a._v(" 按钮。")]),a._v(" "),t("h2",{attrs:{id:"dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[a._v("#")]),a._v(" Dashboard")]),a._v(" "),t("p",[t("code",[a._v("Dashboard")]),a._v(" 可以整合和共享 "),t("code",[a._v("Visualize")]),a._v(" 集合。")]),a._v(" "),t("ol",[t("li",[a._v("点击侧面导航栏中的 Dashboard。")]),a._v(" "),t("li",[a._v("点击添加显示保存的可视化列表。")]),a._v(" "),t("li",[a._v("点击之前保存的 "),t("code",[a._v("Visualize")]),a._v("，然后点击列表底部的小向上箭头关闭可视化列表。")]),a._v(" "),t("li",[a._v("将鼠标悬停在可视化对象上会显示允许您编辑，移动，删除和调整可视化对象大小的容器控件。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);