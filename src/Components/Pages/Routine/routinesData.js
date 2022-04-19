export const routines = [
    {
        "name": "go for a walk",
        "count": 1,
        "metric": "times",
        "occurence": "per day",
        "repeat": "day",
        "time": "morning"
    },
    {
        "name": "read a book",
        "count": 15,
        "metric": "min",
        "occurence": "per day",
        "repeat": "day",
        "time": "evening"
    },
    {
        "name": "play with dog",
        "count": 10,
        "metric": "times",
        "occurence": "per week",
        "repeat": "week",
        "time": "afternoon"
    },
    {
        "name": "milk the cows",
        "count": 4,
        "metric": "times",
        "occurence": "per month",
        "repeat": "month",
        "time": "morning,afternoon,evening"
    }
]

export const initialForm = {
    "name": "",
    "count": 0,
    "metric": "",
    "occurence": "",
    "repeat": "",
    "time": "morning,afternoon,evening"
}

export const metric = [
    'times',
    'minutes'
]

export const occurences = [
    'day',
    'week',
    'month'
]

export const time = [
    'morning',
    'afternoon',
    'evening'
]