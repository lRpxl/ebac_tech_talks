AOS.init();

const dataDoEvento = new Date("Dec 15, 2024 12:00:10");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000* 60 * 60;
    const MinutosEmMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distaciaAteOEvento/  diasEmMs);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diasEmMs) / horasEmMS);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento % horasEmMS) / MinutosEmMS);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % MinutosEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s `

    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);