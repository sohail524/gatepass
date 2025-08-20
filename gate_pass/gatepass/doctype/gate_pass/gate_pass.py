# Copyright (c) 2025, sohail and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.model.document import Document

class GatePass(Document):
    def autoname(self):
        prefix = "GP-" + str(frappe.utils.nowdate().split("-")[0]) + "-"
        last_id = frappe.db.sql("""
            SELECT MAX(name) FROM `tabGate Pass`
            WHERE name LIKE %s
        """, (prefix + "%",))

        if last_id and last_id[0][0]:
            last_num = int(last_id[0][0].split("-")[-1])
            new_num = last_num + 1
        else:
            new_num = 1

        self.name = prefix + str(new_num).zfill(4)
