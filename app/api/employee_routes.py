from flask import Blueprint, jsonify,request,render_template
from flask_login import login_required
from app.models import User,db, Employee

employee_routes = Blueprint('employees', __name__)



@employee_routes('/api/choice/submit', methods=['POST'])
def submit_choice():
    data = request.get_json()
    option = data.get('option')
    optional_text = data.get('optional_text', '')
    
    new_choice = EmployeeChoice(option=option, optional_text=optional_text)
    db.session.add(new_choice)
    db.session.commit()
    
    return jsonify(new_choice.to_dict()), 


@employee_routes.route('/api/choice', methods=['GET'])
@login_required
def get_choices():
    choices = Employee.query.all()
    return jsonify([choice.to_dict() for choice in choices])