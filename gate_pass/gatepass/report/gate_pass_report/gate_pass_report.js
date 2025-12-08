// Copyright (c) 2025, Sohail
// For license information, please see license.txt

/**
 * Gate Pass Report
 * Update #4: Added Gate Pass ID filter + filter reordering + UI polish
 */

frappe.query_reports["Gate Pass Report"] = {
    filters: [
        {
            fieldname: "gate_pass_id",
            label: __("Gate Pass ID"),
            fieldtype: "Link",
            options: "Gate Pass",
            width: 160
        },
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
            width: 170
        },
        {
            fieldname: "department",
            label: __("Department"),
            fieldtype: "Link",
            options: "Department",
            width: 150
        },
        {
            fieldname: "purpose",
            label: __("Purpose Contains"),
            fieldtype: "Data",
            width: 170
        },
        {
            fieldname: "vehicle_no",
            label: __("Vehicle No"),
            fieldtype: "Data",
            width: 140
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
            fieldname: "created_by",
            label: __("Created By"),
            fieldtype: "Link",
            options: "User",
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
        }
    ]
};
