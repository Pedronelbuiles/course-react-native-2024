
export const BasicFunctions = () => {

    const addTwoNumber = (a:number ,b: number): string => `${a + b}`

  return (
    <>
        <h3>Funtions</h3>
        <span>The result of sum: {addTwoNumber(8, 8)}</span>
    </>
  )
}
