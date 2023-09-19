import AxiosInstance from "../AxiosIntance/AxiosInstance";
export const getDate = async () => {
    const respone = await AxiosInstance().get('/date');
    return respone;
}
export const getDatedetail = async (id) => {
    const respone = await AxiosInstance().get(`/bida/detail/date?iddate=${id}`);
    return respone.data;
};