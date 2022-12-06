# Part 1
elves = []
elve = []

for line in open('input.txt').read().split('\n'):
    if line == '':
        elves.append(elve)
        elve = []
        continue
    elve.append(int(line))

mostCalories = max(sum(cal) for cal in elves)    
print(mostCalories)