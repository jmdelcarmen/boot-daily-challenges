function hey(string) {
	var regex = /[a-zA-Z]/gi;

	if (string.trim().length === 0) {
		return 'Fine. Be that way!';
	}	else {
			if (string === string.toUpperCase() && string.search(regex) !== -1) {
				return 'Whoa, chill out!';
			}
			else if (string.trim().endsWith('?')) {
				return 'Sure.';
			}
			else {
				return 'Whatever.';
			}
	 }
}
