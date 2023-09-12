import AxiosInstance from "./AxiosInstance";
export const getdate = async () => {
    const respone = await AxiosInstance().get('/date');
  //  console.log("respone date" + respone);
    return respone.data;
}

export const getbida = async () => {
    const respone = await AxiosInstance().get('/bida');
 //   console.log("respone bida" + respone);
    return respone.data;
}
