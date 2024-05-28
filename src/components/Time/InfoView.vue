<script setup lang="ts">
const props = defineProps(['infoview']);
</script>
<template>
    <div class="info-template">
        <div v-if="props.infoview=='namaste'">
            <h1>Welcome to unLimited Time</h1>
            <p>A lightweight, open-source clock and calendar framework
                designed to improve time awareness.
            </p>
            <h3>Once you see it... there's no turning back.
            </h3><br>
            <h2>Deconstructing Roman/Gregorian Time:</h2>
            <h2>🕔 What's wrong with my clock? 😦</h2>
            <p>
                <b>Hours</b> divide Earth's daily rotation into 24 periods. 
                Each has 60 <b>minutes</b>, each with 60 <b>seconds</b>.
                Base-24 and -60 wrap cleanly around a circle, they cut in half many times, 
                but other than that,
                they belabor conceptualization and computation for beings who mostly
                have ten fingers and mostly work with base-10 number systems in daily life.
            </p>
            <h3>Days aren't round?</h3>
            <p> 
                Early sundials traced the progression of a pole's shadow as the sun crossed
                the sky, resulting in circular depictions of the day. This made great sense to 
                early theorists who derived time from the very circular paths of objects
                across the sky. We may even assume that
                the motion of our clock's hour hand mirrors the rotation of the planet, only 
                of course this is not the case. It goes around twice per day. 🌞 
            </p>
            <h3>Clocks don't need to wrap around a circle at all.</h3> 
            <p>
                It's just a visualization:
                three simultaneous pie charts, each hand traveling around a circle an arbitrary number
                of times. Not bad. We use pie charts in quantitative analysis a lot. They are not as
                useful for scheduling, which is why we schedule on grids rather than circles. 
                </p>
            <h3>What if my clock was designed for me?</h3>
            <h4>10 Sessions = 1 day</h4>
            <h4>100 Moments = 10 Whiles = 1 Session</h4>
            <p>Sessions are decimal numbers, as the sub-units are base-10. 
                Session, Moment, While, and Instant are all intuitive unit names that we already 
                use in common speech, so we're just going with the flow, and we can abandon the
                baggage of seconds, minutes, and hours. Since we're all familiar with our current
                system, it may be hard to see how convoluted it is, but it becomes more apparent if
                you are teaching a child how to read a clock, or any aspect of the Roman time system.
            </p>
            <h4>Ante Meridiem</h4>
            <p>
                Dividing <b>hours</b> into AM and PM gets the base closer to ten, which is why
                we prefer it, even though it adds a daily reset point
                and extra meta-data.
                How many people know what AM and PM stand for or mean? Why is time written in a dead language?
            </p>
            <h2>📆 What's wrong with my calendar? ☹️</h2>
            <p>
                Most of us ultimately prefer working either less than or more 
                than five out of seven week days, and most of us don't have the same preference every
                week.
                If we all dislike Monday, we should get rid of it. Five days is a Cycle. 
                Five days, like human fingers. 
            </p>
            <p>Months have weird names and unpredictable lengths, 
                and they don't really track anything. So Habits always have the same amount of days every time (45),
                and they evenly divide the seasons. 
            </p>
            <p>Holidays are clumped together oddly, they 
                happen at complicated and unpredictable times, they are often found culturally
                non-inclusive. On the first day of every Habit, we have a generic and secular
                Holiday, named the same as the Habit, and with the same themes, which can then
                optionally be expanded with relevant cultural or religious observances. 
            </p>
            <p>It is difficult to conceptualize ancient 
                history, as you have to subtract around the BC/AD change. So we set the start of
                unLimited time 12000 years ago, when timekeeping starts to matter, rather than
                2000 years ago, when Christians started taking it more seriously.
            </p>
            <h3>Sold. 👍🏿 How can I use this?</h3>
            <p>
                We encourage You to try out this system in your own life, and become part of the community. 
                Bookmark and share this demo as your own unLimited clock and calendar for now.
                For developers, you can implement unLimited Time into existing software, or refactor 
                my work with my blessing. This page computes unLimited Time and displays 
                visuals from JavaScript standard dates. Built-in 
                functions do a great job of tracking what milli-second it is. No need to reinvent 
                the wheel. 
            </p>
            <h3>Contribute</h3>
            <p>
                If you wish to see Stein unLimited develop this project, please 
                consider donating via our venmo link with a note on what you would like to see.
                We would like to develop an unLimited clock, lifestyle and scheduling app, and 
                extensions to bring unLimited Time into existing apps.
            </p>
        </div>
        <div v-else-if="infoview=='unlimited'">
            <h1>unLimited Time</h1>
            <h2>Reading unLimited Time:</h2>
            <div class="holiday-flex">
                <h3>Night 8.26`52</h3>
                <p>"Night twenty-six, fifty two."</p>
            </div>
            <p>Session decimal, "tick" Instants. It's a pun.
                You could also say, "Quarter Night".
            </p>
            <h2>Reading unLimited Date:</h2>
            <div class="holiday-flex">
                <h3>Memo 12 Tues 12024</h3>
                <p>"Memo twelve, twenty-four."</p>
            </div>
            <p>
            The last four digits of the year are the same, so in common speech,
            it is unchanged. We secretly subtract 12000 years (the dawn of time-keeping)
            instead of 2000 (Christ and Roman Empire).
            </p>

            <h3>Sessions Whiles Moments Instants - seems like a lot?</h3>            
            <p>
                It may at first. Consider how long it takes children 
                to understand the clock and calendar, how hard it is to pronounce 
                month names, how complicated and silly notions of "quarter-to" and "o'clock" 
                seem to the uninitiated. 
                Any system takes time to learn. This one is easier.
            </p> 
        </div>
        <div v-else-if="infoview=='year'">
            <h1>The Year</h1>
            <p>The first 360 days of a year are evenly divided into 8 45-day Habits, named for the generic Holiday 
                on the first, always Sun day. Each Habit contains 9 5-day Cycles, which are basically "weeks" without 
                Monday or Wednesday. A year also includes one extra
                newZen Cycle (360 + 5) before the new year starts, considered "outside of" time.
            </p>
            <h3>A seasonal calendar</h3>
            <p>
                Solstice is the maximum intensity point of seasonal change, marking the halfway points 
                    of the year. Equinox is the center intensity point of seasonal transition, and defines quarters 
                    of the year. 
                Habits divide seasons in half, changing within days of true solstice and equinox (displaced by newZen.)
            </p>
            <h3>Ditching months 🌒</h3>
            <p> 
            A Habit is roughly a month and a half. Months are archaically tied to moon cycles. 
            While it would be nice 
            to track those, they are basically incompatible with our solar year.
            You have to ignore years if you want to track the moon. Not worth it. At base, months are
            complicated, inconsistent, and pointless.
            </p>
            <h3>1 year = 360 days + newZen</h3>
            <p>
                Here's a really cool thing about 360: 
                It divides cleanly by 2, 3, 4, 5, 6, 8, and 9, allowing us to apply
                geometry and angle logic to the year more than we ever have before, which makes sense,
                since years actually are cyclical. 
            </p>
            <p><b>Notice which number got left out?</b> Which does
                not divide evenly by 360 degrees of a circle <em>or</em> 365 days of a year... <b>The answer is 7.</b> 
                The number of days in a week is actually the worst reasonable choice possible,
                based on ancient religious mythology.
            </p>
            <h3>Cycle math</h3>
            <p>
                Both 360 and 365 divide into 5-day Cycles. 
                Thus, there are 72 Cycles (73 with newZen) in a year.
                By declaring a five day "timeless" newZen festival at the start/end of the year, as the ancient 
                Egyptians did, unLimited Time allows us to depict a year as a circle with a + and an X 
                in the middle. Seasons and Habits. The calendar wraps around a wheel where
                each day (not counting newZen), is one degree of rotation -  
                not a new idea but perhaps exotic for those unaccustomed.
            </p>
            <h3>Now, an interesting thing starts to happen....</h3>
            <p>
            We all know from Tony Hawk pro skater that half of a 360 is a 180.
            The year's halfway point is 180 days.
            We know 90 degrees divide the 360 circle into quadrants.
            These are the solstices and equinoxes.
            Divide in half once more, and the 45-degree turns of the year create Habits.
            </p>
            <h3>Just getting started...</h3>
            <p>Every Year starts on Sun day, the Struggles Holiday on the first of the Struggles Habit.
                The theme of the Struggles Habit, and the Struggles Holiday, is struggle, hardship, and 
                perseverence. Every Holiday is first of every Habit, always Sun day, always themed exactly what 
                it's name is. Birthdays and anniversaries are the same day of the 
                week every time. Every day of every year is the same Day and Date as it was every other year.
                The rent or other monthly bill would occur every 45 days every time, and would reflect the same
                length of time as all other bills. Business quarters and school semesters align with
                the actual calendar.
                If you think about all that, it's pretty crazy this isn't default. 🕵🏿‍♀️ 
            </p>
            <h2>unLimited Era: Earth As People</h2>
            <p>
                We aim to conceptualize human civilization, the simultaneity and inter-relatedness
                of remote places and events, and the accelerating nature of development.
                Ancient Western thinkers suffered distortions of placing themselves at the center. 
                They declared the start of history at the birth of their religion, 
                thousands of years after the pyramids of Africa and great empires of Asia. 
            </p>
            <h3>The haze of Western bias 🎴</h3>
            <p>
                Ancient times (BC) are difficult to conceptualize, because you have to 
                both add and subtract. We might refer to an event in 1976 BC as "4000 years ago (as of 2024)",
                but this remains problematic because our frame of reference is ever-changing. If you 
                read this years later, you have to do more math. Imagine now that you 
                are writing about what I'm writing, and somebody is reading what you've written ten years later. 
                The problem multiplies itself.
            </p>
            <p>
                <b>Solution: the event took place 8024 years into history, 4000 years later is now
                    12,024, and years never decrease forward through time.</b> No matter 
                    when you read this, it's true. No calculation.
            </p>
            <h3>A calendar measures history</h3>
            <p>
                We estimate the historical beginings of civilization
                somewhere between 10 and 80+ thousand years ago, depending on what qualifies, so we can start time anywhere
                in that fuzzy region, and describe every year since then as a positive 
                number. We maintain the significance of the BC/AD 
                change by placing that point at the year 10,000 instead of 0, so that nothing in history 
                happens before the unLimited era, and we live roughly 12,000 years in. 
            </p>
            <h3>Full compatibility</h3>
            <p>
                In common speech, we only use a year's last two digits 
                anyway. Not only these, but the entire four-digit number, remains 
                unchanged. When talking history, the full five-digit number 
                actually means something: <b>years into history.</b>
            </p> 
            <h3>Does it matter before that?</h3>
            <p>
                It really isn't 
                meaningful to talk particular years twenty-five million years ago. 
                One particular year in prehistory is indistinguishable from the next.
                People are the only timekeepers, so time tracks the age of people. 
                Just like with temperature, only particular scientists would need to consider
                the current year to be approaching 14 billion.
            </p>
        </div>
        <div v-else-if="infoview=='clock'">
        <h1>unLimited Clock</h1>
        <h3>As above, so below.</h3>
        <p> Days begin and end before sunrise (not midnight). Time of day is designed around the 
            way people naturally talk and think about time. A day divides into 10 Sessions, noticeably 
            different in terms of how the world looks and what people are usually up to, with an 
            extra 0.8x-length zenSession considered "outside" of the day. 
        </p>
        <h3>A typical day:</h3>             
        <p><br><b>1 Dawn:</b> Early birds rise, light appears.<br>
            <b>2 Breakfast:</b> Wake up, prepare, commute, show up.<br>
            <b>3 Morning:</b> First chunk of work day.<br>
            <b>4 Lunch:</b> Middle period and work break.<br>
            <b>5 Afternoon:</b> End chunk of work day.<br>
            <b>6 Dinner:</b> Home life and duties.<br>
            <b>7 Evening:</b> Nightlife and mellow time.<br>
            <b>8 Night:</b> Common bedtime range.<br>
            <b>9 Midnight:</b> Middle section of sleep time.<br>
            <b>10 Dead:</b> The "dead of night".<br>
            <b>~zen~:</b> Reserved generic sacred timeslot.
            </p>        

        <h2>Sessions</h2>
            <p>A <b>Session</b> is about how long an activity reasonably takes (about 2.2 hours), and is
            an amount of time that creates a noticable change in daylight.
            Sessions divide the day in ten, with one ~zen~ Session that resets the day
            before most people are awake (5am). We sleep through about three of them.
            </p>
            <p>
            Sessions are centered around typical sleep and meal habits, and often 
            coincide with a full activity, a work period, an occasion,
            weather pattern, group interaction, or location. Each Session has a name
            that indicates what a typical person does around that time,
            and these names also mirror common speech.
            </p>
            <h3>Sessions are intuitive.</h3>
            <p>Unlike with hours, we generally use
            the name ("Dawn") rather than the number. Resultantly, people will not even notice
            a difference when you speak unLimited Sessions.
            </p>
            <h3>😎 It's Your time now.</h3>
            <p>While we present what people generally do in a day as a clock,
            the point is not to prescribe a particular lifestyle or belief. Nevertheless,
            this framework aims to inspire health and productivity, and so is modestly
            opinionated.</p>
            <h2>~zen~</h2>
            <p>The zenSession is just a time for timelessness. Most perspectives acknowledge
            or recognize perhaps a time-transcendent quality to reality. It was a creative 
            indulgence, perhaps, to take this lease-desirable span and declare it in the name
            of deconstructing time itself. An ideal
            time to meditate, or pray, or assert affirmations, catch a fish, work on your short game 🏌🏿‍♀️, 
            catnap in the old office chair, silly time, micro dance party, contemplation, lovemaking,
            watch the sun rise, do anything you want. It's like a Room of Requirements; anything
            you can't make time for 😜 most people just sleep through it. Which is great. 
            </p>
            <h3>Timeless Time</h3>
            <p>
                A miniature Holiday before the sunrise,
                where we lovingly place the Instants, Moments, and Whiles that don't conform 
                to a base-10 grid. Use zenSession to awaken your senses, enliven your soul, renew, let go, 
                make prophecy, plans, and judgments. 
            </p>
            <h3>Daily commitement</h3>
            <p>People fall out of important routines such as meditation because there's never
                enough time. We've literally made time for it.  
                One justification: if you get more than 5 hours of sleep, an 
                additional hour of meditation might be more beneficial than an 
                extra hour of sleep. Many have reported feeling more rested, better health outcomes,
                and overall improved personal energy and outlook.
            </p>
            <h3>What's the punch line?</h3>
            <p>
                There's 80 Instants in a Moment and 80 Moments in a 
                zenSession. Quantifying the practice is discouraged. 🤣
            </p>

        </div>
        <div v-else-if="infoview=='moment'">
            <h1>Moments and Whiles</h1>
            <h2>Units of situational awareness</h2>
            <h3>Whiles</h3>
            <p> People often remember things 
                in terms of 10-15 minute periods, "a while". We simply made that official.
                Being one minute early or late for something makes no real difference. A While
                is where it actually starts to matter.
            </p>
            <h3>Moments</h3>
            <p> 
                If you ask someone to describe what happened in a While, they
                will describe a progression of "moments". In practice, these Moments are
                slightly longer than minutes, which is why there are 80 Instants in a Moment,
                rather than 60.
            </p>      
            <h3>1 Session = 10 Whiles = 100 Moments</h3>
            <p>
                A Moment is like a sentence, and a While is like a paragraph. When you tell a story, 
                you describe a situation (chapters/Sessions), in which a progression of events (paragraphs/Whiles)
                take place with particular actions and details (sentences/Moments). In the same analogy,
                Instants are like individual words, which are mostly lost in service of a larger context.
                Just as speed-readers largely intuit or skim individual words, people do not generally 
                remember or even track particular Instants.
            </p>
            <p>
                The best way to test this system, is to say things like, "I had a session yesterday.
                It will take me a while to get there. Give me a moment, please," and ask yourself
                whether you meant roughly what unLimited Time indicates.
            </p>
        </div>
        <div v-else-if="infoview == 'instant'">
        <h1>Instants</h1>
        <h2>1 Instant = 1 second</h2>
        <p>unLimited Time runs seamlessly with existing systems, software, 
        and hardware, based around seconds and milliseconds. The goal was to improve
        timekeeping with maximum compatibility and interoperability. Technically,
        this is a framework, not its own system.
        </p>
        <h3>80 Instants per Moment, 800 per While, 8000 per Session.</h3>
        <h3>For you math nerds:</h3> 
        <p>Why are there 80 Instants rather than 100?</p>
        <h4>Greg Day: 24 * 60 * 60 = 86400 seconds<br>
            unLimited: 10.8 * 100 * 80 = 86400 Instants
        </h4>
        
        <p>In accepting seconds, we must accept a kink in the base-10 somewhere. 
        If you think about it a lot, we don't need to conceptualize and do mental math 
        with momentary incidents as much as with medium and long term scheduling, so we accept
        the trade-off of a number base matching our number of fingers not including thumbs.</p>
        <h3>✋🏿🤚🏿</h3>
        <p>
            We don't generally think in terms of Instants. They are more for quantitative measurement
            that is generally performed by machines anyway.
        </p>
        </div>
        <div v-else-if="infoview=='calendar'">
            <h1>unLimited Calendar</h1>
            <h2>Habit: the time it takes to change</h2>
            <h3>1 Habit = 45 days</h3>
            <p>
                It takes roughly 45 days to develop an enduring ability,
                lifestyle or social habit, and so this seemed a logical way to divide time. We encourage using the Holiday to, among other things,
                take a high-level assessment of one's own reality, and select one thing to 
                seriously commit to over the course of the Habit.
            </p>
            <h3>1 Year = 8 Habits + 5 days (newZen)</h3>
            <p>Habits begin and end at seasonal halfway points. A Habit is half of an Earth season. Their names come from the Holiday
            which occurs on the first day. These are generic, or "mono-myth" Holidays, 
            which can be replaced with any existing observances occuring nearby. 
        </p>

            <h2>Cycle: the flexible work schedule</h2>
            <h3>1 Habit = 9 Cycles</h3>
            <h3>1 Year = 8 Habits (360 days) + newZen Cycle (5 days)</h3>
        <p>A Cycle is a five-day "week" excluding Monday and Sunday. Drop "day"
            from the day name to distinguish the two systems, which of course don't line up.
        </p>
        <h3>Sun Tues Thurs Fri Satur</h3>
        <p>Cycles, like weeks, set the work schedule. You'll notice you still have two 
            "weekend" days, but only three work days. Hmm. The cards are stacked in your
            favor. Instead of working 71% of days, you work 60%. 
        </p>
        <h3>I can do that?</h3>
        <p>
            Consider all the vacation 
            days people get, PTO, sick days, playing hookey, and of course, burn out
            and resignation, unemployment. Why? Our default work schedule is overly 
            ambitious. Let's have an option that isn't the temp or part time insult, but also
            isn't the entirety of one's life - an option for today's work force. Here is the 
            flexibility employers and employees crave. Instead of breaking 
            dumb rules, make good ones. 
        </p>
        <h3>So this is for lazy bums?</h3>
        <p>
            It's for everyone in real life. Let's now say instead that you are an 
            ambitious person. You still have to rest on Sun, you have to take care of yourself.
            But you can work on Satur, and now you're working 80% of days. 
        </p>
        <table class="work-schedules">
            <tr>
                <th>WORK SCHEDULE</th>
                <th>32-hour week (PT)</th>
                <th>40-hour week (FT)</th>
                <th>50-hour week</th>
                <th>3-day Cycle</th>
                <th>4-day Cycle</th>
            </tr>
            <tr>
                <th>% of DAYS</th>
                <td>57%</td>
                <td>71%</td>
                <td>89%</td>
                <td>60%</td>
                <td>80%</td>
            </tr>
            <tr>
                <th>% of LIFE</th>
                <td>19%</td>
                <td>24%</td>
                <td>30%</td>
                <td>20%</td>
                <td>27%</td>
            </tr>
        </table>
        <h3>Think about it...</h3>
        <p>Some people sometimes clearly want to work 60%, some want to 
            work 80%, and mostly people are disgruntled <em>sometimes</em> with 70%. We often say "people aren't meant to 
            live like this," and we listened. Instead of default full-time or you're worthless,
            you work "unLimited Time," giving 10% more or less than average each Cycle as your ambitions, life, 
            health, and energy dictate. 
        </p>
        <p>Oftentimes, employers have too much or too little work and have 
            to do overtime or slash hours, so 
            here you go. Get rid of silly loopholes we're using to 
            subvert the miserable emprisonment of the 7 day full-time work schedule, and 
            commit to a system that expresses You.
        </p>
        
        <h1>Holidays</h1>
        <h3>1 Sun every Habit</h3>
        <p>The first of every Habit is a Holiday Sun day sharing the name of the Habit. 
            These are derived from secular themes and global holidays occuring 
            around the same time. Whatever
            locale holidays exist in your culture can be substituted in. For those more 
            interested in unLimited culture, we invite you to celebrate, embody, and add your own 
            affectations or alterations to these prototypes, which can be updated as culture 
            develops. The spirit of every Habit and every Holiday is to both include  
            the diversity of traditional sentiments and distill them
            into a universal and fundamental essence, and then use those as names.
        </p>
        <div class="holiday-flex">
            <h3>Struggles</h3>
            <p>❄️ Respectfully acknowledge the cold and harsh.</p>
        </div>
        <div class="holiday-flex">
            <h3>Flowers</h3>
            <p>🌺 Love and appreciation, growth, new beginnings.</p>
        </div>
        <div class="holiday-flex">
            <h3>Elders</h3>
            <p>🏵️ Honor seniors, ancestors, past origins.</p>
        </div>
        <div class="holiday-flex">
            <h3>Memo</h3>
            <p>🎗️ See the reflections of history.</p>
        </div>
        <div class="holiday-flex">
            <h3>Peace</h3>
            <p>🎆 Sing, dance, party, be free.</p>
        </div>
        <div class="holiday-flex">
            <h3>Harvests</h3>
            <p>🏆 Sacrifice, teamwork, ritual, preparation.</p>
        </div>
        <div class="holiday-flex">
            <h3>Hallows</h3>
            <p>🎃 Death, blackness, tricks, spooky stuff.</p>
        </div>
        <div class="holiday-flex">
            <h3>Feasts</h3>
            <p>🎄 Togetherness, abundance, charity, good cheer.</p>
        </div>
        <div class="holiday-flex">
            <h3>~newZen~</h3>
            <p>🧘🏿‍♂️ One free timeless Cycle. Don't start over. Wake up.</p>
        </div>
        <p>
            This is not in any way to discourage traditional observances, rituals or 
            practices. It is to set a public tone that all people can celebrate together in 
            spite of differing views. The newZen is everybody's newZen. 
            These are "mono-myth" or meta-Holidays, and they are optional.
            Whether you spend the Struggles working, drinking, crying,  
            fasting, praying, partying, getting together with family... it's just called 
            the Struggles.
        </p>

        <h2>newZen Cycle</h2>
        <p>
            A special 5-6 day Holiday newZen Cycle allows Habits to be symmetrical and equal 
            length every year. On leap years, the extra day is added to newZen. Use 
            this time to distance yourself from the baggage of the preceding year, as 
            well as the pressures and expectations of the future. It is a time for the 
            eternal Now, considered to exist in between years.
        </p>
        <h3>Timeless Festival</h3>
        <p>We discourage timekeeping 
        and time-based conceptions during this Holiday.
        Many cultures treat this time as a holiday festival, while others celebrate only 
        the first of the year. 
        The Egyptian calendar chose 360 days with a festival period because 
        it seemed logical. We arrived at exactly the same solution 
        before we knew it. 
        </p>

        <h3>Judgement</h3>
        <p>To get the full integrated effects of the Habit and Holiday concepts, we encourage 
            a Judgment ritual on each Holiday. This is a day to act as your own coach and 
            manager, to reflect on the previous Habit, to decide where you are at with everything,
            how you feel about everything, even though you don't know for sure. You're just making 
            firm decisions about who you are, what you're doing, what you think, feel, and do, and 
            leaving all of these perceptions open to future development. This is a time to make 
            decisions about now, to check in, to let go, to move forward.
        </p>
        <h3>unLimited Culture</h3>
        <p>Our time system is intended for all people, encouraging comparative cultural synthesis and 
            integral inclusion. We use zen as a default spirituality because we 
            find it agreeable, global, open-ended, and also robust. Using unLimited Time
            does not mean you have to meditate or develop yourself, any more than an 
            American atheist using standard time has to believe in Santa Claus or Columbus.
            For average users, these would be vacation days, date nights, and road trips.
        </p>
        <h3>Holy and Divine</h3>
        <p>For the spiritual, these are the times wherein we observe the personal, 
            the cultural, the secular, the intimate, the beautiful, we commune, we practice.
            Psychologically, we may do things to reset, reboot, or self-manage. Just as with 
            traditional holidays, we have distilled the collective spirit of a time of 
            season into an official calendar date. These are focus nodes. 
        </p>
        </div>
        <div v-else class="hack"></div>
    </div>
</template>
<style lang="sass">
.work-schedules
    td, th
        border: 1px solid white
    @media screen and (max-width: 400px)
        display: none
// this works but it doesn't reset
// html:has(.info-template div p)
//     overflow-y: hidden
.holiday-flex
    display: flex
    flex-wrap: nowrap
    align-items: center
    justify-content: space-between
    h3
        color: #0F0
        text-wrap: nowrap
        text-align: left
        border-right: 1px solid #444
        padding-right: 1em
    p
        padding-left: 0.5em
        // display: flex
        // justify-contet: center
        flex-wrap: wrap
        text-align: right

</style>