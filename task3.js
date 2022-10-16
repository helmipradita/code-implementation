const divideAndSort = (angka) => {
    const hasil = angka.toString().split(0)
                        .map((num) => num.split('').sort().join(''))
                        .join('')

    console.log(parseInt(hasil))
}

divideAndSort(5956560159466056)