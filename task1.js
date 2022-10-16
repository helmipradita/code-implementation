const palindrome = (str) => {
    let string = str.toLowerCase().split('')
    let newArr = string.join('')
    let reverseArr = [...newArr].reverse().join('')

    if(newArr === reverseArr){
        console.log(`palindrom`)
    } else {
        console.log(`tidak palindrom`)
    }
}
palindrome('Malam')

const reverse = (str) => {
    let string = str.split(' ').reverse().join(' ')
    console.log(string)
}
reverse('Saya belajar Javascript')