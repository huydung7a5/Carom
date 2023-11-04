import AxiosInstance from "./AxiosInstance";
export const getDate = async () => {
    const respone = await AxiosInstance().get('/date');
    return respone;
}
export const getbida = async () => {
    const respone = await AxiosInstance().get('/bida');
    return respone;
}
export const addimg = async (formdata) => {
    const respone = await AxiosInstance('multipart/form-data').post('/image/upload', formdata);
    return respone;
}
