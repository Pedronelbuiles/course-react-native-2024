import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IReqResUserListResponse, IUser } from '../interfaces'

const loadUsers = async ():Promise<IUser[]> => {
    try {
        const { data } = await axios.get<IReqResUserListResponse>('https://reqres.in/api/users')
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const UsersPage = () => {
    const [usersSate, setUsersSate] = useState<IUser[]>([])

    useEffect(() => {
      loadUsers()
        .then( users => setUsersSate(users))
    }, [])
    

  return (
    <>
        <h3>Usuarios:</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersSate.map(user => (
                        <tr>
                            <td>
                                <img src={user.avatar} />
                            </td>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
