import api from "../axios"


export const handleAllPackageDisplay = async () => {
    try {
        const data = await api.get(`/umrah-hajj/get`)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const handleAllUmrahHajjPackageDisplay = async (slug) => {
    try {
        const data = await api.get(`/umrah-hajj/get?name=${slug}`)
        // console.log(data,"data")
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}