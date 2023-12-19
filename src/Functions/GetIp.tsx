import axios from 'axios';

export default async function GetIp(): Promise<string> {
    const res = await axios.get("https://api.ipify.org/?format=json");
    return res.data.ip; 
}