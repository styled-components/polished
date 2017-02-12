/* eslint-disable */
// var $repls = document.querySelectorAll('.repl')
//
// window.onload = function() {
// 	$repls.forEach(interactive)
// }
//
// function interactive($repl) {
// 	hljs.highlightBlock($repl)
// 	$repl.querySelectorAll('code').forEach(function ($code) {
// 		hljs.lineNumbersBlock($code);
// 	})
// }

var editor = ace.edit('repl');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');
