const PijarFood = (harga, voucher, jarak, pajak) => {
    let potongan = 0
    let biayaAntar = 0
    let subTotal = 0

    jarak = jarak >= 2 ? biayaAntar = (jarak - 2) * 3000 + 5000 : biayaAntar = 5000

    pajak = pajak === true ? pajak = harga * 0.05 : pajak = 0

    if(voucher === 'PIJARFOOD5') {
        if(harga >= 50000) {
            potongan = harga * 0.5
            if(potongan <= 50000){
                potongan = potongan
            } else {
                potongan = 50000
            }
        } else {
            harga = harga
        }
    } else if(voucher === 'DITRAKTIRPIJAR'){
        if(harga >= 25000) {
            potongan = harga * 0.6
            if(potongan <= 30000){
                potongan = potongan
            } else {
                potongan = 30000
            }
        } else {
            harga = harga
        }
    } else {
        console.log(`cek kembali parameter ada yang salah`)
    }

    subTotal = harga - potongan + biayaAntar + pajak

    console.log(`Harga       : ${harga}`)
    console.log(`Potongan    : ${potongan}`)
    console.log(`Biaya Antar : ${biayaAntar}`)
    console.log(`Pajak       : ${pajak}`)
    console.log(`SubTotal    : ${subTotal} (harga - potongan + biaya antar + pajak)`)
}

PijarFood(45000,"PIJARFOOD5", 5, true)