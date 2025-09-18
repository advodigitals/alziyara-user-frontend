import api from "../axios";

export const handleAllPackageDisplay = async (type) => {
    try {
        const { data } = await api.get(`/packages/get?type=${type}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

export const handlePackageSearch = async (key) => {
    try {
        const { data } = await api.get(`/packages/search/${key}`)
        return data
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}


    // const { data } = await api.get(`/packages/get?type=${type !== undefined ? type : ''}`)