// holiday/habit descriptions

// FULL:
// base roman unlimited dayschedule session while instant habit holiday solstice 
// clock habits newzen zendate

// Time.vue 
//   base unlimited roman
// OGSvgs.vue 
//   clock session while instant
// YearWheel.vue 
//   zendate holiday solstice habits newzen
// ZenHabit.vue habit
// ZenDay.vue dayschedule
export const toggleInfoView = (infoView: string) => {
  if (infoView === "base") {
    return `
      <h1>Welcome to unLimited Time.</h1>
      <h3>Complete time and date system.<br>
          A lightweight, open-source re-thinking of standards.<br>
          Designed for simplicity and productivity with human mind and body.
      </h3>
      <h4>
          Got a chronic case of the Mondays? <br>
          Want to <em>do</em> something about it?
      </h4>
      <p>
          Why is there Monday?<br>
          Surely, there's some logical reason why a week is seven days, like the span of Creation in the Bible.
          Ancient religious empires made it so you work so much that you're unhappy one seventh of the time.
      </p>
      <h3>
          And once you see it... there's no turning back.<br>
          A week can be whatever we want.<br>
          No Monday.</h3>
      <h3>
          Let's keep the whole weekend.<br>
          And the latter half of the week is nice.<br>
          Tuesdays are all right.<br>
          After careful consideration, Wednesday's out.
      </h3>
      <h2>Sun Tues Thurs Fri Sat</h2>
      <p>
          With this five-day Cycle, you can work "more than full-time" 
          like most professionals, 4 out of 5 days a Cycle.
          If one day off isn't enough, switch to a 3-day work Cycle, 2 days off. 
          The Cycle doesn't tell you when to work, it gives 
          you flexible options because people have their "on" and "off" Cycles.
      </p>
      <h4>
          There was no reason for seven-day weeks.<br>
          Five is easier to do math with.<br> 
      </h4>
      <p>
          Would it be easier to figure out how many times five or seven go into 365?<br>
          The year is about 365 and a quarter days.<br>
          Every four years we have to insert an extra day at a random point.<br>
          There are several sneaky things like that going on.
      </p>
      <h4>With unLimited, the sneakyness is out in the open</h4>
      <p>unLimited Time unapologetically runs on top of standard computer dates. It's a library, or lens.</p>
      <p>We have ~zen~ periods. These occur at the end of the year and the middle of the night.</p>
      <p>We integrate the sneakiness, but declare when the sneaky sneaky happens 
          - while we're sleeping, zenSession, and when the sun's gone, newZen Cycle.
      </p>
      <p>This affords us a great deal of leeway. Slack, rather than insertion.</p>
    `
  } else if (infoView === "roman") {
    return `
      <h1>Standard Roman Date and Time.</h1>
      <h3>
      We now look at the various ways that the clock can create stress.
      </h3>
      <p>
          Hours are crazy, really. An hour tells you what time of day it was. It refers to the position of the sun, 
          and thus what people are generally doing around that time. But why do we have 24 
          of them, in repeating twelves? 
      </p>
      <h4>Ten-fingered people work well with 
          powers of ten.</h4> 
      
      <h3>Why 24 hours: 60 minutes: 60 seconds?</h3> 
      <p>The answer is no.<br>
          It's arbitrary. 
      </p>
      <p>
          Notice 3PM and 3AM don't have all that much in common. <br>
          Three tells you it's a quarter of the way past maximal sun position.<br>
          But that's a geometric calculation.
      </p>
      <p>
          It's sad, really. They use two twelves rather than 
          the logical 24-hour (military time) system.<br>
          Twelve's almost ten. You can almost count them on your fingers.<br>
          That's intuitive. <br>
          We have a primal concept of how much ten is. 
      </p> 

    `
  } else if (infoView === "unlimited") {
    return `
      <h1>unLimited Date and Time.</h1>
      <h2>This was written: Night 8.26\`52</h2>
      <h4>
          Session name and decimal, then "tick" Instants.<br> It's a pun.
      </h4>
      <h3>
          And it really is more simple.
      </h3>
      <h3>
      Aren't there a lot of hidden problems with a system like this?
      </h3>
      <p>
          The short answer is yes, but this fixes many of them. Since it is generated from standard time 
          with Daylight Savings, timezones, leap years and even leap seconds (time is itself 
          relative to motion, unfortunately) unLimited Time is able to flex its focus more on emulating the 
          human perception of time, and systematizing it an orderly and intuitive manner.
      </p>
      <h3>Intuive comprehension of human life: better recall, better time containers.</h3>
      <p>
          Instead of hiding stuff and pretending it isn't weird, we acknowledge and embrace it each day.<br>
          The 0.8-length <b>~zenSession~</b><br> Between beginning and end. A 
          timeless span when most people are deep in sleep, but some 
          practice meditation, some jog, some come home from work or an insane party, or playing video games 
          compulsively.
      </p>
      <h3>Takeways:</h3>
      <h4>
          We took the clock out of a circle and placed it in a decimal grid like a planner.<br> 
          We took the calendar out of a grid and wrapped it around a 360 circle like seasons.
      </h4>
      <p>
          You can implement unLimited Time yourself, or update my work with my 
          blessing. It's generated from our current system, since 
          Society is doing a great job of keeping track of what milli-second it 
          is. No need to reinvent the wheel.
      </p>
    `
  } else if (infoView === "dayschedule") {
    return `
      <h1>Daily Schedule
      <h3>Session planning is intuitive.</h3>
      <h4>
          1 was before you got up, Dawn.<br>
          2 was when you woke up and got ready, Breakfast.<br>
          3 was the first chunk of your day, Morning<br>
          4 was the lunch rush, Lunch<br>
          5 second half of the day, Afternoon<br>
          6 back to home life, Dinner<br>
          7 night life or mellow time, Evening<br>
          8 bedtime, Night<br>
          9 sleeping, Midnight<br>
          10 the "dead of night", Dead<br>
          ~zen~ That hazy period when only farmers and monks are up<br>
      </h4>
      <h3>
        Might not be your lifestyle, but it's what goes on in a day.
      </h3>
      <h3>
        It turns out it's difficult to make time for zen.<br> 
        I have literally made time for it. 
      </h3>
      <p>
          As for "making time"; if you get more than 5 hours of sleep a night, an 
          additional hour of meditation might be more beneficial to you than an 
          extra hour of sleep. You may feel more rested.
          <h4>
          We recommend you use zenSession as a time to awaken your senses, enliven yourself, renew, let go, 
          make decisions, plans, and judgments. A miniature Holiday before the sun rises. 
          This is where we lovingly place the Instants, Moments, and Whiles that don't conform to a base-10 grid.
      </h4>
      <p>
          Outside of ordinary time, where time does not flow. That's part of the day. You can 
          break it down to Instants, and see the strange little joke that theres 80 Instants 
          in a Moment and 80 Moments in a zenSession. But quantifying the practice is discouraged.
      </p>

    `
  } else if (infoView === "session") {
    return `
      <h1>Session</h1>
      <p>
      When I think of a day in its totality, I usually come up 
      with ten or so sessions. <br>
      Let's call them Sessions.</p>
      <p>A <b>Session</b> is one tenth of the day.<br> 
      Roughly the total length of a meal period.<br> 
      Or an activity, a focus, most events,<br> 
      most interactions and activities, movies, changes of weather.
      </p>
      <h4>A Session is our version of an hour.<br>
          They are modeled after a noticeable change of day or event.<br>
          Their names are what an average person might call that time of day.
      </h4>
      <h2>Days begin and end before sunrise (not midnight).</h2>
      <h2>Each day has 10.8 ("10 and zen") Sessions.</h2>
      <h2>The unLimited Clock system</h2>
      <h3>1 Dawn<br>
        2 Breakfast<br>
        3 Morning<br>
        4 Lunch<br>
        5 Afternoon<br>
        6 Dinner<br>
        7 Evening<br>
        8 Night<br>
        9 Midnight<br>
        10 Dead<br>
        ~zen~
      </h3>
    `
  } else if (infoView === "while") {
    return `      
      <h1>While</h1>
      <h3>Situational awareness.</h3>
      <p>
          When you tell a story, you describe a progression of Moments.<br>
          A <b>Moment</b> is the time in which something happens, or things stay 
          the same.<br> 
          Moods and attitudes exist in the Moment. <br>
          A thought or feeling or train of thought or point often lasts a Moment.
      </p>
      <p>
          Minutes are also arbitrary and difficult to work with. What is a minute?<br>
          I remember things 
          in terms of 10-15 minute "whiles."
          Each with 10 "moments."
          Each moment was maybe like 80 "instants."
      </p>
      <h3>10 Sessions: 100 Moments: 80 Instants</h3> 
      <p>Why are there 80 Instants (Seconds) rather than 10?</p>
      <p>You can work out the math yourself, but a second was designed to work with weird 
          numbers. What I've worked out is actually a mathematical hack.<br>
          For you math nerds: 
      </p>
      <h3>Greg Day: 24 * 60 * 60 = 86400 seconds<br>
          unLimited: 10.8 * 100 * 80 = 86400 Instants
      </h3>
      <p>
          The clarity of unLimited Time comes at the cost of a couple quirks.<br>
          Up-front sneakiness.<br>
          For subtle clarity.
      </p>
      <p>
      And if you're still hung up on why it's 80 Instants in a Moment,<br> 
      and how 0.8 of a Session sneaks in as zenSession...<br>
      Sticking with equivalent Instants, Days, and Years, and stacking those with base-10s,<br> 
      denominator options were limited. I chose 8.<br>
      We have 8 fingers not counting thumbs.
      </p>
    `
  } else if (infoView === "instant") {
    return `
    <h1>Instant</h1>
    <p>
    How to handle seconds? No need. While seconds are 
    arbitrary, it is essential to have a fine time-keeping unit, and seconds and milliseconds 
    behave admirably. unLimited Time remains compatible with Gregorian 
    time, existing systems, software, and hardware.             
    </p>
      <h2>Instant and second are equivalent.</h2>
      <h2>There are 80 Instants in a Moment, 800 per While, and 8000 per Session.</h2>
    `
  } else if (infoView === "habit") {
    return `
    <h1>Habits and Cycles</h1>
    <h3>How many days should we have in a year?</h3>
    <p>
        360 happens to wrap around a circle pretty well. Great.<br>
        Seasons are kind of circular.
    </p>
    <p>Both 360 and 365 divide into 5-day Cycles. <br>
        Thus, there are 72, (or 73 with newZen Cycle), Cycles in a year.</p>
    <h3>Now, an interesting thing starts to happen....</h3>
    <p>Every Year starts on the first of a Cycle.<br>
        Every Year starts on the same day of the Cycle (Sunday).</p>
    <p>
        Every day of every year is the same Day and the same Date as every other year.<br>
        If you think about that, it's actually a bit crazy.
    </p>
    <h3>But we're just getting started making things simple.</h3>
    <p>
        Here's a really cool thing about 360. <br>
        It divides cleanly by 2, by 3, by 4, by 5, by 6, and by 8.<br>
        Now we can simply apply the logic of angles to the days of the year.
    </p>
    <p>
        We all know from doing stunts that half of a 360 is a 180.<br>
        So the year has a halfway point at 180 days.<br>
        And we know that 90 days is one of four turning points of 360.<br>
        These are the solstices and equinoxes.<br>
        90 days is pretty long. About three months (since months are inconsistent.)<br>
        And let's divide those into 45 degree (or day) turns of the year.<br>
    </p>
    <h3>
        Introducing Habits.
    </h3>
    `
  } else if (infoView === "holiday") {
    return `
      <h1>Holidays</h1>
      <h2>The first of every Habit is a generic Holiday with the same name.</h2>
      <h2>newZen is a special 5-6 day Holiday Cycle at the end/beginning of the year.</h2>
      <h2>On leap years, the extra day is added to newZen.</h2>
      <p>Our Holidays distill traditional holidays into a universal and fundamental essence,
            and that names both the Habit and the Holiday.
        </p>
        <p><b>1 Struggles: </b>Respectfully acknowledge the cold and harsh.</p>
        <p><b>2 Flowers: </b>Love and appreciation, growth, new beginnings.</p>
        <p><b>3 Elders: </b>Honor ancestors and past origins.</p>
        <p><b>4 Memo: </b>See the reflections of historical choices.</p>
        <p><b>5 Peace: </b>Sing, dance, party, and celebrate.</p>
        <p><b>6 Harvests: </b>Rituals of sacrifice, conclusions, and preparation.</p>
        <p><b>7 Hallows: </b>Death, mortality, tricks and spooky stuff.</p>
        <p><b>8 Feasts: </b>Family gatherings and good cheer.</p>
        <p><b>~newZen~: </b>One free timeless Cycle. Don't start over. Wake up.</p>
    <p>
            These are generic open-source Holidays that can be used as defaults, or whatever 
            observances you may have in your own tradition. Holidays are given 
            general, secular names, as I don't want to push a single tradition or mythology 
            on the rest of the world. For example, you can call 
            your Feast day Thanksgiving, and carry those connotations. We call 
            it Feasts.
        </p>
        <p>
            This is not in any way to discourage traditional observances, rituals or 
            practices. It is only to set a public tone that all people can celebrate together in 
            spite of differing views. The newZen is everybody's newZen. We are talking about 
            simplicity, not religion. Holiday names were granted in a manner 
            similar to how George Lucas conceived of the force; take what Holidays generally are 
            and then call them that. These are "mono-myth" or meta-Holidays, and can be used 
            for any purpose (while recommending topical themes.)
        </p>
        <p>
            You can spend the Struggles with your family, spend it drinking and crying,  
            spend it fasting and praying, spend it partying. It's just called the Struggles.
        </p>
    `;
  } else if (infoView === "solstice") {
    return `
      <h1>Season Changes</h1>
      <h2>Solstice is the maximum intensity point of seasonal change, marking the end and halfway point of the year.</h2>
      <h2>Equinox is the center intensity point of seasonal transition, and defines the quarters of the year.</h2>
      <h3>
      Seasons are sensible, and will be kept. In fact, more so. 
      </h3>
      <p> 
        Months are archaically tied to moon cycles. While it would be nice 
        to track the moon, the feminine, and the surf better, moon cycles are really basically 
        incompatible with the length of the year.<br>
        You have to ignore years if you want to track the moon. Not worth it.</p>
      <p>
        We've moved the solstices and equinoxes by no more than two and a half days (half newZen Cycle.)<br>
        But now we know when they are.
      </p>
      <p>
        We rarely conceptualize the days and years wrapped around a seasonal circle.<br>
        unLimited Time allows you to draw a circle with a + and an X in the middle.<br>
        You have Habits, and also the seasons, and you can further divide them into 
        forty-fives and fives to see the entire Calendar wrapped around a circle, which is 
        not a new idea but may seem exotic for those accustomed to a grid layout.
      </p>
    `;
  } else if (infoView === "clock") {
    return `
      <h1>unLimited Clock Time</h1>
      <h3>Sessions, Whiles, Moments, Instants. That seems like a lot, right?
      </h3>            
      <h3>Well, recall that these names are already commonly used this way.<br>
          We've quantified them.</h3> 
      <p>
          Sessions are decimals, like dollars.<br> 
          Moments and Whiles: pennies and dimes.<br> 
          A Moment is 1% percent of a Session.<br>
          A While is 10% of a Session.<br>
          A Moment is 10% of a While.<br>
          A Session is 10% of a Day.<br>
      </p>
      <h4>To make it all work, that's why we have zenSession and 80 Instant Moments.</h4>
      <h4>In case you were wondering.</h4>
      <h4>Behold the benefits of a base-10 system mod.</h4> 
      <p>
          It may seem confusing at first.<br> 
          Consider how long it takes children 
          to understand the clock and the calendar, how hard it is to pronounce everything, how 
          complicated and silly notions of "quarter-to" and "o'clock" seem to the uninitiated. 
          <br>How many people can tell me what PM stands for? Not many. <br>
      </p>
      <h3>Why have anything unneeded?<br> That's Limiting. 
          <br>This isn't an expansion, it's a clean-up.
      </h3>
    `;
  } else if (infoView === "habits") {
      return `
        <h1>Habits</h1>
        <h2>A year has 8 Habits, and one extra newZen Cycle all by itself.</h2>
        <h2>A Habit is 45 days, with 9 Cycles of 5 days.</h2>
        <h2>Habits are season halfway points, they begin and end at Solstice and Equinox.</h2>
        <p>
            Forty-five days is about how long it takes to establish a lifestyle habit, 
            for something to normalize, or to make a consisent connection.<br>
            You could use the first of every Habit as a Holiday to choose the next habit-forming period.<br>
        </p>
        <h3>What about months?</h3>
        <p>
            Months have weird old names and don't really mean anything or correspond to the moon.
            They are all different amounts of days for 
            no reason. <br> 
            You don't have to memorize a poem to know how many days are in each Habit.<br>
            We are wasting our children's time.<br> 
            And what's up with Holidays? The sneak up all over the place - they never happen at a predictable time!
        </p>
        <h3>No more guessing.</h3> 
      `;
    } else if (infoView === "newzen") {
    return `
      <h1>newZen</h1>
      <h2>The extra Holiday newZen Cycle allows Habits to be symmetrical and equal 
      length every year.</h2>
      <p>
        The newZen is the end and beginning of the year lasting five or six days, depending on leap year. 
        It can be thought of as a Holiday, as many 
        cultures already do at new year. It is encouraged to use 
        this time to clear yourself of the baggage of the preceding year, to gear 
        yourself towards the new year, to evolve forward into the Future. 
        While newZen may sound exotic, 
        the Egyptian calendar chose 360 days with a Festival period because 
        it seemed logical. We arrived at exactly the same solution 
        before we even knew this was so.
      </p>
    `;
  } else if (infoView === "zendate") {
    return `
      <h1>unLimited Calendar</h1>
      <h3>
          It's difficult to conceptualize the historical state of the world, the simultaneity 
          of various places and times, and their inter-relatedness; how history overlaps.
      </h3>
      <h2>It's all in relation to the After Death of Christ.</h2>
      <h3>When they made up calendars, they wanted them to go back to the start of time.<br>
          They meant the history of civilization.<br>
          They figured hell, history begins now friends, we've made Calendars!<br>
          And years start after we received His sacrifice, because they had no idea how much time 
          was covered in the Bible, civilization, or the world.</h3>
      <h2>When did Years start happening?</h2>
      <p>
          Pre-Christian times are made difficult to conceptualize, because you're adding
          a negative number thousand BC, plus the two thousand years it's been AD. We don't 
          want this to be the year 4 Billion, like StarDate. It really isn't 
          meaningful to talk particular years twenty-five million years ago. 
          A particular year in prehistory is indistinguishable from another.
      </p>
      <h3>This is why the choice was made to start actually counting years.</h3> 
      <h3>To get how long this has been going on.</h3>
      <p>When does it start to matter what year it is?<br>
          People.<br>
          When did they start being people?<br>
          To maximize compatibility, add ten thousand years 
          so that this year that I'm writing this is 12024, which you can shorthand 2024 or 24.  
          Historical dates look similar, but no more negatives. We're not thinking back from today, 
          but forward from the beginning. 
          Nothing happened on a specific negative date. We can 
          say, "eighty thousand years ago," and it's historically the same as the next and previous year.<br> 
          There was nobody documenting anything.<br>
          unLimited Time begins and ends with documenting, or history.
      </p>
      <h2>A calendar measures history.</h2>
    `
  } else {
    return ``;
  }
};
