#len

print(len("hello"))
print(len([1,2,3,4,5,6,7,8,9,10]))

#lists
#O(n) time complexity to search, add, delete unless at the end

scores = [10, 20, 30, 40, 50]

list() #needs to be an iterable

list("hello") #['h', 'e', 'l', 'l', 'o']

list(range(10)) #[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

vegan_no_nos = ["meat", "eggs", "dairy", "honey"]

pie_ingredients = ["apples", "sugar", "cinnamon", "butter", "flour"]

for food in pie_ingredients:
    if food in vegan_no_nos:
        print(f"{food} is not vegan")
    else:
        print(f"{food} is vegan")

special_chars = "!@#$%^&*()_+"

"#" in special_chars #True

vegan_no_nos[0] #meat

#negative indices

vegan_no_nos[-1] #honey


#lists are reference types

#slicing

vegan_no_nos[1:3] #['eggs', 'dairy']
vegan_no_nos[:3] #['meat', 'eggs', 'dairy']

nums = list(range(100))

nums[50:60:1] #[50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

#the start index is inclusive, the end index is exclusive

#Dictionary

#key value pairs

person = {
    "first": "John",
    "last": "Doe",
    "age": 30
}

#very quick to search, add, delete

#keys can be any immutable type
#values can be any type
#similar to a javascript map

chicken = {
    "name": "Patty",
    "type": "chicken",
    "age": 2,
    "eggs": 0
}

stuff = {
    True: "hello", 
         99: "world", 
         "bye": "now"
         }

#membership and retrieval

#in checks for membership in the keys

"name"  in chicken #True
"Pat" in chicken #False

chicken["name"] #Patty
chicken["age"] = 3
#there is no dot notation in python

chicken.get("eggs") #0
chicken.get("color") #None

dict() #makes a new dictionary



#looping over dictionaries

#can iterate over the keys and values individually or both at the same time

chicken2 = {
    "name": "Patty",
    "breed": "chicken",
    "egg_count": 2,
    "egg_chart":{
        "monday": 1,
        "tuesday": 0,
        "wednesday": 2
    },
    "coop_mates": ["Mary", "Jerry", "Larry"]
}

for key in chicken2.keys():
    print(key)

for value in chicken2.values():
    print(value)

for pair in chicken2.items():
    print(pair)

#unpacking

for (key, value) in chicken2.items():
    print(f"{key}: {value}")

#dictionary methods

#copy - makes a shallow copy of the dictionary

#get - very useful for checking if a key exists
chicken2.get("name") #Patty

#values, keys, items - returns a view object that can be converted to a list

keys = list(chicken2.keys())
print(keys)

#pop - removes a key and returns the value

#fromkeys - creates a new dictionary with the keys from an iterable





#sets

#unordered collection of unique elements
#O(1) time complexity for search, add, delete

#making a set
languages = {"python", "java", "c", "c++", "python"}
type(languages) #set

voted_languages = set(["python", "java", "c", "c++", "python"])
type(voted_languages) #set
#order in a set does not matter
#can only use immutable types in a set, cant be lists or dictionaries

#use in to check for membership

"python" in languages #True

#methods for sets
#add

languages.add("javascript")

#pop - removes a random element
languages.pop()

#remove - removes a specific element
languages.remove("c")

len(languages)



