export const sanitizeContent = (content) =>
	content
		.replace(/ +/, ' ')
		.replaceAll('&nbsp;', ' ')
		.replaceAll('<div>', '\n')
		.replaceAll('<br></div>', '\n')
		.replaceAll('</div>', '')
		.replaceAll('<br>', '');
