(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" Docker Compose")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("compose"),a("OutboundLink")],1),t._v(" 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 "),a("code",[t._v("OpenStack")]),t._v(" 中的 "),a("code",[t._v("Heat")]),t._v(" 十分类似。")])]),t._v(" "),a("h2",{attrs:{id:"一、compose-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、compose-简介"}},[t._v("#")]),t._v(" 一、Compose 简介")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("Compose")]),t._v(" 的定位是：定义和运行多个 Docker 容器的应用")]),t._v("。 使用一个 "),a("code",[t._v("Dockerfile")]),t._v(" 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。")]),t._v(" "),a("p",[a("code",[t._v("Compose")]),t._v(" 恰好满足了这样的需求。它允许用户通过一个单独的 "),a("code",[t._v("docker-compose.yml")]),t._v(" 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。")]),t._v(" "),a("p",[a("code",[t._v("Compose")]),t._v(" 中有两个重要的概念：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("服务 ("),a("code",[t._v("service")]),t._v(")")]),t._v("：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")]),t._v(" "),a("li",[a("strong",[t._v("项目 ("),a("code",[t._v("project")]),t._v(")")]),t._v("：由一组关联的应用容器组成的一个完整业务单元，在 "),a("code",[t._v("docker-compose.yml")]),t._v(" 文件中定义。")])]),t._v(" "),a("p",[a("code",[t._v("Compose")]),t._v(" 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。")]),t._v(" "),a("h2",{attrs:{id:"二、安装卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装卸载"}},[t._v("#")]),t._v(" 二、安装卸载")]),t._v(" "),a("p",[a("code",[t._v("Compose")]),t._v(" 支持 Linux、macOS、Windows10 三大平台。")]),t._v(" "),a("p",[t._v("Linux 安装方式：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/local/bin/docker-compose\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n")])])]),a("blockquote",[a("p",[t._v("🔔 详情请参考："),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker Compose"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"三、快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、快速入门"}},[t._v("#")]),t._v(" 三、快速入门")]),t._v(" "),a("h3",{attrs:{id:"web-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-应用"}},[t._v("#")]),t._v(" web 应用")]),t._v(" "),a("p",[t._v("新建文件夹，在该目录中编写 "),a("code",[t._v("app.py")]),t._v(" 文件")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Flask\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" redis "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Redis\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nredis "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("incr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hits'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World! 该页面已被访问 {} 次。\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),a("p",[t._v("编写 "),a("code",[t._v("Dockerfile")]),t._v(" 文件，内容为")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" pip install redis flask\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.py"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("p",[t._v("编写 "),a("code",[t._v("docker-compose.yml")]),t._v(" 文件，这个是 Compose 使用的主模板文件。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5000:5000"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redis:alpine"')]),t._v("\n")])])]),a("h3",{attrs:{id:"运行-compose-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-compose-项目"}},[t._v("#")]),t._v(" 运行 compose 项目")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker-compose up\n")])])]),a("p",[t._v("此时访问本地 "),a("code",[t._v("5000")]),t._v(" 端口，每次刷新页面，计数就会加 1。")]),t._v(" "),a("h2",{attrs:{id:"四、命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、命令"}},[t._v("#")]),t._v(" 四、命令")]),t._v(" "),a("blockquote",[a("p",[t._v("🔔 请参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Compose 官方命令说明文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/compose/commands.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Compose 命令说明中文文档"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"五、模板文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、模板文件"}},[t._v("#")]),t._v(" 五、模板文件")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("docker-compose.yml")]),t._v(" 文件是 Docker Compose 的模板文件，其作用类似于 Dockerfile 和 Docker。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/compose/env-file/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose.yml 支持的默认环境变量官方文档"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("官方")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose 官方文档"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("strong",[t._v("教程")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/compose/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker — 从入门到实践 - Docker Compose 项目"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);