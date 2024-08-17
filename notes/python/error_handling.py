#PYTHON raises errors in places js returns undefined


#write more error handling in python rather than js

#try and except blocks


def get_days_alive(person):
    try:
        days = person["age"] * 365
        print(f"{person["name"]} have been alive for {days} days")
    except KeyError as exc:
        print("EXC =", exc)
        print(f"Missing key: {exc}")
    except TypeError:
        print("Expected person to be a dictionary")


{"name": "Princess Kitty","age": 10}

get_days_alive({"age": 10, "name": "Princess Kitty"})


#look before you leap is checking conditions before running the code
#LBYL

#EAFP
#easier to ask for forgiveneess than permission

#approach in python 
# EAFP
# easier to ask for forgiveness than permission

#common exception types in python

#key error 
#attribute error
#index error
#name error
