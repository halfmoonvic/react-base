### 一、 ReactDOM.render()
1. ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

### 二、 JSX 的基本语法规则
1. jsx 是一种语法(html也是一种语法），通过它来书写 React 元素。
2. JSX 的基本语法规则：遇到 HTML 标签（以 <strong style="color:red"><</strong> 开头），就用 HTML 规则解析；遇到代码块（以 <strong style="color:red">{</strong> 开头），就用 JavaScript 规则解析。
3. html 当中的 class 书写成 className
### 三、 React.createElement
1. createElemen 很像DOM本身的document.createElement函数，我们可以使用它来创建标签元素
2. 其第一个参数标识标签类型
3. React.createElement 第二个参数是一个对象，最后生成的是 html元素的 属性
4. React.createElement 第三个参数是该元素的内容，文本或者其它标签元素。
5. React.createElement 的执行过程就是 创建 React 元素的过程，这与我们 平日书写的 `<li></li>` 很相像了
6. React 元素仅仅是 JavaScript 简单对象(plain old JavaScript objects)，用来描述组件的 HTML 应是怎样的结构，
```
var helloWorld = React.createElement(
  "div",
  {className: "cls"},
  "Hello World!"
)
var helloWorld = <div className="cls">Hello World</div>
```

### 四、 组件类
1. 组件名称以大写字母开头。 这是必需的，因为我们将处理HTML元素和React元素的混合。 小写名称保留给HTML元素。 事实上，请继续尝试将React组件命名为“button”
2. Hello 就是一个组件类。模板插入 <Hello /> （<Hello></Hello>)时，会自动生成 Hello 的一个实例（**"组件"都指组件类的实例**）。所有组件类都必须有自己的 render 方法，用于输出组件。组件类的第一个字母必须大写。另外，组件类只能包含一个顶层标签，否则也会报错。

### 五、 `this.state`
* 组件本地值 初始状态定义 需在 constructor 当中进行
```
constructor(props) {
  super(props)
  this.state = {
    initState: '初始值'
  }
}
```
* `state 的修改`
```
this.setState({
  initState: '新值'
})
```

### 六、 `this.props`
1. 组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取。this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
2. 个人理解，props 传值，与我们平常使用 的 document.getElementById('selector').value 性质并无二致。 this.props 相当于获取的目标对象，key 值既是声明在实例上的各种属性
3. 在react当中 无论是 父子传值，还是子父传值，均是通过 props 这一媒介来进行的。父子传值不必多说。子父传值的时候，通过 this.props 拿到声明在实例上的函数，然后将参数传递给这个函数。这样，在声明这个函数的父组件当中就拿到了这个参数


### 七、 获取真实dom节点
1. 同 vue 差不多 （`this.$refs.XXX`)
2. `this.refs.XXX`，注意并没有 $ 符
3. 不同于 vue 的一点是，react对同名的引用仅引用最后一个被命名的元素 
4. 备注： document.querySelector 是返回第一个被引用的元素

### 八、 路由
1. Router 仅允许有一个子元素，路由均需在此元素下声明
2. Link 控制 url
3. Route 根据 url 加载相应的 component
4. Redirect 重定向路径致其它的路径
5. Switch 当 url 与 多个 Route 上多个 path 相匹配的时候，返回第一个返回的元素

### 九、 生命周期
[生命周期](https://zhuanlan.zhihu.com/p/24926575)
