import { fetchConToken } from "../../../helpers/fetch";


export const getItems = async( from: number, to: number ) => {

    console.log(from, to)

    const resp =  await fetchConToken( `almacen/items?from=${from}&to=${to}` );

    return resp.data;
}