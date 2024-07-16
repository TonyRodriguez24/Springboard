def list_manipulation(lst, command, location, value = None):
    if command == "remove":
        if location == "beginning":
            return lst.pop(0)
        elif location == "end":
            return lst.pop()
        
    elif command == "add":
        if location == "beginning":
            lst.insert(0, value)
            return lst
        elif location == "end":
            lst.append(value)
            return lst 
    return None

print(list_manipulation([1,2,3,4,5], "remove", "beginning"))
