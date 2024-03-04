import axios from "axios";
import Image from "next/image";


async function getuserDetails() {
//await new Promise((r)=>setTimeout(r,5000));
const response = await axios.get("http://localhost:3000/api/user");
return response.data;  
}

export default async function Home() {
const userdetails = await getuserDetails()
return (
<div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userdetails?.name}
                </div>
                Email:
                {userdetails?.email}
            </div>
        </div>
    </div>
);
}
