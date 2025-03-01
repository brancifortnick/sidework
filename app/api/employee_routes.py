from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User,db, Employee

employee_routes = Blueprint('employee', __name__)


@employee_routes.route('/')
@login_required
def employees():
    employees = Employee.query.all()
    return {'employees': [employee.to_dict() for employee in employees]}
