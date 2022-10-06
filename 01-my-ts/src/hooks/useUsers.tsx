import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api';
import { ReqResList, User } from '../interfaces';

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);

    useEffect(() => {
        // Calling API
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await reqResApi.get<ReqResList>('/users', {
        params: {
            page: pageRef.current
        }
        });

        if(response.data.data.length > 0){
            setUsers( response.data.data );
        } else {
            pageRef.current --;
            console.log("There aren't more users");
        }
    }

    const nextPage = () => {
        pageRef.current ++;
        getUsers();
    }

    const previousPage = () => {
        if(pageRef.current > 1){
            pageRef.current --;
            getUsers();
        }
    }

    return {
        users,
        nextPage,
        previousPage,
    }
}
