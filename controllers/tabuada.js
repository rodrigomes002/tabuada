const list = (request, response) =>{
    const numeros = []
    for(let i=1; i<=100; i++){
        numeros.push(i)
    }
    response.render('tabuada/list', {numeros})
}

const tabuada = (request, response) =>{
    const tabuadas = []
    const num = request.params.num

    for(let i=0; i<=100; i++){
        tabuadas.push({ num, i, resultado: num*i })
    }

    response.render('tabuada/tabuada', {
        num: request.params.num,
        tabuadas
    })
}

module.exports = {
    list, tabuada
}