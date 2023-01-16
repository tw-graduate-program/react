# Assignment TODO React TDD

## 简介
本次 assignment 的目标是引入 React、UI 集成测试、组件测试，以 TDD 的方式实现 Todo React Application。

## 需求说明
需求说明请查看 [需求说明.md](需求说明.md)   
需求变更提醒：对于新增的 todo 是否显示在第一个位，本次不做要求。

## 技术实现要求
- React
  - 使用 React
  - 组件内部状态管理使用 React Hooks
  - 全局状态管理库使用 Context + useReducer hooks
- TDD
  - 编码开始前，介绍 Tasking 结果，并记录在录屏中
  - 遵守 TDD Cycle：Red -> Green -> Refactoring
  - 遵守 The 3 Laws of TDD
  - 小步提交
  - 遵循
    - 核心业务需求的实现采用： UI integration Test Drive Development
    - 业务细节的实现采用： Unit / Component Test Drive Development
    - 重构出来的代码： 按需加上单元测试
- 使用常用快捷键，包括但不限于以下几种
  - 1. 切换最近修改文件（Mac: ⌘ + E / Windows: Ctrl + E）
  - 2. 补全代码（Mac: ⌥ + Enter / Windows: Alt + Enter）
  - 3. 提取变量 （Mac: ⌘ + ⌥ + V / Windows: Ctrl + Alt + V）
  - 4. 提取常量 （Mac: ⌘ + ⌥ + V / Windows: Ctrl + Alt + C）
  - 5. 提取方法 （Mac: ⌘ + ⌥ + M / Windows: Ctrl + Alt + M）
  - 6. 格式化代码 (Mac: ⌘ + ⌥ + L / Windows: Ctrl + Alt + L)
- CSS 样式的要求优先级最低

**现在是学习阶段，我们是在“刻意练习”。不管要实现的需求或任务有多么简单，请按照上述要求实现需求。**

## 录屏要求
录屏中请包含以下内容
- 简要介绍 Tasking 的结果
- 至少保证 **一个功能的 TDD 过程 (coach demo 之外的需求，比如删除或者修改 task)** 出现在录屏中，包含 UI 集成测试、组件测试

另外，大家在本次录屏中可以适当减少解说的时间，只需说明当前要开始或者正在进行的步骤即可，不用像 coach 在 demo 中那样“啰嗦”

## 提交要求
- 请在建议的完成时间内提交，提交时请确保录屏也已完成；
- 通过金数据表单提交 assignment，提交成功后会收到系统通知；
- 批改 assignment 会使用提交时间点所对应的版本，请务必在确认无误后再进行提交；
- 获取录屏的具体方式请写在 RECORDING.md 文件中，确保 buddy/coach 能够访问；
- 本次 assignment 录屏时长需在 90 分钟以内；

## 提交要求
- 请在建议的完成时间内提交，提交时请确保录屏也已完成；
- 通过金数据表单提交 assignment，提交成功后会收到系统通知；
- 批改 assignment 会使用提交时间点所对应的版本，请务必在确认无误后再进行提交；
- 获取录屏的具体方式请写在 RECORDING.md 文件中，确保 buddy/coach 能够访问；

## 评分标准
Buddy 会根据以下指导规则对大家本次的 assignment 进行评级。

**特别提醒：**

本次的 assignment 只是为了帮助大家了解自己的学习情况，不是为了考试评级，请大家不要有过多的心理负担。  
给出一个明确的评级指导规则，是为了一方面让 buddy 们尽量能够统一标准。另一方面，也让大家能够明确目标。  
对于初学者而言，能在学完当前 Step 后：  
- 做到 Level-1 👉🏻 不错喽
- 做到 Level-2 👉🏻 很好
- 做到 Level-3 👉🏻 Fantastic!

### Level-0
1. 无法满足 Level-1 的所有要求时，则为 Level-0。

### Level-1
1. 在录屏的开始展示并简要介绍 tasking 结果
2. 正确通过 npm 安装依赖，启动前端服务和 json-server
3. 至少完成 list、add 功能
4. 符合技术实现要求一节所列要求
5. 有测试，但不一定严格遵循 TDD Cycle 或 3 Laws
6. 小步提交
7. 正确使用 React 状态管理，数据流，生命周期

### Level-2
1. 完成所有要求的功能：list、add、update、delete
2. 有测试，且能基本做到遵循 TDD Cycle 或 3 Laws，即基本上总是测试先行（Test First）
3. TDD 过程中明确的体现出重构过程，但可以不够频繁或充分
4. 能够使用部分常用快捷键

### Level-3
1. 明确的体现出了频繁的 “快速实现” 和 “重构” 两个阶段的交替过程
2. UI 集成测试、组件测试，JS单元测试覆盖 case 较全，且测试 case 得到有效验证
3. 代码基本符合 Clean Code 要求
4. 大多数时候都使用快捷键

## 前端环境准备

### 下载依赖

```bash
npm install
```

### 运行网站

请执行如下代码运行网站并打开页面：

```bash
npm start
```
之后在浏览器中访问：http://localhost:3000

### 启动 Json Server

```
npm run server
```
启动 json server 后可以，可以使用以下 API
- 获取 tasks 数据:
```
  URL: 'http://localhost:8080/tasks'
  Method: GET
  Response status: 200
  Response body 示例: [{id: 1, name: 'xx', completed: false}, {id: 2, name: 'xx', completed: false}]
```
- 创建 task:
```
  URL: 'http://localhost:8080/tasks'
  Method: POST
  Request body 示例: {name: 'xx', completed: false}
  Response status: 201
  Response body 示例: {id: 1, name: 'xx', completed: false}
```
- 删除指定 id 的 task:
```
  URL: 'http://localhost:8080/tasks/${id}'
  Method: DELETE,
  Response status: 200
  Response body 示例: {}
```
- 修改指定 id 的 task:
```
  URL: 'http://localhost:8080/tasks/${id}'
  Method: PUT,
  Request body 示例: {name: 'xx', completed: false}
  Response status: 200
  Response body 示例: {id: 1, name: 'xx', completed: false}
```
