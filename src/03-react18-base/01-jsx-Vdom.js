/*
  JSX 注意事项
    1. JSX 不是字符串，不需要加引号
    2. JSX 中，html标签应该小写，React组件应该大写开头
    3. JSX 中，有且只有一个根标签
    4. JSX 中，标签必须正确结束（自结束标签必须写： <input />   <img /> ）
    5. JSX 中，可以使用 {} 嵌入表达式
        有值的语句就是表达式
    6. 如果表达式是空值null，布尔值，undefined这些值，则不显示
    7. JSX 中，属性可以直接在标签中设置
        1. class属性需要使用 className 代替
        2. style 必须使用对象设置，样式名需要驼峰命名法
            style={{color: 'red;}}
        3. 事件名必须使用驼峰命名法
    8. JSX 中，会自动将数组中的元素在页面中显示
*/

/*
  虚拟DOM 

  在React中，我们操作的元素被称为React元素，并不是真正的原生DOM元素
    React通过虚拟DOM将React元素和原生DOM，进行映射；虽然操作的是React元素，但是这些操作最终都会在真实DOM中体现出来

    虚拟DOM的好处
      1. 降低API复杂度  （原生DOM的API复杂）
      2. 解决兼容问题   （IE、火狐、谷歌等是否支持某些方法）
      3. 提升性能       （页面发生变化时，减少DOM的不必要操作）

  每当我们调用 root.render()时，页面就会发生重新渲染
    React会通过Diff算法，将新的元素和旧的元素进行比较
    通过比较，找到发生变化的元素，并且只对变化的元素进行修改，没有发生变化的，不予处理

  比较新旧两组数据时，React会先比较父元素，父元素如果不同，直接所有元素全部替换
    父元素一致，再去逐个比较子元素，直到找到所有发生变化的元素为止

  当我们在JSX中显示数组时，数组中每一个元素都需要设置一个唯一的key，否则控制台会显示红色警告
    重新渲染页面时，React会按照顺序依次比较对应的元素，当渲染一个列表时，如果不指定key，同样也会按照顺序进行比较
    如果列表的顺序永远不发生变化，这么做当然没问题，但是如果列表的顺序会发生变化，则可能会导致性能问题出现

    React为列表设计了key属性，key的作用相当于ID，只是无法在页面中查看，
      当设置了key后，再比较元素时，就会比较相同key的元素，而不是按照顺序进行比较
        1. 开发中，一般会使用数据ID作为key
        2. 开发中，尽量避免使用索引index作为key
            索引会跟着元素顺序的变化而变化，设置是无效的

*/

/*
  props

  props是只读的，不能修改
  在组件间，父组件可以通过props（属性）向子组件传递数据

  在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
  可以在和函数组件的形参中，定义一个props, props指向的是一个对象
  它包含了父组件中传递的所有参数
*/
