from flask import Flask, Blueprint, jsonify,request,render_template
from flask_login import login_required
from app.models import User,db, Employee
from wtforms import FlaskForm
from app.forms.employee_form import EmployeeForm
employee_routes = Blueprint('employees', __name__)

@employee_routes.route('/submit', methods=['POST'])
def submit_choice():
    data = request.get_json()  # Get JSON data from the request
    form = EmployeeForm(data=data)  # Pass data to the form
    
    if form.validate_on_submit():  # Check form validation
        new_choice = Employee(
            option=form.option.data,
            optional_text=form.optional_text.data,
            shift_worked=form.shift_worked.data
        )
        db.session.add(new_choice)
        db.session.commit()
        return jsonify(new_choice.to_dict()), 201
    
    return jsonify({'errors': form.errors}), 400


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


