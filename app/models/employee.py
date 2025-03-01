from .db import db
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)
    option = db.Column(db.String(50), nullable=False)
    optional_text = db.Column(db.String(200), nullable=True)
    shift_worked = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),)
    
    users = db.relationship('User', back_populates='employees')


    def to_dict(self):
        return {
            'id': self.id,
            'option': self.option,
            'optional_text': self.optional_text,
            'user_id': self.user_id,
            'shift_worked': self.shift_worked, 
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
            'user': self.users.to_dict(),
        }