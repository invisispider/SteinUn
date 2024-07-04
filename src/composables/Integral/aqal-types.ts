export const AqalTypes = {
    'bigfive': {
        'description': 'Based on five somewhat independent personality factors.',
        'types': {
            1: {
                'type': 'Extraversion',
                'desc': 'Gets energized by the company of others.',
            },
            2: {
                'type': 'Agreeableness',
                'desc': 'Trust, altruism, kindness, and affection.',
            },
            3: {
                'type': 'Neuroticism',
                'desc': 'Sadness, moodiness, and emotional instability.',
            },
            4: {
                'type': 'Conscientiousness',
                'desc': 'Thoughtfulness, impulse control, goal-directed behavior.',
            }
        },
        'setbacks': 'Widely tested and accepted, but limited in usefulness.',
    },
    'myers-briggs': {
        'description': 'Supported in business environments. Based on complicated factor relationships. This system is preferred \
        because it assumes no Levels. The deeper theory to it is \
        compelling - though people hardly ever care about what these Types actually say about a person. The section on Jungian \
        cognitive functions explains basics. Your J/P tells you whether S/N (Perceiving functions) or T/F (Judging functions) \
        will be extraverted, while the other is introverted. If your E/I was E, then the extraverted function is your dominant. \
        If it was I, then the term that J/P did not select is your dominant. In either case, the other middle term is your auxilliary, \
        the two middle terms not indicated by your type comprise your tertiary and inferior functions. These are the four main things \
        your brain tends to do by habit. \
        ',
        'types': {
            1: {
                'type': 'Extraversion/Introversion',
                'desc': 'Prefer to focus on inner or outer world.',
            },
            2: {
                'type': 'Sensing/iNtuition',
                'desc': 'Prefer to focus on details or big picture.',
            },
            3: {
                'type': 'Thinking/Feeling',
                'desc': 'Decisions based on empathy or objectivity.',
            },
            4: {
                'type': 'Judging/Perceiving',
                'desc': 'Preference between becoming aware or coming to conclusions.',
            },
        },
        'setbacks': 'Highly disputed scientific integrity. Very Integral and Jungian compatible. \
        Ignores thus correlates with Levels. Difficult to use and comprehend. One of the best, unfortunately. \
        Possibly does not apply to Second Tier, as Second Tier often expresses preference to deliberately use \
        most of the cognitive functions in introverted and extraverted ways. Somewhat begs the question of \
        how much this truly describes a personality.',
    },
    'archetypes': {
        'description': 'Jung\'s notion of people playing collective story roles as personnae uses a nascent\
         sort of memetics to approach the psyche itself. The psyche recognizes and generates story to help \
         us make sense of our world. Thus, our reality resembles the most basic stories that we tell. Underneath \
         the hood of everything, we are pattern recognition. The patterns which emerge are the ones we keep coming \
         back to. The Type system arising from this is a collection of common and recognizable story roles that we \
         keep doing. They are ways of characterizing people in terms of what they think, feel, and do, so it is a \
         wonderful Type system.',
        'types': {
            1: {
                'type': 'Innocent',
                'desc': 'Exhibits happiness, goodness, optimism, safety, romance, and youth.',
            },
            2: {
                'type': 'Everyman',
                'desc': 'Seeks connections and belonging; is recognized as supportive, faithful and down-to-earth.',
            },
            3: {
                'type': 'Hero',
                'desc': 'On a mission to make the world a better place, the Hero is courageous, bold, inspirational.',
            },
            4: {
                'type': 'Rebel',
                'desc': 'Questions authority and breaks the rules; the Rebel craves rebellion and revolution.',
            },
            5: {
                'type': 'Explorer',
                'desc': 'Finds inspiration in travel, risk, discovery, and the thrill of new experiences.',
            },
            6: {
                'type': 'Creator',
                'desc': 'Imaginative, inventive and driven to build things of enduring meaning and value.',
            },
            7: {
                'type': 'Ruler',
                'desc': 'Creates order from the chaos, the Ruler is typically controlling and stern, yet responsible and organized.',
            },
            8: {
                'type': 'Magician',
                'desc': 'Wishes to create something special and make dreams a reality, the Magician is seen as visionary and spiritual.',
            },
            9: {
                'type': 'Lover',
                'desc': 'Creates intimate moments, inspires love, passion, romance, and commitment.',
            },
            10: {
                'type': 'Caregiver',
                'desc': 'Protects and cares for others, is compassionate, nurturing and generous.',
            },
            11: {
                'type': 'Jester',
                'desc': 'Brings joy to the world through humor, fun, irreverence and often likes to make some mischief.',
            },
            12: {
                'type': 'Sage',
                'desc': 'Committed to helping the world gain deeper insight and wisdom, the Sage serves as the thoughtful mentor or advisor.',
            },
        },
        'setbacks': 'Refers to story character analogy often without reference to the depth dimension of the observation.'
    },
    'enneagram': {
        'description': 'Unique system of roughly equal-represented personality archetypes. Originally \
        and traditionally based on the observance of monk behavior, this model nevertheless is widely used, \
        helping people to conceptualize their self, others, and relationships. The various meta-types of this \
        model resemble the dynamics of other models, but features are split into units of three, rather than \
        two or four.',
        'types': {
            1: {
                'type': '1 Reformer',
                'desc': 'Rational, idealistic. Principaled, purposeful, self-controlled.',
            },
            2: {
                'type': '2 Helper',
                'desc': 'Caring, demonstrative, generous, people-pleasing, possessive.',
            },
            3: {
                'type': '3 Achiever',
                'desc': 'Success-oriented, pragmatic. Adaptive, excelling, driven, image-conscious.',
            },
            4: {
                'type': '4 Individualist',
                'desc': 'Sensitive, withdrawn. Expressive, dramatic, self-absorbed, temperamental.',
            },
            5: {
                'type': '5 Investigator',
                'desc': 'Intense, cerebral. Perceptive, innovative, secretive, isolated.',
            },
            6: {
                'type': '6 Loyalist',
                'desc': 'Committed, security-oriented. Engaging, responsible, anxious, suspicious.',
            },
            7: {
                'type': '7 Enthusiast',
                'desc': 'Busy, fun-loving. Spontaneous, versatile, distractible, scattered.',
            },
            8: {
                'type': '8 Challenger',
                'desc': 'Powerful, dominating. Self-confident, decisive, willful, confrontational.',
            },
            9: {
                'type': '9 Peacemaker',
                'desc': 'Easygoing, self-effacing. Receptive, reassuring, agreeable, complacent.',
            },
        },
        'setbacks': 'Major vertical confusion. Type names vary widely. Complicated, or detailed. \
        Can be used for personal development in interesting ways, though methodologies vary and \
        efficacy is disputed.',
    },
    'astrology': {
        'description': 'Based on birthday, commonly used in Magenta and Red.',
        'types': {
            1: {
                'type': 'Aries',
                'desc': 'Competetive but insecure.',
            },
            2: {
                'type': 'Taurus',
                'desc': 'Loyal but stubborn.',
            },
            3: {
                'type': 'Gemini',
                'desc': 'Versatile but impatient.',
            },
            4: {
                'type': 'Cancer',
                'desc': 'Passionate but uncommunicative.',
            },
            5: {
                'type': 'Leo',
                'desc': 'Confident but dominating.',
            },
            6: {
                'type': 'Virgo',
                'desc': 'Perfectionist but self-critical.',
            },
            7: {
                'type': 'Libra',
                'desc': 'Empathetic but indecisive.',
            },
            8: {
                'type': 'Scorpio',
                'desc': 'Intense but secretive.',
            },
            9: {
                'type': 'Sagittarius',
                'desc': 'Spontaneous but flighty.',
            },
            10: {
                'type': 'Capricorn',
                'desc': 'Goal-oriented but forgiving.',
            },
            11: {
                'type': 'Aquarius',
                'desc': 'Philosophical but detatched.',
            },
            12: {
                'type': 'Pisces',
                'desc': 'Whimsical but over-sensitive.',
            },
        },
        'setbacks': 'Anti-scientific and probably untrue.',
    },
}
