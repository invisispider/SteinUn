export const AqalTypes = {
    'Big Five': {
        'description': 'Based on five somewhat independent personality factors, this is perhaps \
        the most simple and scientifically verified measure of personality.',
        'types': {
            1: {
                'type': 'Extraversion',
                'desc': 'Energized by others.',
            },
            2: {
                'type': 'Agreeableness',
                'desc': 'Allow others to control.',
            },
            3: {
                'type': 'Neuroticism',
                'desc': 'Reactivity, irrationality, emotional instability.',
            },
            4: {
                'type': 'Conscientiousness',
                'desc': 'Thoughtfulness, patience, responsibility.',
            }
        },
        'setbacks': 'Widely tested, accepted, and used to assess personality factors, but limited \
        as an expression of Integral Types by lack of theoretical grounding and comprehensiveness.',
    },
    'Myers-Briggs': {
        'description': 'Popular system in common usage, preferred \
        because it assumes no development. Criticized for scientific and statistical methodology. The deeper theory to it is \
        compelling. The section on Jungian \
        cognitive functions explains basics. J/P tells whether S/N (Perceiving functions) or T/F (Judging functions) \
        will be extraverted, while the other is introverted. The other middle term is your auxilliary, \
        the two middle terms not indicated by your type comprise your tertiary and inferior functions. These are the four main things \
        your brain tends to do by habit. \
        ',
        'types': {
            1: {
                'type': 'Extraversion/Introversion',
                'desc': 'Prefer social or personal experience.',
            },
            2: {
                'type': 'Sensing/iNtuition',
                'desc': 'Perceiving the sense details or mental concepts and associations.',
            },
            3: {
                'type': 'Thinking/Feeling',
                'desc': 'Judgment based on felt values or objective consideration.',
            },
            4: {
                'type': 'Judging/Perceiving',
                'desc': 'Preference between acquiring information or coming to conclusions.',
            },
        },
        'setbacks': 'Highly disputed scientific integrity. Integral and Jungian compatible, \
        but ignores thus correlates with Levels. Difficult to use and comprehend. One of the best, unfortunately. \
        Possibly does not capture or apply to Second Tier Levels, as these often express preference to deliberately alter \
        their native cognitive functions in introverted and extraverted ways. These Types \
        seem to capture personality accurately, but it quickly becomes subjective and \
        interpretive how to make decisions based on \
        MB Types, or how to use them for specific situations, personalities, and interactions. \
        In the discussion of Myers-Briggs, like Enneagram and indeed Integral Theory, \
        we find that most discussions focus on the abstraction layer of the model itself, and \
        people have difficulty translating the things they ordinarily think and care about \
        into this system\'s language.',
    },
    'Archetypes': {
        'description': 'Jung\'s notion of people playing collective story roles as personnae uses a nascent\
         sort of memetics to approach the Psyche. The Psyche recognizes and generates story to help \
         us make sense of our world. Thus, our reality recapitulates the most basic stories we tell. Under \
         the hood of Mind, we are pattern recognition. The patterns which emerge are the familiar ones we keep coming \
         back to and creating everywhere. The Type system arising from this is a collection of common and recognizable \
         story character roles.',
        'types': {
            1: {
                'type': 'Innocent',
                'desc': 'Exhibits happiness, goodness, optimism, safety, romance, and youth.',
            },
            2: {
                'type': 'Everyman',
                'desc': 'Seeks connection and belonging. Supportive, faithful and down-to-earth.',
            },
            3: {
                'type': 'Hero',
                'desc': 'On a mission to make the world better. Courageous, intrepid, inspiring.',
            },
            4: {
                'type': 'Rebel',
                'desc': 'Questions authority and breaks rules. Craves rebellion and revolution.',
            },
            5: {
                'type': 'Explorer',
                'desc': 'Sets out for travel, risk, discovery, and the thrill of new experiences.',
            },
            6: {
                'type': 'Creator',
                'desc': 'Imaginative, inventive and driven to build things of enduring meaning and value.',
            },
            7: {
                'type': 'Ruler',
                'desc': 'Creates order from chaos. Controlling and stern, responsible and organized.',
            },
            8: {
                'type': 'Magician',
                'desc': 'Wishes to create wonder and bring dreams to life. Visionary and spiritual.',
            },
            9: {
                'type': 'Lover',
                'desc': 'Sultry, attracting intimate moments, passion, loyalty, and betrayal.',
            },
            10: {
                'type': 'Caregiver',
                'desc': 'Protects and cares for others. Compassionate, nurturing and generous.',
            },
            11: {
                'type': 'Jester',
                'desc': 'Brings joy through humor, fun, and irreverence. Mischievous.',
            },
            12: {
                'type': 'Sage',
                'desc': 'Delivers insight and wisdom, serves as thoughtful mentor or advisor.',
            },
        },
        'setbacks': 'These are ways of characterizing people in terms of what they think, feel, and do, so it is a \
         wonderful Type system. It is somewhat loose, or arbitrary, certainly interpretive to the core, \
         so it would be difficult to develop this model to integrate with concepts outside of Jungian alchemy \
         and psychoanalysis. \
         Refers to Magenta core content often without reference to the \
         depth dimension (Level) of the current observation.'
    },
    'Enneagram': {
        'description': 'Unique system of roughly equal-represented personality archetypes. Originally \
        and traditionally based on humble thought experiments observing typical monk behaviors, \
        this model nevertheless is comprehensive, descriptive, and widely used, \
        helping people conceptualize self, others, and relationships. Types and meta-Types of this \
        model resemble the dynamics of other models, but features are split into units of three, rather than \
        two or four.',
        'types': {
            1: {
                'type': '1 Reformer',
                'desc': 'Rational, idealistic, principaled, purposeful, self-controlled.',
            },
            2: {
                'type': '2 Helper',
                'desc': 'Caring, demonstrative, generous, people-pleasing, emotionally possessive.',
            },
            3: {
                'type': '3 Achiever',
                'desc': 'Success-oriented, pragmatic, adaptive, excelling, driven, image-conscious.',
            },
            4: {
                'type': '4 Individualist',
                'desc': 'Sensitive, withdrawn, expressive, dramatic, self-absorbed, temperamental.',
            },
            5: {
                'type': '5 Investigator',
                'desc': 'Intense, cerebral, perceptive, innovative, secretive, isolated.',
            },
            6: {
                'type': '6 Loyalist',
                'desc': 'Committed, security-oriented, engaging, responsible, anxious, suspicious.',
            },
            7: {
                'type': '7 Enthusiast',
                'desc': 'Busy, fun-loving spontaneous, versatile, distractible, scattered.',
            },
            8: {
                'type': '8 Challenger',
                'desc': 'Powerful, dominating, self-confident, decisive, willful, confrontational.',
            },
            9: {
                'type': '9 Peacemaker',
                'desc': 'Easygoing, self-effacing, receptive, reassuring, agreeable, complacent.',
            },
        },
        'setbacks': 'Major vertical confusion. Type names vary widely. Complicated, or detailed. \
        Can be used for personal development in interesting ways, though methodologies vary and \
        efficacy is disputed.',
    },
    'Astrology': {
        'description': 'Based on birthday and pre-scientific observation of celestial bodies, \
        astrology is commonly used in contemporary expressions of Magenta and Red through Green Meme, and \
        celebrated for it\'s lack of predictive power and theoretical validity, or being, "just for fun." \
        Because it is superstitious and incorrect in its presumptions, it does not threaten \
        me by having correct or incorrect interpretations. It does not succesfully label people or \
        put them into imaginary boxes and heirarchical categories (only greedy patriarchs do that), \
        it does so unsuccessfully, ironically, \
        self-deprecatingly, and self-assuredly, or Green.',
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
        'setbacks': 'Pre-scientific and empirically untrue. Nevertheless, Western and \
        Eastern astrology have enjoyed endless widespread fascination, sales, \
        and usage as the general public\'s chosen personality typology. \
        It is in that sense more analogous to a fun holiday tradition myth than \
        a proper Type system. Nevertheless, many people today continue to publish and sell \
        books elaborating and exploring this system and its intracacies from magical, \
        mythical, rational, sensitive, and integral perspectives.',
    },
}
