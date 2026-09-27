function classificarPartidas(vitorias, derrotas) {
	const saldoVitorias = vitorias - derrotas;
	let nivel;

	if (vitorias <= 10 && derrotas <= vitorias) {
		nivel = "Ferro";
	} else if (vitorias <= 20 && derrotas <= vitorias) {
		nivel = "Bronze";
	} else if (vitorias <= 50 && derrotas <= vitorias) {
		nivel = "Prata";
	} else if (vitorias <= 80 && derrotas <= vitorias) {
		nivel = "Ouro";
	} else if (vitorias <= 90 && derrotas <= vitorias) {
		nivel = "Diamante";
	} else if (vitorias <= 100 && derrotas <= vitorias) {
		nivel = "Lendário";
	} else {
		nivel = "Imortal";
	}

	return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const jogadores = [
	{ vitorias: 75, derrotas: 20 },
	{ vitorias: 105, derrotas: 15 },
];

for (let i = 0; i < jogadores.length; i++) {
	const resultado = classificarPartidas(
		jogadores[i].vitorias,
		jogadores[i].derrotas,
	);

	console.log(resultado);
}
