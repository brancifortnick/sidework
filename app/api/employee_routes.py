from flask import Blueprint, jsonify,request,render_template
from flask_login import login_required
from app.models import User,db, Employee

employee_routes = Blueprint('employee', __name__)


@employee_routes.route('/')
@login_required
def employees():
    employees = Employee.query.all()
    return {'employees': [employee.to_dict() for employee in employees]}


def index():
    if request.method == 'POST':
        option = request.form['option']
        optional_text = request.form.get('optional_text', '')
        new_choice = Employee(option=option, optional_text=optional_text)
        db.session.add(new_choice)
        db.session.commit()
        return 'Choice saved!'
    return render_template('index.html')