rows,num=input().split(" ")
rows=int(rows)
arr=[]
for i in range(rows):
	arr.extend([int(x) for x in input().split()])
flag=0
for j in arr:
	if j==int(num):
		print("yes")
		flag=1
		break
if(flag==0):
	print("no")
