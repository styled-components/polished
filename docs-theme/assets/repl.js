/* eslint-disable */
var $repls = document.querySelectorAll('.repl')

window.onload = function() {
	$repls.forEach(interactive)
}

function interactive($repl) {
	hljs.highlightBlock($repl)
	$repl.querySelectorAll('code').forEach(function ($code) {
		hljs.lineNumbersBlock($code);
	})
}
