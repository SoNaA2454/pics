import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID m9tzsjENQCmNyuc7aoLvLpZ2FK9HwuMeb3_Fu6P9mqo'
    }
});