frappe.pages['ddd'].on_page_load = function(wrapper) {
	//getPendingInfo();
	//loadThana();
	new MyPage(wrapper);
}
MyPage = Class.extend(
	{
		init: function(wrapper) {
			this.page = frappe.ui.make_app_page(
				{
					parent: wrapper,
					title: 'Welcome',
					single_column: true
				}
			);
			this.make();
		},
		make: function() {
			$(frappe.render_template("index", this)).appendTo(this.page.main);
		}
	}
);


		function load_bom(){
			var a = document.getElementById("name").value;
			alert("Test Message =  " + a);
			loadThana(a);
		}


	function loadThana(val){
			frappe.call({
				method: "erpnext.hr.page.ddd.ddd.get_pending_info",
				async: false,
				args:{"val":val},
				callback: function(r, rt) {
					console.log("Success");
				}
			});
}