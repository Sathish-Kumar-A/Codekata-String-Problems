userInput=input()
string=""
for i in userInput:
	if(i not in string):
		string+=i
print(string)
