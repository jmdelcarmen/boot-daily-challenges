var compute = function(dna1, dna2){

	if (dna1-dna2 !== 0) {
		var hamLen = 0;
		for (var i = 0; i < dna1.length; i++) {
			if (dna1[i].toLowerCase() !== dna2[i].toLowerCase()) {
				hamLen++;
			}
		}
		return hamLen;
	}
	else {
		return -1;
	}
};
