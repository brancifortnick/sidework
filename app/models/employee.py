from .db import db



class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    napkins = db.Column(db.Integer,)
    




    def to_dict(self):
        return {
            'id': self.id,
           
        }