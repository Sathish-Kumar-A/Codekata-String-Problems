n=int(input())
arr=[int(x) for x in input().split()]
array=[]
for i in range(1,n+1):
    sum1=sum(arr[:i])
    array.append(sum1)
print(*array)
