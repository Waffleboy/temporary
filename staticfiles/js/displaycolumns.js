$(document).ready(function() {
				$("#select-all").click(function() {
								var columns = $("input[name='column']");
								for (var i=0; i<columns.length; i++) {
												if (!columns[i].checked) {
																$(columns[i]).click();
												}
								}
				});
				$("#select-none").click(function() {
								var columns = $("input[name='column']");
								for (var i=0; i<columns.length; i++) {
												if (columns[i].checked) {
																$(columns[i]).click();
												}
								}
				});
});
