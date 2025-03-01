from flask import Flask, request, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Enable CORS for frontend integration
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired



class EmployeeForm(FlaskForm):
    option = SelectField('Choose an option', choices=[('A', 'Option A'), ('B', 'Option B'), ('C', 'Option C')], validators=[DataRequired()])
    shift_worked = StringField('Shift Worked', validators=[DataRequired()])
    optional_text = StringField('Optional Comments')
