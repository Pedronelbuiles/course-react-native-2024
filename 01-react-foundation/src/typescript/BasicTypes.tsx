
export const BasicTypes = () => {

    const name: string = 'Pedro Nel Builes'
    const age: number = 29
    const isActive: boolean = true
    const powers: string[] = ['React', 'ReactNative', 'Angular', 'Java', 'Node']

    powers.push('Nextjs')

  return (
    <>
        <h3>Basic Types</h3>
        { name } {age} {isActive ? 'true' : 'false'}
        <br />
        {powers.join(', ')}
    </>
  )
}
