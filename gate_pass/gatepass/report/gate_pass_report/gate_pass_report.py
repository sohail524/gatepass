# Copyright (c) 2025, sohail and contributors
# For license information, please see license.txt

# import frappe


# Copyright (c) 2025, Your Company
# For license information, please see license.txt

import frappe
from frappe.utils import flt

def execute(filters=None):
    if not filters:
        filters = {}

    columns = get_columns()
    data = get_data(filters)

    return columns, data


def get_columns():
    return [
        {"label": "Gate Pass No", "fieldname": "name", "fieldtype": "Link", "options": "Gate Pass", "width": 150},
        {"label": "Employee", "fieldname": "employee", "fieldtype": "Link", "options": "Employee", "width": 140},
        {"label": "Department", "fieldname": "department", "fieldtype": "Link", "options": "Department", "width": 140},
        {"label": "Pass Type", "fieldname": "pass_type", "fieldtype": "Data", "width": 100},
        {"label": "Floor", "fieldname": "floor", "fieldtype": "Data", "width": 120},
        {"label": "Status", "fieldname": "status", "fieldtype": "Data", "width": 100},
        {"label": "Issue Date", "fieldname": "issue_date", "fieldtype": "Datetime", "width": 160},
        {"label": "Return Date", "fieldname": "return_date", "fieldtype": "Datetime", "width": 160},
        {"label": "Item", "fieldname": "item", "fieldtype": "Link", "options": "Item", "width": 140},
        {"label": "Quantity", "fieldname": "qty", "fieldtype": "Float", "width": 100},
        {"label": "UOM", "fieldname": "uom", "fieldtype": "Link", "options": "UOM", "width": 100},
    ]


def get_data(filters):
    conditions = ""

    if filters.get("employee"):
        conditions += f" and gp.employee = '{filters.get('employee')}'"
    if filters.get("department"):
        conditions += f" and gp.department = '{filters.get('department')}'"
    if filters.get("from_date"):
        conditions += f" and gp.issue_date >= '{filters.get('from_date')}'"
    if filters.get("to_date"):
        conditions += f" and gp.issue_date <= '{filters.get('to_date')}'"

    data = frappe.db.sql(f"""
        SELECT
            gp.name,
            gp.employee,
            gp.department,
            gp.pass_type,
            gp.floor,
            gp.status,
            gp.issue_date,
            gp.return_date,
            child.item,
            child.qty,
            child.uom
        FROM
            `tabGate Pass` gp
        LEFT JOIN
            `tabGate Pass Item` child ON gp.name = child.parent
        WHERE
            gp.docstatus = 1 {conditions}
        ORDER BY
            gp.issue_date DESC
    """, as_dict=True)

    return data
