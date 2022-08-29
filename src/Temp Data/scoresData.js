// every score should include: date, score, course, 9 or 18 holes

// optionally include: hole by hole score, advanced stats (FiR, GiR, putts)

const scores = {
    totalScoresInput: 3,
    scores: [
        {
            date: {
                full: "8/19/22",
                mobile: "8/19/22"
            },
            holesPlayed: 9,
            score: 41,
            course: "Churchville GC",
            holeByHole: false,
            advancedStats: false
        },
        {
            date: {
                full: "6/12/22",
                mobile: "6/12/22"
            },
            holesPlayed: 18,
            score: 80,
            course: "Brighton Park GC",
            holeByHole: true,
            advancedStats: false,
            holes: {
                1: {
                    par: 4,
                    score: 5
                },
                2: {
                    par: 3,
                    score: 3
                },
                3: {
                    par: 5,
                    score: 5
                },
                4: {
                    par: 4,
                    score: 5
                },
                5: {
                    par: 4,
                    score: 5
                },
                6: {
                    par: 5,
                    score: 5
                },
                7: {
                    par: 4,
                    score: 5
                },
                8: {
                    par: 3,
                    score: 3
                },
                9: {
                    par: 4,
                    score: 4
                },
                10: {
                    par: 5,
                    score: 6
                },
                11: {
                    par: 4,
                    score: 4
                },
                12: {
                    par: 4,
                    score: 5
                },
                13: {
                    par: 4,
                    score: 5
                },
                14: {
                    par: 4,
                    score: 4
                },
                15: {
                    par: 3,
                    score: 4
                },
                16: {
                    par: 4,
                    score: 4
                },
                17: {
                    par: 3,
                    score: 3
                },
                18: {
                    par: 5,
                    score: 5
                }
            }
        },
        {
            date: {
                full: "4/20/21",
                mobile: "4/20/21"
            },
            holesPlayed: 9,
            score: 39,
            course: "Brighton Park GC",
            holeByHole: true,
            advancedStats: true,
            holes: {
                1: {
                    par: 4,
                    score: 4,
                    fir: true,
                    gir: true,
                    putts: 2
                },
                2: {
                    par: 3,
                    score: 4,
                    fir: null,
                    gir: false,
                    putts: 2
                },
                3: {
                    par: 5,
                    score: 5,
                    fir: "left",
                    gir: false,
                    putts: 1
                },
                4: {
                    par: 4,
                    score: 4,
                    fir: true,
                    gir: true,
                    putts: 2
                },
                5: {
                    par: 4,
                    score: 5,
                    fir: "right",
                    gir: false,
                    putts: 2
                },
                6: {
                    par: 5,
                    score: 5,
                    fir: true,
                    gir: true,
                    putts: 2
                },
                7: {
                    par: 4,
                    score: 5,
                    fir: "left",
                    gir: true,
                    putts: 3
                },
                8: {
                    par: 3,
                    score: 3,
                    fir: null,
                    gir: false,
                    putts: 1
                },
                9: {
                    par: 4,
                    score: 5,
                    fir: true,
                    gir: true,
                    putts: 3
                }
            }
        }
    ]
}

export default scores