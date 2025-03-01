from app.models import db, Employee


def seed_employees():
    nicholas = Employee(
        option='A', 
        optional_text='First choice comment', 
        shift_worked='Morning Shift',
        user_id=1
    )
    marnie = Employee(
        option='B', 
        optional_text='Second choice comment', 
        shift_worked='Mid Shift',
        user_id=2
    )
    bobbie = Employee(
        option='B', 
        optional_text='Third choice comment', 
        shift_worked='Night Shift',
        user_id=3
    )
    phillip = Employee(
        option='C',
        optional_text='all sidework completed',
        shift_worked='Night Shift',
        user_id=4
    )

    db.session.add(nicholas)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(phillip)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the employees table.
# SQLAlchemy doesn't have a built-in function to do this
def undo_employees():
    db.session.execute('TRUNCATE employees RESTART IDENTITY CASCADE;')
    db.session.commit()
