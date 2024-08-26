#reading files

#use open(filepath, mode) to open a file

file = open("tools.py", "r")

for line in file:
    print(line)


file.seek(0)

all_text = file.read()
file.close()

#write to a file

new_file = open("splicing.py", "w")
new_file.write("I AM LINE 2") #replaces everything

#use new_file("splicing.py", "a") to append to a file

file = open