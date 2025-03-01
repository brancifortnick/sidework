from .db import db
from flask_sqlalchemy import SQLAlchemy


class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    option = db.Column(db.String(50), nullable=False)
    optional_text = db.Column(db.String(200), nullable=True)
    shift_worked = db.Column(db.String(50), nullable=False)
    
    
    def to_dict(self):
        return {
            'id': self.id,
            'option': self.option,
            'optional_text': self.optional_text,
            'shift_worked': self.shift_worked,
        }