# Odoo Developer Reference

Quick reference for core concepts

---

## 0. Directory Structure

```python
custom_addons
    - my_addon
        - __init__.py               (from . import models)
        - __manifest__.py           (dict containing name, desc)
        - models
            - __init__.py           (from . import myaddon)
            - myaddon.py            
        - views
            - myaddon_view.xml
``` 

## 1. Extending an Existing Model

Use `_inherit` to add to an existing model without touching Odoo's source.

```python
from odoo import models, fields

class ProductExtension(models.Model):
    _inherit = "product.template"  # target an existing model
                                   # _name would create a brand new one

    custom_field = fields.Char(string="My Field")
```

---

## 2. Field Types

```python
from odoo import models, fields

class MyModel(models.Model):
    _name = "my.model"

    # Basic types
    name        = fields.Char(string="Name", required=True)
    description = fields.Text(string="Description")          # multiline
    count       = fields.Integer(string="Count")
    price       = fields.Float(string="Price", digits=(10, 2))
    active      = fields.Boolean(string="Active", default=True)
    date        = fields.Date(string="Date")
    datetime    = fields.Datetime(string="Date & Time")

    # Dropdown — list of (value, label) tuples
    status = fields.Selection(
        selection=[
            ("draft", "Draft"),
            ("confirmed", "Confirmed"),
            ("done", "Done"),
        ],
        string="Status",
        default="draft",
    )

    # Foreign key — links to one record in another model
    partner_id = fields.Many2one(
        comodel_name="res.partner",  # the model to link to
        string="Customer",
    )

    # One record has many of these (the reverse of Many2one)
    # e.g. one sale order has many order lines
    line_ids = fields.One2many(
        comodel_name="my.model.line",
        inverse_name="parent_id",    # the Many2one field on the other model
        string="Lines",
    )

    # Many records linked to many records (like a junction table)
    tag_ids = fields.Many2many(
        comodel_name="my.tag",
        string="Tags",
    )
```

---

## 3. Computed Fields

Calculated from other fields, not stored directly by the user.

```python
from odoo import models, fields, api

class MyModel(models.Model):
    _name = "my.model"

    price    = fields.Float(string="Price")
    quantity = fields.Integer(string="Quantity")

    # store=False (default) — recalculated on the fly, not saved to DB
    # store=True — saved to DB, useful for searching/filtering on it
    total = fields.Float(string="Total", compute="_compute_total")

    @api.depends("price", "quantity")  # recalculate when these change
    def _compute_total(self):
        for record in self:            # always loop — self is a recordset
            record.total = record.price * record.quantity
```

---

## 4. Onchange

Reacts to a field change in the UI — doesn't save, just updates the form live.

```python
from odoo import models, fields, api

class MyModel(models.Model):
    _name = "my.model"

    partner_id = fields.Many2one("res.partner", string="Customer")
    email      = fields.Char(string="Email")

    # Listens for changes to 'partner_id' field
    @api.onchange("partner_id")
    def _onchange_partner_id(self):
        # when the user picks a partner, auto-fill the email
        if self.partner_id:
            self.email = self.partner_id.email
        else:
            self.email = False
```

---

## 5. Button Methods

Buttons in views call methods on the model.

```python
def action_confirm(self):
    # self is the current record (or recordset if called on multiple)
    self.write({"status": "confirmed"})  # write() updates fields
    # equivalent to: self.status = "confirmed" (works on single records)
```

```xml
<!-- in the view, type="object" means "call a Python method" -->
<button name="action_confirm" string="Confirm" type="object" class="btn-primary"/>
```

---

## 6. View Inheritance (XML)

Inject into an existing view without editing Odoo's files.

```xml
<record id="my_extension" model="ir.ui.view">
    <field name="name">product.template.form.my.extension</field>
    <field name="model">product.template</field>
    <field name="inherit_id" ref="product.product_template_form_view"/> <!-- target view -->
    <field name="arch" type="xml">

        <!-- add after an existing field -->
        <xpath expr="//field[@name='name']" position="after">
            <field name="my_field"/>
        </xpath>

        <!-- add inside an existing tab -->
        <xpath expr="//page[@name='general_information']" position="inside">
            <group>
                <field name="my_field"/>
            </group>
        </xpath>

        <!-- add a new tab -->
        <xpath expr="//notebook" position="inside">
            <page string="My Tab">
                <group>
                    <field name="my_field"/>
                </group>
            </page>
        </xpath>

    </field>
</record>
```

**`position` options:**
- `after` — inject after the matched element
- `before` — inject before the matched element
- `inside` — inject as the last child inside the matched element
- `replace` — replace the matched element entirely
- `attributes` — modify attributes of the matched element

---

## 7. Domains (Filtering Records)

Domains are Odoo's way of filtering — used in views, fields, and code.

```python
# In Python
records = self.env["product.template"].search([
    ("active", "=", True),
    ("list_price", ">", 100),
])

# Operators: =, !=, >, <, >=, <=, like, ilike (case-insensitive), in, not in
# Combine with "&" (AND, default) or "|" (OR) prefixes
records = self.env["product.template"].search([
    "|",
    ("name", "ilike", "chair"),
    ("name", "ilike", "table"),
])
```

```xml
<!-- In a field to filter what the user can select -->
<field name="product_id" domain="[('active', '=', True)]"/>
```

---

## 8. The Environment (self.env)

`self.env` gives you access to everything in Odoo.

```python
# Search for records
partners = self.env["res.partner"].search([("is_company", "=", True)])

# Get a single record by ID
partner = self.env["res.partner"].browse(42)

# Get the current logged-in user
current_user = self.env.user

# Create a record
new_record = self.env["my.model"].create({
    "name": "New Record",
    "status": "draft",
})
```

---

## 9. Common Built-in Models

| Model | What it is |
|-------|-----------|
| `res.partner` | Contacts (customers, suppliers, companies) |
| `res.users` | Users |
| `product.template` | Products |
| `product.product` | Product variants |
| `sale.order` | Sales orders |
| `purchase.order` | Purchase orders |
| `account.move` | Invoices / bills |
| `stock.picking` | Receipts / delivery orders |
| `stock.move` | Individual stock movements |

---

## 10. Manifest Checklist

When creating or extending a module:

```python
{
    "name": "My Module",
    "version": "1.0",
    "category": "Customizations",
    "license": "LGPL-3",
    "depends": ["base"],        # list every module whose models/views you use
    "data": [
        "security/ir.model.access.csv",  # always first
        "views/my_views.xml",
    ],
    "installable": True,
    "application": True,        # shows as a tile on the home screen
}
```
