import { FunctionComponent, useState } from 'react'
import cls from './Counter.module.scss'
interface CounterProps {}

export const Counter: FunctionComponent<CounterProps> = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={cls.Counter}>
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default Counter
