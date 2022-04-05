/*
将文字版本的目录解析为树结构，尽量保证代码的可读性，处理边缘 Case，自己编写测试用例进行验证。
文字版目录以缩进来决定目录层级，两个空格为一个层级的缩进。缩进后以 '- ' 开头。

// Example 1
- 章节一
  - 标题一
    - 子标题一
  - 标题二
- 章节二
- 标题一
- 标题二

=>
[
  {
    "value": "章节一",
    "level": 0,
    "children": [
      {
        "value": "标题一",
        "level": 1,
        "children": [
          {
            "value": "子标题一",
            "level": 2,
            "children": []
          }
        ]
      },
      {
        "value": "标题二",
        "level": 1,
        "children": []
      }
    ]
  },
  {
    "value": "章节二",
    "level": 0,
    "children": [
      {
        "value": "标题一",
        "level": 1,
        "children": []
      },
      {
        "value": "标题二",
        "level": 1,
        "children": []
      }
    ]
  }
]

// Example 2
- 新手指引
  - 语雀是什么
  - 为什么选择语雀
  - 语雀数据安全
- 基础
  - 如何注册语雀
  - 帐户设置
  - 语雀会员
  - 文档知识库
    - 如何新建文档和表格
    - 如何进行保存或发布
    - 历史版本

=>
[
  {
    "value": "新手指引",
    "level": 0,
    "children": [
      {
        "value": "语雀是什么",
        "level": 1,
        "children": []
      },
      {
        "value": "为什么选择语雀",
        "level": 1,
        "children": []
      },
      {
        "value": "语雀数据安全",
        "level": 1,
        "children": []
      }
    ]
  },
  {
    "value": "基础",
    "level": 0,
    "children": [
      {
        "value": "如何注册语雀",
        "level": 1,
        "children": []
      },
      {
        "value": "帐户设置",
        "level": 1,
        "children": []
      },
      {
        "value": "语雀会员",
        "level": 1,
        "children": []
      },
      {
        "value": "文档知识库",
        "level": 1,
        "children": [
          {
            "value": "如何新建文档和表格",
            "level": 2,
            "children": []
          },
          {
            "value": "如何进行保存或发布",
            "level": 2,
            "children": []
          },
          {
            "value": "历史版本",
            "level": 2,
            "children": []
          }
        ]
      }
    ]
  }
]
*/

class Node {
    constructor({ value, level }) {
        this.value = value;
        this.level = level;
        this.children = [];
        // hint: 也可在数据结构中增加 this.parent 节点辅助解析
    }
}
function parseTree(text) {
    let textObj = {}
    let Children = () => {
        for(let item of text) {
            if(item === "-") {
                Node.value = readline()
                Node.level = readline()
                Node.children
            }
            forEach(item)
        }
    }
}
