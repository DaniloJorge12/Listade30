let salario = 2500

if (salario >= 2000){
    desconto10 = salario * 0.9
}else if (salario < 2000){
    desconto5 = salario * 0.4
}
if (salario >= 2000){
    console.log ("Aplica-se R$ " + desconto10)
}else if (salario < 2000){
    console.log ("Aplica-se R$ " + desconto5)
}
