# Jesse Xie, Qina Liu, Patrick Ging
# SoftDev
# k05- Amalgamation of k05's code w/ new trio
# 2021-09-27

# SUMMARY OF TRIO DISCUSSION
# I did not have my trio's work b/c of my lack of github knowledge, Jessie explained to me some basic functions of github, which was vv kind of him
# Patrick's trios used github API, which is too complex than needed
# Jessie's trios code could be simplified, did not need a method when one line could make it more concise
# DISCOVERIES
# How to make a folder and file in github; what commiting, pushing, and pulling is (learned from Jessie and Google)
# QUESTIONS
# If our python knowledge is subpar, are we to make up for it/ catch up on our own using online resources?
# What constitutes as robust and maintainable code?
# COMMENTS
# Readability looks good, but I do not know how robust and maintainable it is because I do not know robustness and maintainability means exactly


import random

pd1 = ["Alejandro Alonso", "Aryaman Goenka", "Angela Zhang", "Christopher Liu", "Deven Maheshwari",
       "Emma Buller", "Ella Krechmer", "Gavin McGinley", "Haotian Gan", "Ivan Lam", "Ishraq Mahid",
       "Ivan Mijacika", "Julia Nelson", "Lucas Lee", "Lucas Tom Wong", "Michelle Lo", "Oscar Wang",
       "Owen Yaggy", "Renggeng Zheng", "Shriya Anand", "Shyne Choi","Sadid Ethun", "Tomas Acuna","Theo Fahey",
       "Tina Nguyen", "Tami Takada", "William Chen", "Yusuf Elsharawy", "Zhaoyu Lin"]

pd2 = ["Alif Abdullah", "Andrew Juang", "Andy Lin", "Austin Ngan", "Annabel Zhang", "Daniel Sooknanan",
       "Eric Guo", "Eliza Knapp", "Hebe Huang", "Han Zhang", "Yoonah Chang", "Josephine Lee", "Jonathan Wu",
       "Jesse Xie", "Justin Zou", "Kevin Cao", "Liesel Wong", "Michael Borczuk", "Mark Zhu", "Noakai Aronesty",
       "Patrick Ging","Qina Liu", "Rachel Xiao", "Raymond Yeung", "Sophie Liu", "Shadman Rakib","Thomas Yu",
       "Wenhao Dong", "Yaying Liang Li", "Yuqing Wu"]

print( pd1[random.randint(0, len(pd1) - 1)])
print( pd2[random.randint(0, len(pd2) - 1)])
