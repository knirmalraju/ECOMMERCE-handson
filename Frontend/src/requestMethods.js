import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQwMTM2N2M0YWRmNGE0NThmMWEwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzU2MDkzNCwiZXhwIjoxNjQzODIwMTM0fQ.nr-BIHhN2UvpkuCcgucHA7M5Es6ieicEGjuDbfRqB8M";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});