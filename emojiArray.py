import functools
import operator
import re
import emoji

emojis = open("winEmojisMin.txt","r+", encoding="utf-16").read()

output = open("output.txt","w",encoding="utf-16")

em = list(emojis)
#for x in em:
#    output.write(x)

em_split_emoji = emoji.get_emoji_regexp().split(emojis)
em_split_whitespace = [substr.split() for substr in em_split_emoji]
em_split = functools.reduce(operator.concat, em_split_whitespace)


for x in em_split:
    if x == None:
        print("none")
    else:
        output.write('"'+x)



#output.write(list(emojis))
#print(emojis.read())
#output.write((",".join(emojis.read())))
output.close