/* eslint-disable */
// Make polished methods globally available
Object.keys(window.polished).forEach(function (method) {
	window[method] = window.polished[method]
})

/**
 * Create an ace editor instance with some default options. Setting locked to true will make it read
 * only, useful for showing the output of something
 *
 * @param {DOM}  $el    The element passed to ace.edit
 * @param {Bool} locked Lock the editor to be read only
 * @return the editorsession
 */
function Editor($el, locked) {
	var editor = ace.edit($el)
	var options = {
		highlightGutterLine: false,
		highlightActiveLine: false,
		theme: 'ace/theme/tomorrow',
		mode: 'ace/mode/javascript',
		useSoftTabs: true,
		tabSize: 2,
		useWorker: false,
		showPrintMargin: false,
		showFoldWidgets: false
	}
	if (locked) {
		Object.assign(options, {
			readOnly: true
		})
	}
	editor.setOptions(options)
	return editor.getSession()
}

// Create input editor
var $input = document.querySelector('.repl .repl__input')
var input = new Editor($input)
input.on('change', renderOutput)
// Create output editor
var $output = document.querySelector('.repl .repl__output')
var output = new Editor(output)
// Set the initial value of the input
input.setValue(`const styles = {
	// color: lighten('#000', 20),
	fontSize: modularScale(1),
	[hiDPI(1.5)]: {
		fontSize: modularScale(1.25)
	}
}`)

// Renders the output
function renderOutput() {
	var code = '(function() {\n' + input.getValue() + ';\nreturn styles; })()'
	try {
		var result = 'const styles = ' + JSON.stringify(eval(code), null, 2)
		output.setValue(result)
	} catch (err) {
		console.log(err)
	}
}
