import api from "../axios";

export const handleVisaCountry = async (type) => {
    try {
        const { data } = await api.get(`/visa/get?type=${type}`)
        return data
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

export const handleVisaSearchCountry = async ({ type, search }) => {
    try {
        const { data } = await api.get(`/visa/search/${type}/${search}`)
        return data
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}