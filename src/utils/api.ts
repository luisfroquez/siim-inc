import axios from 'axios';
import { SHA256 } from "crypto-js";
import objectToQueryParams from "./objectToQueryParams"

const utcTimestamp = new Date().toISOString();

function encrypt(texto) {
    const hash = SHA256(texto).toString();
    return hash;
}

const signature = encrypt(`${process.env.NEXT_PUBLIC_API_KEY},${process.env.NEXT_PUBLIC_ACCESS_KEY},${utcTimestamp}`);

const token = `apiKey=${process.env.NEXT_PUBLIC_API_KEY}&utcTimeStamp=${utcTimestamp}&signature=${signature}`;


export const fetchApiData = async (endpoint, queryParams) => {

    const hasQueryParams = Object.entries(queryParams ?? {})?.length > 0;

    const query = hasQueryParams ? `?${objectToQueryParams(queryParams)}` : "";

    console.log('pase')

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IWS_TEST_API_URL}/${endpoint}${query}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'API Error');
    }
};