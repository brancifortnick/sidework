from app.models import db, Employee


def seed_employees():
    nicholas = Employee(
        option='A', 
        optional_text='First choice comment', 
        shift_worked='Morning Shift'
    )
    marnie = Employee(
        option='B', 
        optional_text='Second choice comment', 
        shift_worked='Mid Shift'
    )
    bobbie = Employee(
        option='B', 
        optional_text='Third choice comment', 
        shift_worked='Night Shift'
    )
    phillip = Employee(
        option='C',
        optional_text='all sidework completed',
        shift_worked='Night Shift'
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
