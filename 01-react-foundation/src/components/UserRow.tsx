import { IUser } from "../interfaces"

interface IProps {
    user: IUser
}

export const UserRow = ({ user }: IProps) => {

    const { avatar, first_name, last_name, email } = user

  return (
    <tr>
        <td>
            <img style={{width: '50px'}} src={avatar} alt='User Avatar' />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
    </tr>
  )
}