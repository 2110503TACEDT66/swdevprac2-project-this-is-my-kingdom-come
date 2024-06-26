
export default async function userRegister(name: string, email: string, password: string, tel: string) {

    const response = await fetch(`https://swdevprac2-project-this-is-my-kingdom-come-backend.vercel.app/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, password: password, tel: tel})
    })

    if (!response.ok) {
        throw new Error("Failed to register")
    }

    return await response.json()
}