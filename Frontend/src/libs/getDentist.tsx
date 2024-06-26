
export default async function getDentist(id:string) {
    await new Promise( (resolve)=> setTimeout(resolve, 1000))
    const response = await fetch(`https://swdevprac2-project-this-is-my-kingdom-come-backend.vercel.app/api/v1/dentists/${id}`, {
        method: 'GET'
    })
    if (!response.ok) {
        throw new Error("Failed to fetch dentist")
    }

    return await response.json()
}