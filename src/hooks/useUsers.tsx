import { useEffect, useRef, useState } from 'react'
import { IReqResUserListResponse, IUser } from '../interfaces'
import axios from 'axios'

const loadUsers = async (page: number = 1):Promise<IUser[]> => {
    try {
        const { data } = await axios.get<IReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        })
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const useUsers = () => {

    const [usersSate, setUsersSate] = useState<IUser[]>([])
    const currentPageRef = useRef(1)

    useEffect(() => {
      loadUsers(currentPageRef.current)
        .then( setUsersSate )
    }, [])

    const nextPage = async () => {
        currentPageRef.current++
        const users = await loadUsers(currentPageRef.current)
        if (users.length > 0) {
            setUsersSate(users)
        } else {
            currentPageRef.current--
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) return

        currentPageRef.current--
        const users = await loadUsers(currentPageRef.current)

        setUsersSate(users)
    }

  return {
    //Properties
    usersSate,

    //methods
    nextPage,
    prevPage
  }
}
