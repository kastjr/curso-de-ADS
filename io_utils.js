import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function loadFile(file){
    try{
        const data = fs.readFileSync(file, 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}
