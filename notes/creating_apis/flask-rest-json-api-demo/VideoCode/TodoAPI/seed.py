from models import db, connect_db, Todo
from app import app

with app.app_context():
    db.drop_all()
    db.create_all()

    todos = [
        Todo(title="Feed the Chickens"),
        Todo(title="Water Orchids"),
        Todo(title="Wash Dishes", done=True),
        Todo(title="Workout Today!"),
        Todo(title="No but really, workout today!", done=True),
        Todo(title="Collect Eggs from chickens (steal their unborn babies)")
    ]
    db.session.add_all(todos)
    db.session.commit()

    print('Database seeded')
