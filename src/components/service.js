import {create} from "axios"

const http = create({
    baseURL: "https://ecommerce-7-api.itpark.edu.kg/api",
    headers: {
        "Content-type": "application/json"
    }
})

class Service {
    getProduct = async () => {
        const res = await http.get('/products/')
        return res.data
    }
}

const service = new Service();

export default service;