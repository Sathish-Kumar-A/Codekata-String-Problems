string,n=input().split(" ")
n=int(n)
p=n
length=len(string)//n
arr=[]
for i in range(length):
    arr.append(string[n-1])
    n+=p
print(*arr)
