const BASE_URL = 'https://reqres.in/api/users?';

export async function apiGet(page) {
    const users = await fetch(`${BASE_URL}page=${page}`).then(res => res.json()).catch((err) => { console.log("Fetching data unsuccessful - ", err.message) });
    return users
}