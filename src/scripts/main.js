AOS.init();

document.addEventListener('DOMContentLoaded', function(){
    const dataEvento = new Date("sep 28, 2024 12:00:00")
    const timeStampDoEvento = dataEvento.getTime()

    setInterval(function () {
        const agora = new Date()
        const timeStampAtual = agora.getTime()

        const DistanciaAteOEvento = timeStampDoEvento - timeStampAtual

        const diaEmMS = 1000 * 60 * 60 * 24
        const horasEmMs = 1000 * 60 * 60
        const minEmMs = 1000 * 60

        const dias = Math.floor((DistanciaAteOEvento / diaEmMS))
        const horas = Math.floor((DistanciaAteOEvento % horasEmMs * 24) / (horasEmMs)) 
        const minutos = Math.floor((DistanciaAteOEvento % horasEmMs)/ minEmMs)
        const segundos = Math.floor((DistanciaAteOEvento % minEmMs) / 1000)

        document.getElementById('contador').innerText = `${dias}D ${horas}H ${minutos}M ${segundos}S`

        if(DistanciaAteOEvento < 0){
            document.getElementById('contador').innerText = "O aniversario passou"
        }

    }, 1000)
})