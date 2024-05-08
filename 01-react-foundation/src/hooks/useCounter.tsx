import { useState } from "react"

interface IOptions {
    initialValue?: number
}

export const useCounter = ({initialValue = 0}: IOptions ) => {

    const [count, setCount] = useState<number>(initialValue)

    const increaseBy = (value: number): void => {
        const newValue: number = count + value
        if (newValue < 0) return
        setCount(newValue)
    }

  return {
    //properties
    count,

    //methods
    increaseBy
  }
}
