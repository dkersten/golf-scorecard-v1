const goals = {
    2022: {
        displayName: "2022",
        selectValue: "2022",
        goals: [
           {
                type: "bool",
                description: "Break 80",
                completed: false,
                progress: {
                    current: 0,
                    total: 1
                }
           },
           {
                type: "cumulative",
                description: "Play 35 rounds",
                completed: true,
                progress: {
                    current: 38,
                    total: 35
                }
            },
            {
                type: "cumulative",
                description: "Play 3 new courses",
                completed: true,
                progress: {
                    current: 7,
                    total: 3
                }
            },
            {
                type: "cumulative",
                description: "Score par or better on all holes at home course",
                completed: true,
                progress: {
                    current: 18,
                    total: 18
                }
            },
        ]
    },
    2021: {
        displayName: "2021",
        selectValue: "2021",
        goals: [
            {
                type: "bool",
                description: "Break 85",
                completed: true,
                progress: {
                    current: 1,
                    total: 1
                }
            },
            {
                type: "bool",
                description: "Break 80",
                completed: false,
                progress: {
                    current: 0,
                    total: 1
                }
            },
            {
                type: "cumulative",
                description: "Play 15 rounds",
                completed: true,
                progress: {
                    current: 17,
                    total: 15
                }
            }
        ]
    },
    alltime: {
        displayName: "All Time",
        selectValue: "alltime",
        goals: [
            {
                type: "cumulative",
                description: "Play in 15 different states",
                completed: false,
                progress: {
                    current: 4,
                    total: 15
                }
            },
            {
                type: "cumulative",
                description: "Play 100 different courses",
                completed: false,
                progress: {
                    current: 16,
                    total: 100
                }
            },
            {
                type: "bool",
                description: "Beat Dave in match play",
                completed: false,
                progress: {
                    current: 0,
                    total: 1
                }
            }
        ]
    }
}

export default goals