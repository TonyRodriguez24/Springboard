
// let url = 'https://swapi.co/api/planets/1'
// let ourFirstPromise = axios.get(url)
//     .then(res => {
//         axios.get(res.data.residents[0])
//             .then(res => {
//                 console.log(res)
//             })
//             .catch(err => {
//                 console.log('error', err)
//             })
//     })
//     .catch()

let url = 'https://swapi.co/api/planets/1'

axios.get(url)
    .then(res => {
        console.log('first')
        console.log(res.data)
        return axios.get(res.data.residents[0])
    })
    .then(res => {
        console.log('second')
        console.log(res.data)
        return axios.get(res.data.films[0])
    })
    .then(res => {
        console.log('third')
        console.log(res.data)
    })
    .catch(err => console.log(err))