import axios from "../../../lib/axios";

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'PUT') {
        try{
            const response = await axios.put(`/api/customers/${id}`, req.body, {
                headers: {...req.headers}
            });
            res.status(200).json({ message: response.data.message });
        }catch(error){
            console.log(error);
            res.status(error.response.status).json({ message: error.response.data.message});
        }
    } else if (req.method === 'DELETE') {
        try{
            const response = await axios.delete(`/api/customers/${id}`, {
                headers: {...req.headers}
            });
            res.status(200).json({ message: response.data.message });
        }catch(error){
            res.status(error.response.status).json({ message: "Server Error"});
        }
    }
}
