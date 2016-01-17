var fs = require("fs");
var starter = fs.readFileSync("starter.tex", "utf-8");
window.onload = function() {
	function editor() {
		this.text = starter;
		this.editorPane = document.getElementById("editor");
		this.sourcePane = ace.edit("source");
		this.updatePanes = function() {
			this.sourcePane.setValue(this.text);
		};
	};
	var instance = new editor();
	instance.sourcePane.setTheme("ace/theme/chrome");
	instance.sourcePane.getSession().setMode("ace/mode/latex");
	instance.updatePanes();
};