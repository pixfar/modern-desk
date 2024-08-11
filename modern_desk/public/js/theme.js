frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
	constructor() {
		super()
	}

	fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "modern_ui_theme",
					label: "OneDNA Theme",
					info: "Modern Theme"
				}
			];

			resolve(this.themes);
		});
	}
}