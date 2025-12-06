// Copyright (c) 2025, Sohail
// For license information, please see license.txt

/**
 * Gate Pass Report
 * Update #3: Added Created By filter + layout cleanup
 */

frappe.query_reports["Gate Pass Report"] = {
    filters: [
        {
            fieldname: "employee",
            label: __("Employee ID"),
            fieldtype: "Link",
            options: "Employee",
            width: 160
        },
        {
            fieldname: "employee_name",
            label: __("Employee Name Contains"),
            fieldtype: "Data",
            width: 180
        },
        {
            fieldname: "department",
            label: __("Department"),
            fieldtype: "Link",
            options: "Department",
            width: 160
        },
        {
            fieldname: "created_by",
            label: __("Created By (User)"),
            fieldtype: "Link",
            options: "User",
            width: 160
        },
        {
            fieldname: "vehicle_no",
            label: __("Vehicle No"),
            fieldtype: "Data",
            width: 150
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
            label: __("Status"),
            fieldtype: "Select",
            options: ["", "Approved", "Rejected", "Pending"].join("\n"),
            width: 130
        },
        {
            fieldname: "gate_pass_type",
            label: __("Gate Pass Type"),
            fieldtype: "Select",
            options: ["", "In", "Out"].join("\n"),
            width: 130
        },
        {
            fieldname: "purpose",
            label: __("Purpose Contains"),
            fieldtype: "Data",
            width: 200
        }
    ]
};
