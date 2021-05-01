// Prerequisites for this file: JQuery.

var DBScripts = new function() {
	// Builds changelog to a proper form to display.
	function InitializeChangelog() {
		// There's no changelog in this page.
		if ($("change-log").length == 0) return;

		let clShow = $(".change-log-btn > span");
		if (clShow.length == 0) {
			let btn = $("<div class='change-log-btn'><span>改版日誌&nbsp;<img src='Images/Animation/Doom_AllMap_R1.gif'></span></div>");
			btn.insertBefore(("change-log"));
			clShow = btn.children("span");
		}
		clShow.click(function() {
			$("change-log").css("display", "block");
		})

		$("change-log").each(function() {
			let cl = $(this);

			let back = cl.children(".back");
			if (back.length == 0) {
				back = $("<div class='back'></div>");
				cl.prepend(back);
			}

			let main = cl.children(".main");

			let title = main.children(".title");
			if (title.length == 0) {
				title = $("<div class='title'>改版日誌</div>");
				main.prepend(title);
			}

			let hide = main.children(".hide-htn");
			if (hide.length == 0) {
				hide = $("<div class='hide-htn'><i class='fas fa-times'></i></div>");
				main.append(hide);
			}
			hide.click(function() {
				cl.css("display", "none");
			});
			main.append(hide);
		});
	}
	this.InitializeChangelog = InitializeChangelog;
};
