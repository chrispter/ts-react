import { User } from "../interfaces";
import { useUsers } from '../hooks/useUsers';

export const Users = () => {

  const { nextPage, previousPage, users } = useUsers();

  const renderItem = ( user: User ) => {
    const { avatar, email, first_name, id } = user;
    return (
      <tr key={ id.toString() }>
        <td>
          <img 
            src={ avatar } 
            alt={ first_name } 
            style={{
              width: 35,
              borderRadius: 100
            }}  
          />
        </td>
        <td>{ first_name }</td>
        <td>{ email }</td>
      </tr>
    )
  };

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          { users.map( user => renderItem(user) )}
        </tbody>
      </table>
      <button 
        className='btn btn-primary'
        onClick={ previousPage }  
      >Previous Users</button>
      <button 
        className='btn btn-primary'
        onClick={ nextPage }  
      >Next Users</button>
    </>

  )
}
