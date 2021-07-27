userInput=input()

def check(string):
	stack = []
	for i in string:
	   if i in ["(","{","["]:
		   stack.append(i)
	   else:
		   if not stack:
			   return False
		   current_char=stack.pop()
		   if(current_char=="(") and i!=")":
			   return False
		   if (current_char == "[") and i != "]":
			   return False
		   if (current_char == "{") and i != "}":
			   return False
	if stack:
		return False
	return True

if(check(userInput)):
	print(1)
else:
	print(0)
