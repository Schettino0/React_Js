import stock from "../data/MOCK_DATA.json"

export const pedirDatosPorID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = stock.find((el)=> el.id == id)
            if(item){
                resolve(item)
            } else{
                reject({
                    error: 'No se encontro ese producto.'
                })
            }
            resolve(stock)
        }, 500)
    })
}
