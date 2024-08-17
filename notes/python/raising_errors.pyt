#raising errors



#raise an exception as soon as you know something is wrong 

#handle the exception when we can give a user good feedback

def bounded_avg(nums):
    "return average of nums(make sure nums are 1-100)"

    for n in nums:
        if n< 1 or n > 100:
            raise ValueError("Out of bounds")
    return sum(nums)/ len(nums)




def handle_data():
    "Process data from database"

    ages = [22, 40, 25, 30, 35, 50, 22, 35, 30, 22, 35, 30, 25, 40]

    try:
        avg = bounded_avg(ages)
        print("Average age is ", avg)

#best to have a specific exception rather than leaving it as except:
    except ValueError as exc:
        print("Invalid age in the list of ages")