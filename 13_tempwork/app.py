# The Penguins | Josephine Lee (Kitty), Qina Liu (Nyx), Roshani Shrestha (Pete)
# SoftDev
# K13: Template for Success - Serves a templated page from localhost
# 2021-10-13

import random
from csv import DictReader
from flask import Flask, render_template 
app = Flask(__name__);

@app.route("/")
def make_dict():
    """ 
    Makes dictionary with DictReader(). 
    Each row is read and the job classes are set equal to the percentages in the dictionary. 
    """
    
    filename = "data/occupations.csv"
    dict = {} 

    try:
        with open(filename) as csvfile:
            reader = DictReader(csvfile)
            for row in reader: 
                dict[row['Job Class']] = float(row['Percentage']) 

            if 'Total' in dict.keys(): 
                dict.pop('Total') 
    
    except FileNotFoundError: 
        print('File "%s" does not exist' % (filename))

    return dict

def rand_occ(dictionary):
    """ Chooses a random weighted occupation from the dictionary using random.choices(). """
    return random.choices(list(dictionary), weights=dictionary.values())[0]

dictionary = make_dict()
team = "The Penguins: Josephine Lee (Kitty), Qina Liu (Nyx), and Roshani Shrestha (Pete)" 
header = "This program displays a random occupation at the top of the page using occupations.csv. It also displays a tablified version of the occupations data."

@app.route("/tablified_template") 
def run_tmplt():
    """ 
    Serves template from localhost and replaces variables with values. 
    The values include a title, heading, random occupation, and a dictionary of the occupations data.
    """
    return render_template( 'tablified.html', foo="K13: Template for Success", team=team, header=header, occupation=rand_occ(dictionary), data=dictionary) 

if __name__ == "__main__":
    app.debug = True
    app.run()
