def weekday_name(day_of_week):
    days = {
        1: "Monday",
     2:"Tuesday",
     3:"Wednesday",
     4:"Thursday",
        5:"Friday",
        6:"Saturday",
        7:"Sunday"
     }
    
    if day_of_week in days:
        return days[day_of_week]
    else:
        return None
    
print(weekday_name(1)) # "Monday"
print(weekday_name(9))