import useUserStore from "../store/userStore"

const User = () => {

    const {user,setUser} = useUserStore()

    return (<>
    user
        {user}
        <br/>
        <button onClick={()=>setUser('Manuel')}> Manuel </button>
        <button onClick={()=>setUser('json')}> Json </button>


    </>)
}
export default User