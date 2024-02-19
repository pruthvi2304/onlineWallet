import { useState, useEffect } from "react"
import { Button } from "./Button"
import { InputBox } from "./InputBox";
import { useDebounce } from "../Hooks/CustomHooks";
import { useNavigate } from "react-router-dom";
import { Balance } from "./Balance";
import axios from "axios";

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [seachUser, setSeachUser] = useState('');
    const [userBalance, setUserBalance] = useState('');
    const debouncedValue = useDebounce(seachUser, 500);
    useEffect(() => {
            axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + debouncedValue).
            then((response) =>
                setUsers(response.data.user)
            );  
    }, [debouncedValue]);

    return <>
        <div className="font-bold mt-6 text-lg">
            <Balance value={"10000"} />
        </div>
        <InputBox id="searchUser" name="searchUser" type="text" placeholder="Search users..." onChange={(e) => {
            setSeachUser(e.target.value);
        }} />  
        <div className="my-10">
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName + " " + user.lastName);
            }} />
        </div>
    </div>
}