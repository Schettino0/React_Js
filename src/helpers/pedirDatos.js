import stock from "../data/MOCK_DATA.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 500)
    })
}
