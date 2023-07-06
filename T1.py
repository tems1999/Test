Array = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

for i, Alphabetize in enumerate(Array):
    output = ''.join(Alphabetize)
    print(f'{i+1} => {output}')