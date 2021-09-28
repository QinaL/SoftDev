# Cameron Nelson, Sophie Liu, Qina Liu

import random

# opens file
file = open("occupations.csv");
# creates array w/ file
lines = file.read().split("\n");
splitlines = [];
listjobs = [];
for i in lines:
    if "," in i:
        i = i.replace("\"","");
        comma = i.rsplit(",",1);
        listjobs.append(comma[0]);
        splitlines.append(comma);

# deletes Job Class and Total (top and end)
del splitlines[0];
del listjobs[0];
del listjobs[len(listjobs)-1];
jobs = dict(splitlines);

# generates a random occupation w/ a weighted percentage probability 
randomNum = random.random() * float(jobs['Total']);
for i in listjobs:
    if randomNum < float(jobs[i]):
        print(i);
        break;
    else:
        randomNum -= float(jobs[i]);
