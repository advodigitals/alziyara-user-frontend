import api from "../axios";

export const handleAllPackageDisplay = async (packages) => {
    try {
        const { data } = await api.get('/packages/get')
        return data
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;

    }

}
