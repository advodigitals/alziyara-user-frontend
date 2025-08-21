import api from "../axios";

export const handleAllPackageDisplay = async (slug) => {
    try {
        const { data } = await api.get(`/packages/get?name=${slug !== undefined ? slug : ''}`)
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
