const Tsdemo: React.FC = () => {
  // ======================= TS中的类 =======================
  // 类本身也是一种类型，extends继承类，implement实现类
  // 公有私有，只读，被保护，抽象类（只用用基类），存取器，静态属性（这个就不是实例身上的属性，不能this.xxx，直接User.xxx）
  // ======================= demo1 =======================
  // type就是个类型别名，常用于联合类型
  // Object代表所有拥有 toString、hasOwnProperty 方法的类型,所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
  // !: 和!. 确定赋值断言和非空断言其实没啥用，在eslint下其实也会warning
  // ======================= demo2 =======================
  // 不能把unknown赋给其他类型
  // let a: unknown = 10
  // a = 100
  // console.log(a)
  // let b = 10
  // b = a
  // ======================= demo3 =======================
  // 接口定义函数
  // interface iFun {
  //   (str: string): boolean
  // }
  // const a: iFun = (str: string) => {
  //   return !str
  // }
  // a('1')
  // ======================= demo4 =======================
  // 函数重载
  // function add(a: number): number
  // function add(a: string): string
  // function add(a: unknown) {
  //   return a
  // }
  // console.log(add(1))
  // ======================= demo5 =======================
  // 一些关键字
  // 1.typeof
  // const p1 = {
  //   name: '树哥',
  //   age: 18,
  //   gender: 'male'
  // }
  // type People = typeof p1
  // 2.keyof 可以用来获取一个对象接口中的所有 key 值
  // function getProperty<T, K extends keyof T>(obj: T, key: K) {
  //   return obj[key]
  // }
  // const x = { a: '100' }
  // getProperty(x, 'a')
  // 3. in
  // type Keys = 'a' | 'b' | 'c'
  // type Obj = {
  //   [p in Keys]: any
  // } // -> { a: any, b: any, c: any }
  // 4.infer 声明一个类型变量并且对它进行使用

  // 2.this 显示指定
  // ======================= demo6 =======================
  // 泛型变量/泛型接口
  return (
    <>
      <h1>TS DEMO</h1>
    </>
  )
}
export default Tsdemo
