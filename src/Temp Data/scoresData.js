// every score should include: date, score, course, 9 or 18 holes

// optionally include: hole by hole score, advanced stats (FiR, GiR, putts)

const scores = {
    totalScoresInput: 5,
    scores: [
        {
            date: {
                full: "11/4/22",
                mobile: "11/4/22"
            },
            holesPlayed: 9,
            score: 45,
            course: "Brighton Park GC",
            stats: true,
            holeByHole: true,
            advancedStats: false,
            roundId: 54,
            holes: {
                1: {
                    par: 4,
                    score: 5
                },
                2: {
                    par: 3,
                    score: 4
                },
                3: {
                    par: 5,
                    score: 6
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
                    score: 6
                },
                8: {
                    par: 3,
                    score: 4
                },
                9: {
                    par: 4,
                    score: 5
                }
            }
        },
        {
            date: {
                full: "9/9/22",
                mobile: "9/9/22"
            },
            holesPlayed: 9,
            score: 40,
            course: "Brighton Park GC",
            stats: true,
            holeByHole: true,
            advancedStats: true,
            roundId: 46,
            holes: {
                1: {
                    par: 4,
                    score: 5,
                    fir: "left",
                    gir: false,
                    putts: 2
                },
                2: {
                    par: 3,
                    score: 3,
                    fir: null,
                    gir: true,
                    putts: 2
                },
                3: {
                    par: 5,
                    score: 4,
                    fir: "right",
                    gir: true,
                    putts: 1
                },
                4: {
                    par: 4,
                    score: 5,
                    fir: "left",
                    gir: false,
                    putts: 2
                },
                5: {
                    par: 4,
                    score: 4,
                    fir: true,
                    gir: true,
                    putts: 2
                },
                6: {
                    par: 5,
                    score: 6,
                    fir: true,
                    gir: true,
                    putts: 3
                },
                7: {
                    par: 4,
                    score: 5,
                    fir: "left",
                    gir: false,
                    putts: 2
                },
                8: {
                    par: 3,
                    score: 3,
                    fir: null,
                    gir: true,
                    putts: 2
                },
                9: {
                    par: 4,
                    score: 5,
                    fir: "left",
                    gir: false,
                    putts: 1
                }
            }
        },
        {
            date: {
                full: "8/19/22",
                mobile: "8/19/22"
            },
            holesPlayed: 9,
            score: 41,
            course: "Churchville GC",
            stats: false,
            holeByHole: false,
            advancedStats: false,
            roundId: 42
        },
        {
            date: {
                full: "6/12/22",
                mobile: "6/12/22"
            },
            holesPlayed: 18,
            score: 80,
            course: "Brighton Park GC",
            stats: true,
            holeByHole: true,
            advancedStats: false,
            roundId: 26,
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
            stats: true,
            holeByHole: true,
            advancedStats: true,
            roundId: 1,
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
                    score: 4,
                    fir: true,
                    gir: true,
                    putts: 3
                }
            }
        }
    ]
}

export default scores