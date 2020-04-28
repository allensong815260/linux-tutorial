(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{411:function(e,a,t){"use strict";t.r(a);var s=t(10),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kafka-安装部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-安装部署"}},[e._v("#")]),e._v(" Kafka 安装部署")]),e._v(" "),t("blockquote",[t("p",[e._v("环境要求：")]),e._v(" "),t("ul",[t("li",[e._v("JDK8")]),e._v(" "),t("li",[e._v("ZooKeeper")])])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%8B%E8%BD%BD%E8%A7%A3%E5%8E%8B"}},[e._v("下载解压")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[e._v("启动服务器")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%81%9C%E6%AD%A2%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[e._v("停止服务器")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%BB%E9%A2%98"}},[e._v("创建主题")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E7%94%9F%E4%BA%A7%E8%80%85%E7%94%9F%E4%BA%A7%E6%B6%88%E6%81%AF"}},[e._v("生产者生产消息")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E6%B6%88%E8%B4%B9%E8%80%85%E6%B6%88%E8%B4%B9%E6%B6%88%E6%81%AF"}},[e._v("消费者消费消息")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2"}},[e._v("集群部署")])])]),e._v(" "),t("h2",{attrs:{id:"下载解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载解压"}},[e._v("#")]),e._v(" 下载解压")]),e._v(" "),t("p",[e._v("进入官方下载地址：http://kafka.apache.org/downloads，选择合适版本。")]),e._v(" "),t("p",[e._v("解压到本地：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> tar -xzf kafka_2.11-1.1.0.tgz\n> cd kafka_2.11-1.1.0\n")])])]),t("p",[e._v("现在您已经在您的机器上下载了最新版本的 Kafka。")]),e._v(" "),t("h2",{attrs:{id:"启动服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务器"}},[e._v("#")]),e._v(" 启动服务器")]),e._v(" "),t("p",[e._v("由于 Kafka 依赖于 ZooKeeper，所以运行前需要先启动 ZooKeeper")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/zookeeper-server-start.sh config/zookeeper.properties\n[2013-04-22 15:01:37,495] INFO Reading configuration from: config/zookeeper.properties (org.apache.zookeeper.server.quorum.QuorumPeerConfig)\n...\n")])])]),t("p",[e._v("然后，启动 Kafka")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-server-start.sh config/server.properties\n[2013-04-22 15:01:47,028] INFO Verifying properties (kafka.utils.VerifiableProperties)\n[2013-04-22 15:01:47,051] INFO Property socket.send.buffer.bytes is overridden to 1048576 (kafka.utils.VerifiableProperties)\n...\n")])])]),t("h2",{attrs:{id:"停止服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止服务器"}},[e._v("#")]),e._v(" 停止服务器")]),e._v(" "),t("p",[e._v("执行所有操作后，可以使用以下命令停止服务器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ bin/kafka-server-stop.sh config/server.properties\n")])])]),t("h2",{attrs:{id:"创建主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建主题"}},[e._v("#")]),e._v(" 创建主题")]),e._v(" "),t("p",[e._v("创建一个名为 test 的 Topic，这个 Topic 只有一个分区以及一个备份：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test\n")])])]),t("h2",{attrs:{id:"生产者生产消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产者生产消息"}},[e._v("#")]),e._v(" 生产者生产消息")]),e._v(" "),t("p",[e._v("运行生产者，然后可以在控制台中输入一些消息，这些消息会发送到服务器：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test\nThis is a message\nThis is another message\n")])])]),t("h2",{attrs:{id:"消费者消费消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者消费消息"}},[e._v("#")]),e._v(" 消费者消费消息")]),e._v(" "),t("p",[e._v("启动消费者，然后获得服务器中 Topic 下的消息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning\nThis is a message\nThis is another message\n")])])]),t("h2",{attrs:{id:"集群部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群部署"}},[e._v("#")]),e._v(" 集群部署")]),e._v(" "),t("p",[e._v("复制配置为多份（Windows 使用 copy 命令代理）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> cp config/server.properties config/server-1.properties\n> cp config/server.properties config/server-2.properties\n")])])]),t("p",[e._v("修改配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("config/server-1.properties:\n    broker.id=1\n    listeners=PLAINTEXT://:9093\n    log.dir=/tmp/kafka-logs-1\n\nconfig/server-2.properties:\n    broker.id=2\n    listeners=PLAINTEXT://:9094\n    log.dir=/tmp/kafka-logs-2\n")])])]),t("p",[e._v("其中，broker.id 这个参数必须是唯一的。")]),e._v(" "),t("p",[e._v("端口故意配置的不一致，是为了可以在一台机器启动多个应用节点。")]),e._v(" "),t("p",[e._v("根据这两份配置启动三个服务器节点：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-server-start.sh config/server.properties &\n...\n> bin/kafka-server-start.sh config/server-1.properties &\n...\n> bin/kafka-server-start.sh config/server-2.properties &\n...\n")])])]),t("p",[e._v("创建一个新的 Topic 使用 三个备份：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 1 --topic my-replicated-topic\n")])])]),t("p",[e._v("查看主题：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic my-replicated-topic\nTopic:my-replicated-topic   PartitionCount:1    ReplicationFactor:3 Configs:\n    Topic: my-replicated-topic  Partition: 0    Leader: 1   Replicas: 1,2,0 Isr: 1,2,0\n")])])]),t("ul",[t("li",[e._v("leader - 负责指定分区的所有读取和写入的节点。每个节点将成为随机选择的分区部分的领导者。")]),e._v(" "),t("li",[e._v("replicas - 是复制此分区日志的节点列表，无论它们是否为领导者，或者即使它们当前处于活动状态。")]),e._v(" "),t("li",[e._v("isr - 是“同步”复制品的集合。这是副本列表的子集，该列表当前处于活跃状态并且已经被领导者捕获。")])]),e._v(" "),t("h2",{attrs:{id:"更多内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多内容"}},[e._v("#")]),e._v(" 更多内容")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("引申")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/dunwu/OS",target:"_blank",rel:"noopener noreferrer"}},[e._v("操作系统、运维部署总结系列"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);