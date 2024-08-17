#you can spread iterables

nums = [2,4,6,8,10,12,14,16,18,20]

print([-2,0,*nums])

odds = [1,3,5,7,9,11,13,15,17,19]

[*odds, *nums]


[*"hello"]

{*"hello"}

rainfall = {"Jan": 2.5, "Feb": 4.9}

{**rainfall}

#have to use ** to spread dictionaries


#can use spread in a function call

print(2,3,4,5,6)

[1,2,3,4,5,6,7,8,9]

print(*"hello")

#works pretty much the same way as in javascript but in python it is * instead of ... except for a dictionary which is **