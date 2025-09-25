import useUsers from "./useUsers";
const Usuarios = () => {
  const { users, changeLevel } = useUsers();

  return (
    <div className="mt-5 p-4">
      <h1>Usuarios</h1>

      {console.log("users: ", users)}

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Level</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={()=>changeLevel(1,user._id)} className={`btn ${user.level === 1 ? 'btn-success' : 'btn-light'}`}> Admin </button>
                <button onClick={()=>changeLevel(2,user._id)} className={`btn ${user.level === 2 ? 'btn-success' : 'btn-light'}`}> Agent </button>
                <button onClick={()=>changeLevel(3,user._id)} className={`btn ${user.level === 3 ? 'btn-success' : 'btn-light'}`}> Client </button>
              </td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios
