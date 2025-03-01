from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField,IntegerField
from wtforms.validators import DataRequired



class EmployeeForm(FlaskForm):
    option = SelectField('Choose an option', choices=[('A', 'Option A'), ('B', 'Option B'), ('C', 'Option C')], validators=[DataRequired()])
    shift_worked = StringField('Shift Worked', validators=[DataRequired()])
    optional_text = StringField('Optional Comments')
    user_id = IntegerField('user_id')