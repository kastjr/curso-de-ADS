import {input , print} from '../../../io_utils.js'

function main(){
    //join
    const today = input("Say today's date in dd/mm/aaaa:")
    const birthdate = input("Say your birth date in dd/mm/aaa:")
    const [day_t,mouth_t,year_t] = today.split('/').map(Number)
    const [day_b,mouth_b,year_b] = birthdate.split('/').map(Number)
    //execution
    const years = anos(year_t,year_b)
    print(`Your exact years old is ${years}`)

}

function anos(a,b){
    return a-b
}

main()