str1,str2=input().split(" ")
hash1={}
hash2={}
flag=0
if(len(str1)==len(str2)):
    for i in range(len(str1)):
        str1Char=str1[i]
        str2Char=str2[i]
        if str1Char not in hash1:
            hash1[str1Char]=str2Char
        if str2Char not in hash2:
            hash2[str2Char]=str1Char
        if hash1[str1Char]!=str2Char or hash2[str2Char]!=str1Char:
            flag = 1
            print("no")
            break
else:
    print("no")
if flag==0:
    print("yes")
