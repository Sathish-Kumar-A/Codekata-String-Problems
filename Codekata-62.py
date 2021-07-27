userInput=int(input())
count=0
while (userInput):
	count+=userInput & 1
	userInput >>=1
print(count)
