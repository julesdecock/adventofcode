elves = []
elve = []

for line in open('input.txt').read().split('\n'):
    if line == '':
        elves.append(elve)
        elve = []
        continue
    elve.append(int(line))

allElvesSum = []
for cal in elves:
    allElvesSum.append(sum(cal))

allElvesSum.sort(reverse=True)

# Solution part 1
print('Solution part 1: ' + str(max(sum(cal) for cal in elves)))

# Solution part 2
print('Solution part 2: ' + str(sum(allElvesSum[:3])))