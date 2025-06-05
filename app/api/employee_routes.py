from flask import Flask, Blueprint, jsonify, request, render_template
from flask_login import current_user
from flask_login import login_required
from app.models import User, db, Employee
from flask_wtf import FlaskForm
from app.forms.employee_form import EmployeeForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask_wtf.csrf import CSRFProtect

employee_routes = Blueprint('employees', __name__)

# @employee_routes.route('/submit', methods=['POST'])
# def submit_choice():
#     data = request.get_json()  # Get JSON data from the request
#     form = EmployeeForm(data=data)  # Pass data to the form

#     if form.validate_on_submit():  # Check form validation
#         new_choice = Employee(
#             option=form.option.data,
#             optional_text=form.optional_text.data,
#             shift_worked=form.shift_worked.data,
#             user_id=form.user_id.data
#             )
#         db.session.add(new_choice)
#         db.session.commit()
#         return jsonify(new_choice.to_dict()), 201

#     return jsonify({'errors': form.errors}), 400


@employee_routes.route('/')
@login_required
def get_employees():
    employees = Employee.query.all()
    return {'employees': [employee.to_dict() for employee in employees]}


@employee_routes.route('/submit', methods=['POST'])
@login_required
def create_location():
    form = EmployeeForm()
    if form.validate_on_submit():

        workcompleted = Employee(
            option=request.form['option'],
            optional_text=request.form['optional_text'],
            shift_worked=request.form['shift_worked'],
            user_id=current_user.id
        )
        form['csrf_token'].data = request.cookies['csrf_token']
        db.session.add(workcompleted)
        db.session.commit()

        return workcompleted.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@employee_routes.route('/', methods=['GET'])
def get_choices():
    choices = Employee.query.all()
    return jsonify([choice.to_dict() for choice in choices])

# @employee_routes('/api/employees/submit', methods=['POST'])
# def submit_choice():
#     data = request.get_json()
#     option = data.get('option')
#     optional_text = data.get('optional_text', '')

#     new_choice = Employee(option=option, optional_text=optional_text)
#     db.session.add(new_choice)
#     db.session.commit()

#     return jsonify(new_choice.to_dict()),
