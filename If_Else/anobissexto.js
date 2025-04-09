let ano = 2025
let isBissexto = false
if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    isBissexto = true
}
console.log ("O ano " + ano + " é bissexto? " + isBissexto)
