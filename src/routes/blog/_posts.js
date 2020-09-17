const posts = [
  {
    title: "The Story",
    subtitle: "Who am I? What is my professional story?",
    slug: "the-story",
    html: `<p>Welcome on my Blog.</p>
		<p>As a kid I got an Atari 800 and it changed my life. You probably read those lines before and I am aware that I am just one of many, it just seems like a good start to my story though.</p>
		<p>I wasn't that prodigy kid you may know from these stories. I barely programmed anything, and the best motivation I ever had was to charm a girl from the neighborhood. I was lazy. But I figured out that I get the complex concepts faster than most of my peers and this information somehow persisted through my punk music driven teenage years.&nbsp;</p>
		<p>I envy all of my colleagues who can say "I always knew it would be computers". I didn't. I actually wasn't interested in anything. But being lazy and forced to have a job, I decided to join PVT, which was a huge, state owned software shop. I was supposed to fill in data from paper forms, lovely job if you are a brain defective monkey. My first achievement was overriding security on my computer, so I was able to run games. As you can see already, games are practically the reason I am in the industry today. Later I found that most of the forms I am typing in the system have the same data. Like "City" was almost always "Praha". I tried to change the code (in Foxpro) to fill those automatically and partly succeeded. Partly means that some sysadmins detected a change in the code and I was fired.</p>
		<p>We had compulsory military service in Czechia, so my next step was sort of given. I was lucky that someone from the General staff found that I can work with the computers, so I spent one more year filling forms. It sounds like another opportunity to a little hacker in me, but I actually appreciated what the unit did. We were trying to save the communist regime's records of political persecutions, so the newly born democracy can handle the compensations.&nbsp;</p>
		<p>After returning to the civil life my career took a more regular path, I was selling software, creating Flash websites, working as a sysadmin. It was a lot of fun, nothing worth your time though. Most important transition I made was taking responsibility for projects, which slowly turned the core of my job towards the project management stuff. I was really successful and I clearly understood how unfit the waterfall process made for creating railways is for creating and implementing software. I was looking for a different way to do things and found the Agile Manifesto. It was enlightening. I read all the related things and tried to change the ways we managed the projects in the company. I partly succeeded, this time it didn&rsquo;t result in my sudden departure from the company and my team loved it. But changing big companies and changing the team are very different things and I decided to leave my fight with windmills.</p>
		<p>I started my own company, completely unprepared, expecting the world to be ready to throw money in my direction, in exchange for my knowledge. Burned the savings completely in a half year. But the lessons I&rsquo;ve gained from this experience changed my life. I learned to be humble, to focus on value and most importantly - to listen. I found a peaceful warrior inside. I still miss the understanding of how real life works, outside of corporate walls, in some of our candidates for managerial roles. And I always recommend what I did: start a company.&nbsp;</p>
		<p>My next was a digital agency and that was a bad idea from the beginning. I met a lot of interesting and very capable people, mostly limited by their ego. The culture was horrible and the only lesson learned from this tenure was that I don&rsquo;t fit in every company. I am not saying that every agency is like this, but I heard a lot of similar stories.</p>
		<p>So I decided to find a company that will have a good culture and make something interesting and honestly, it was really hard. In Prague now, it is relatively easy to find a great company - I can name a few from top of my head, but at the time I was looking for my next, it was horrible. Basically living on my wife's payroll I found a Socialbakers and it was a love at first sight. I hope. It was from me. I finally found a company where I felt like I am really helping people, a company that is capable of evolving. And here I am, working with great people at Socialbakers. <a href="/sbks-story">My Socialbakers story</a> (tease: with leaving and rejoining) is a matter for another article. It will be shorter, I promise.&nbsp;</p>
		<p>Thanks for reading.</p>`,
  },

  {
    title: "About this Blog",
    subtitle: "Technology and motivation behind this site.",
    slug: "about-site",
    html: `<p>I&rsquo;ll start with Why (yes, that&rsquo;s a reference to great Simon Sinek).</p>
		<p> I am reading LinkedIn profiles a lot in my job. They are all horrible, including my own. A curriculum vitae have become a SEO optimized tag engine. More hot keywords you have, the more attention you get from headhunters that don&rsquo;t understand a bit from the vocabulary they use. We became searchable indexes in databases.</p>
		<p>I decided to say no. I will write the human part of my story here. If you want to get in touch with me, it is still relatively easy. But I will stop wearing that LinkedIn mask and I will stop hiding who I am behind those indexed knowledge badges. I do that to all engineering candidates for a while, this is actually the first thing I ask: &ldquo;tell me your story&rdquo; and it works really well. Now it is my turn and this blog is my story.&nbsp;</p>
		<p>Keep in mind that I have a good job, not looking for a change. You might be in a totally different situation. This is not a recipe for everyone.</p>
		<p>From the technological perspective, I am aiming for fast, no nonsense site that I&rsquo;d be able to edit from everywhere. I decided on the <a href="https://sapper.svelte.dev/">Sapper</a> framework built on top of Svelte compiler. It is not widely used, but it is one of the important technologies coming to the market and I wanted to give it a shot on a real project.</p>
		<p>For now it loads articles from JSON serialized HTML documents, I&rsquo;ll rewrite this to use markdown later. You can fork (clone) the code I am using, but it requires some basic understanding of javascript and git. For writing HTML content, I recommend <a href="https://htmleditor.io/">https://htmleditor.io/</a>&nbsp;, but any HTML editor that output clean code will work.&nbsp;</p>
		<p>I decided to go with modern, clean CSS, utilizing the built in component styling separation of Sapper. If the site looks weird, you either use an obsolete browser or have different taste in design. I am good enough in CSS to build this from scratch, but I am no wizard to fix it for Internet Explorer 6, sorry.</p>`,
  },
  {
    title: "Socialbakers",
    subtitle: "Socialbakers (and 2Fresh) part of my life.",
    slug: "sbks-story",
    html: `<p>I came to Socialbakers with a clear mission: I wanted to be The Scrum Master. The servant leader, helping people around, facilitating the important discussions and guiding people towards better teamwork. It was a great time, I was working with super smart people, they usually understood what I am saying, were open to trying things and company management was listening to our points. Honestly, I envy my past self. From the team level perspective, things are easy.&nbsp;</p>
	<p>I guess I was successful in the job, as I received more teams to serve, I was representing the company by speaking about Agile development on several occasions. I cherish my memories from this time and even though I understand how human memory works, I still consider this as one of best work experiences I ever had.&nbsp;</p>
	<p>Now, it is hard to explain what went wrong from my perspective. Board decided to change the top management, for the reasons I understood, but the impact I experienced was company divided, ruled by politics, losing direction. I was reluctant to abandon Socialbakers, I built a lot there and I really didn&rsquo;t want to part my ways with the company. But the discussions about problems we experienced in engineering teams were ending with no results for several months and I left. I decided to join 2Fresh, a great digital agency in Prague.</p>
	<p>I wanted to win the market. The idea when I joined 2Fresh was that with my superior knowledge regarding the product development process, we rise to the stars like Bitcoin (yes that was the time when it reached almost $20k). Thing is that building products is expensive and fitting the process to the company with the majority of clients seeking &ldquo;only website&rdquo; is tricky. But this hard hit from this very different reality was great. In a year, I learned a lot. Great concepts like design thinking with some core practices opened my eyes in a field of product development and applying this knowledge with real customers gave me experience I&rsquo;ll never get inside Socialbakers. But in some time I realized that I am following the mission I&rsquo;ve had at the beginning. It wasn&rsquo;t working and I want to send big thanks to people at 2Fresh who discussed with me for hours and hours. I hope I opened some right questions and moved the right things, but it was clear that I am not helping the company.</p>
	<p>You can guess from the homepage that I returned to Socialbakers, but it was actually a very hard decision. In the end, I came back because of people I love here. I don&rsquo;t say that much, but I really think that our people are the biggest asset of the company. I came back to help Socialbakers to return to glory and I hope I am doing my part. I have a lot of interviews with the candidates, so I managed to introduce myself as a router and reducer. A simplification that a lot of them consider funny, but not that far from the reality. I am responsible for delivering features and feature improvements in our SaaS application. That means a lot of talking with our Scrum Masters, developers and product people. And thinking about where we are going as an industry, poking here and there to make sure that we will have great engineering even next year and another after that.&nbsp;</p>
	<p>Which is the reason why I built this blog. Well, except the reason I stated before. I was digging in front end performance and because I always want to understand problems at least to some degree, I decided to build some real projects in several javascript frameworks. You can see them on my github. Yes, I am still a nerd.</p>`,
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
