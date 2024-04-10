
interface IPerson {
    firstName: string;
    lasName: string;
    age: number;
    address: IAdress;
    isRich?: boolean;
}

interface IAdress {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {

    const person: IPerson = {
        firstName: 'Pedro Nel',
        lasName: 'Builes Moreno',
        age: 29,
        address: {
            country: 'Colombia',
            houseNo: 52
        },
        isRich: true
    }

  return (
    <>
        <h3>Literal Objects</h3>
        <pre>
            { JSON.stringify(person, null, 2) }
        </pre>
    </>
  )
}
