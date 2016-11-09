function count(string) {
	var regex = new RegExp('\\\\+[a-z]', 'g');
	var regex2 = /\s+/;
	var splitArr = string.trim().toLowerCase().replace(regex, '').split(regex2);
	var count = {};

	for (var i = 0; i < splitArr.length; i++) {
		if (count.hasOwnProperty(splitArr[i])) {
			 count[splitArr[i]]++;
		} else {
			count[splitArr[i]] = 1
		}
	}
	return count;
}
