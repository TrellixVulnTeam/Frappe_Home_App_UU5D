import frappe
@frappe.whitelist()
def get_pending_info(val):
    print(val)