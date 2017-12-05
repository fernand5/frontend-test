module.exports = {
	extends: [
		'angular'
	],
	rules: {
		'angular/no-service-method': 0,
		'brace-style': [1, 'stroustrup'],
		'complexity': ['error', 100],
		'indent': [1, 'tab', {'SwitchCase': 1}],
		'max-depth': [2, 10],
		'max-params': ['error', 20],
		'no-multiple-empty-lines': [1, {'max': 4}],
		'no-trailing-spaces': [2, {'skipBlankLines': true}],
		"linebreak-style": 0
	}
}