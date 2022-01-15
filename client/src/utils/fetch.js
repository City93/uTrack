const axios = require('axios')

const fetchData = async (uri) =>{
    const data = await axios.get(uri)
    return data.data
}

module.exports =  fetchData