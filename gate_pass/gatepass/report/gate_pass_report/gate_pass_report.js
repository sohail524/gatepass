// Copyright (c) 2025, Sohail
// For license information, please see license.txt

/**
 * Gate Pass Report
 * Updated: Minor improvements + Added Gate Pass Type filter
 */

frappe.query_reports["Gate Pass Report"] = {
    filters: [
        {
            fieldname: "employee",
            label: __("Employee"),
            fieldtype: "Link",
            options: "Employee",
            width: 180
        },
        {
            fieldname: "department",
            label: __("Department"),
            fieldtype: "Link",
            options: "Department",
            width: 180
        },
        {
            fieldname: "from_date",
            label: __("From Date"),
            fieldtype: "Date",
            default: frappe.datetime.add_months(frappe.datetime.get_today(), -1)
        },
        {
            fieldname: "to_date",
            label: __("To Date"),
            fieldtype: "Date",
            default: frappe.datetime.get_today()
        },
        {
            fieldname: "status",
            label: __("Gate Pass Status"),
            fieldtype: "Select",
            options: ["", "Approved", "Rejected", "Pending"].join("\n"),
            width: 150
        },
        {
            fieldname: "gate_pass_type",
            label: __("Gate Pass Type"),
            fieldtype: "Select",
            options: ["", "In", "Out"].join("\n"),
            width: 150
        },
        {
            fieldname: "purpose",
            label: __("Purpose Contains"),
            fieldtype: "Data",
            width: 200
        }
    ]
};
