// Copyright (c) 2025, Sohail
// For license information, please see license.txt

/**
 * Gate Pass Report
 * Updated: Code cleanup + new quick filters
 */

frappe.query_reports["Gate Pass Report"] = {
    filters: [
        {
            fieldname: "employee",
            label: __("Employee"),
            fieldtype: "Link",
            options: "Employee",
            width: 180,
            description: "Filter by specific employee"
        },
        {
            fieldname: "department",
            label: __("Department"),
            fieldtype: "Link",
            options: "Department",
            width: 180,
            description: "Filter by employee department"
        },
        {
            fieldname: "from_date",
            label: __("From Date"),
            fieldtype: "Date",
            default: frappe.datetime.add_months(
                frappe.datetime.get_today(),
                -1
            ),
            description: "Start date of the report range"
        },
        {
            fieldname: "to_date",
            label: __("To Date"),
            fieldtype: "Date",
            default: frappe.datetime.get_today(),
            description: "End date of the report range"
        },
        {
            fieldname: "status",
            label: __("Gate Pass Status"),
            fieldtype: "Select",
            options: "\nApproved\nRejected\nPending",
            default: "",
            width: 150
        }
    ]
};
