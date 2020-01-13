import re

emojis = open("winEmojisMin.txt","r+", encoding="utf-16").read()

output = open("output.txt","w",encoding="utf-16")

em = list(emojis)
#for x in em:
#    output.write(x)

lis = re.compile().split(emojis)



output.write(lis[0])

#output.write(list(emojis))
#print(emojis.read())
#output.write((",".join(emojis.read())))
output.close