export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export const heroNews: NewsArticle = {
  id: "hero-1",
  title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
  excerpt:
    "World leaders have reached a groundbreaking consensus on reducing carbon emissions by 50% by 2030, marking a pivotal moment in the fight against climate change.",
  content:
    'In a historic moment that could reshape the future of our planet, world leaders gathered at the Global Climate Summit have reached a groundbreaking agreement on carbon emissions reduction. The landmark deal, which was finalized after intense negotiations spanning three days, commits participating nations to reduce their carbon emissions by 50% by the year 2030.\n\nThis unprecedented agreement represents the most ambitious climate action plan ever adopted on a global scale. Environmental experts have hailed this as a "turning point" in humanity\'s response to the climate crisis, while economists predict it will spur innovation in renewable energy technologies and create millions of new jobs in the green economy.\n\nThe agreement includes comprehensive measures for monitoring and enforcement, with regular progress reviews every two years. Developing nations will receive financial and technological support to help them meet these ambitious targets while continuing their economic development.',
  author: "Sarah Johnson",
  publishedAt: "2025-06-22T08:30:00Z",
  category: "WORLD",

  imageUrl: "/hero.avif",
  readTime: "5 min read",
};

export const latestNews: NewsArticle[] = [
  {
    id: "latest-1",
    title: "Tech Giant Unveils Revolutionary AI-Powered Smart City Initiative",
    excerpt:
      "A major technology company has announced plans to transform urban infrastructure using advanced artificial intelligence.",
    content:
      "In a move that could revolutionize urban living, a leading technology company has unveiled an ambitious smart city initiative that leverages cutting-edge artificial intelligence to optimize everything from traffic flow to energy consumption. The project, which will be piloted in three major cities, aims to create more efficient, sustainable, and livable urban environments.\n\nThe AI system will continuously analyze data from thousands of sensors throughout the city, making real-time adjustments to traffic signals, public transportation routes, and energy distribution. Early estimates suggest this could reduce commute times by up to 30% and cut energy consumption by 25%.\n\nPrivacy advocates have raised concerns about data collection, but the company has assured that all personal information will be anonymized and protected by state-of-the-art encryption.",
    author: "Michael Chen",
    publishedAt: "2025-06-23T07:15:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/latest1.jfif",
    readTime: "3 min read",
  },
  {
    id: "latest-2",
    title:
      "Stock Market Reaches All-Time High as Economic Recovery Accelerates",
    excerpt:
      "Major indices surge to record levels as investors celebrate strong corporate earnings and positive economic indicators.",
    content:
      "The stock market has reached unprecedented heights today, with major indices posting record gains as investors respond to stronger-than-expected corporate earnings and positive economic indicators. The S&P 500, Dow Jones Industrial Average, and NASDAQ all closed at all-time highs, marking a significant milestone in the post-pandemic economic recovery.\n\nAnalysts attribute this surge to several factors: robust consumer spending, strong corporate profits, and optimistic forecasts for continued economic growth. Technology stocks led the rally, with many companies reporting earnings that exceeded Wall Street expectations.\n\nHowever, some economists warn that this rapid growth could lead to inflationary pressures, and the Federal Reserve may need to adjust monetary policy accordingly.",
    author: "David Rodriguez",
    publishedAt: "2025-06-23T06:45:00Z",
    category: "BUSINESS",
    imageUrl: "/l2.jfif",
    readTime: "4 min read",
  },
  {
    id: "latest-3",
    title: "Championship Team Makes Stunning Comeback in Final Minutes",
    excerpt:
      "Underdog team defies odds with dramatic last-minute victory that will be remembered for generations.",
    content:
      'In what sports commentators are calling "the greatest comeback in championship history," an underdog team has achieved the impossible by scoring three goals in the final five minutes to secure a stunning victory. The dramatic turnaround, which occurred in front of a sold-out stadium of 80,000 fans, has left the sports world in awe.\n\nThe winning team, which had been trailing by two goals with just minutes remaining, managed to equalize in the 88th minute before scoring the decisive goal in injury time. The victory marks their first championship in 25 years and has sparked celebrations across the city.\n\nTeam captain described the moment as "surreal" and credited the incredible support of their fans for providing the motivation needed to complete the impossible comeback.',
    author: "Jennifer Martinez",
    publishedAt: "2025-06-23T05:30:00Z",
    category: "SPORTS",
    imageUrl: "/l3.jfif",
    readTime: "2 min read",
  },
  {
    id: "latest-4",
    title: "New Cultural Festival Celebrates Diversity and Unity",
    excerpt:
      "Week-long event brings together artists, musicians, and performers from over 50 countries.",
    content:
      "A groundbreaking cultural festival has successfully brought together artists, musicians, and performers from over 50 countries in a celebration of diversity and unity. The week-long event, which attracted over 100,000 visitors, featured performances ranging from traditional folk music to contemporary art installations.\n\nThe festival's organizers aimed to create a space where people from different backgrounds could share their cultural heritage while building bridges of understanding. Highlights included a collaborative performance featuring musicians from 15 different countries playing together, and an art exhibition showcasing works that explore themes of migration and cultural exchange.\n\nLocal officials have praised the event for boosting tourism and fostering community spirit, while participants have called for it to become an annual tradition.",
    author: "Alex Thompson",
    publishedAt: "2025-06-23T04:20:00Z",
    category: "CULTURE",
    imageUrl: "/l4.jfif",
    readTime: "3 min read",
  },
  {
    id: "latest-5",
    title: "Political Reform Bill Passes with Bipartisan Support",
    excerpt:
      "Rare moment of unity as lawmakers from both parties approve comprehensive government reform measures.",
    content:
      "In a rare display of bipartisan cooperation, lawmakers have passed a comprehensive political reform bill that aims to increase transparency and accountability in government. The bill, which received support from both major political parties, includes measures to strengthen campaign finance laws, improve voting access, and enhance ethical standards for public officials.\n\nThe legislation represents the most significant reform package in over a decade and has been praised by good governance advocates. Key provisions include mandatory disclosure of political donations, expanded early voting options, and stricter penalties for ethics violations.\n\nPolitical analysts note that this level of bipartisan agreement is unusual in the current political climate and could signal a shift toward more collaborative policymaking.",
    author: "Robert Kim",
    publishedAt: "2025-06-23T03:10:00Z",
    category: "POLITICS",
    imageUrl: "/l5.jfif",
    readTime: "4 min read",
  },
  {
    id: "latest-6",
    title: "Breakthrough in Renewable Energy Storage Technology",
    excerpt:
      "Scientists develop new battery technology that could revolutionize clean energy adoption worldwide.",
    content:
      "A team of researchers has announced a major breakthrough in renewable energy storage technology that could accelerate the global transition to clean energy. The new battery technology, which uses innovative materials and design principles, offers significantly higher energy density and longer lifespan than current lithium-ion batteries.\n\nThe development could solve one of the biggest challenges facing renewable energy adoption: the intermittent nature of solar and wind power. With improved storage capabilities, renewable energy sources could provide reliable power even when the sun isn't shining or the wind isn't blowing.\n\nThe research team, which includes scientists from multiple universities and research institutions, has already filed patents for the technology and is working with manufacturers to begin production.",
    author: "Lisa Wang",
    publishedAt: "2025-06-23T02:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/l6.jfif",
    readTime: "3 min read",
  },
  {
    id: "latest-7",
    title: "Global Trade Agreement Expected to Boost Economic Growth",
    excerpt:
      "New international trade pact could increase global GDP by trillions over the next decade.",
    content:
      "A landmark international trade agreement has been finalized that economists predict will boost global economic growth by trillions of dollars over the next decade. The comprehensive pact, which involves 15 major economies, reduces tariffs and trade barriers while establishing new standards for digital commerce and intellectual property protection.\n\nThe agreement is expected to create millions of new jobs worldwide and lower prices for consumers on a wide range of products. Key sectors that stand to benefit include technology, agriculture, and manufacturing.\n\nTrade experts have praised the agreement for addressing modern challenges like digital trade and environmental standards, while critics have raised concerns about its impact on domestic industries.",
    author: "Maria Garcia",
    publishedAt: "2025-06-23T01:30:00Z",
    category: "BUSINESS",
    imageUrl: "/l7.jfif",
    readTime: "4 min read",
  },
  {
    id: "latest-8",
    title: "Historic Art Exhibition Draws Record Crowds",
    excerpt:
      "Museum's special collection featuring works from the Renaissance period attracts unprecedented visitor numbers.",
    content:
      'A historic art exhibition featuring masterpieces from the Renaissance period has drawn record-breaking crowds, with over 500,000 visitors in just three weeks. The exhibition, which includes works by Leonardo da Vinci, Michelangelo, and Raphael, has been hailed as a once-in-a-lifetime opportunity to see these priceless artworks together.\n\nThe museum has extended its hours and added special viewing sessions to accommodate the overwhelming demand. Art historians have praised the exhibition for its comprehensive scope and educational value, while visitors have described the experience as "transformative."\n\nThe success of the exhibition has prompted discussions about organizing similar events featuring other significant periods in art history.',
    author: "Thomas Anderson",
    publishedAt: "2025-06-23T00:45:00Z",
    category: "CULTURE",
    imageUrl: "/l8.jfif",
    readTime: "2 min read",
  },
];

export const moreStories: NewsArticle[] = [
  {
    id: "more-1",
    title: "Senate Approves Comprehensive Healthcare Reform Package",
    excerpt:
      "Bipartisan legislation aims to expand coverage and reduce prescription drug costs for millions of Americans.",
    content:
      "The Senate has passed a landmark healthcare reform package that represents the most significant changes to the American healthcare system in over a decade. The bipartisan legislation, which received support from both major political parties, includes provisions to expand healthcare coverage, reduce prescription drug costs, and improve access to mental health services.\n\nThe bill includes measures to cap out-of-pocket costs for prescription drugs, expand Medicaid coverage in states that haven't already done so, and provide subsidies to help middle-income families afford health insurance. Healthcare advocates have praised the legislation for addressing long-standing issues in the American healthcare system.\n\nHowever, some critics argue that the reforms don't go far enough in addressing the root causes of high healthcare costs. The bill now moves to the House of Representatives for consideration.",
    author: "Elizabeth Washington",
    publishedAt: "2025-06-21T22:15:00Z",
    category: "POLITICS",
    imageUrl: "/m1.jfif",
    readTime: "4 min read",
  },
  {
    id: "more-2",
    title:
      "International Space Station Celebrates 25 Years of Scientific Discovery",
    excerpt:
      "Milestone anniversary marks decades of groundbreaking research and international cooperation in space exploration.",
    content:
      "The International Space Station (ISS) is celebrating its 25th anniversary, marking a quarter-century of unprecedented scientific discovery and international cooperation in space exploration. Since its first module was launched in 1998, the ISS has hosted over 250 astronauts from 20 different countries and conducted thousands of experiments that have advanced our understanding of space, Earth, and human biology.\n\nThe station has been instrumental in developing technologies for long-duration spaceflight, studying the effects of microgravity on the human body, and conducting research that has led to breakthroughs in medicine, materials science, and environmental monitoring. Scientists have used the unique microgravity environment to develop new cancer treatments, study protein crystallization, and test advanced life support systems.\n\nNASA and its international partners are planning to extend the ISS's operational life through 2030, with plans to transition to commercial space stations in the future. The station continues to serve as a symbol of what humanity can achieve through international collaboration.",
    author: "Dr. James Chen",
    publishedAt: "2025-06-21T21:30:00Z",
    category: "WORLD",
    imageUrl: "/m2.jfif",
    readTime: "5 min read",
  },
  {
    id: "more-3",
    title: "Major Bank Announces Revolutionary Digital Banking Platform",
    excerpt:
      "New AI-powered system promises to transform personal finance management with predictive analytics and automated savings.",
    content:
      "One of the nation's largest banks has unveiled a revolutionary digital banking platform that leverages artificial intelligence to provide personalized financial services. The new system, which will be rolled out to customers over the next six months, includes features like predictive spending analysis, automated savings recommendations, and real-time fraud detection.\n\nThe platform uses machine learning algorithms to analyze spending patterns and provide personalized financial advice. It can automatically categorize expenses, identify potential savings opportunities, and alert users to unusual account activity. The system also includes advanced budgeting tools that help users set and achieve financial goals.\n\nPrivacy advocates have raised concerns about the amount of personal financial data being analyzed, but the bank has assured customers that all data is encrypted and protected by strict privacy controls. The platform represents a significant step forward in the digital transformation of banking services.",
    author: "Rachel Kim",
    publishedAt: "2025-06-21T20:45:00Z",
    category: "BUSINESS",
    imageUrl: "/m3.jfif",
    readTime: "3 min read",
  },
  {
    id: "more-4",
    title: "Quantum Computing Breakthrough Achieves Quantum Supremacy",
    excerpt:
      "Scientists solve complex mathematical problem in minutes that would take traditional computers thousands of years.",
    content:
      "A team of researchers has achieved a major breakthrough in quantum computing, successfully demonstrating quantum supremacy by solving a complex mathematical problem that would take the world's most powerful supercomputers thousands of years to complete. The quantum computer completed the calculation in just 200 seconds, marking a significant milestone in the development of quantum technology.\n\nThe achievement involved a 53-qubit quantum processor that was able to perform a specific calculation with unprecedented speed and accuracy. This demonstration of quantum supremacy opens up new possibilities for solving complex problems in fields like cryptography, drug discovery, and climate modeling.\n\nWhile the current quantum computer is designed for this specific type of calculation, researchers believe this breakthrough will accelerate the development of more general-purpose quantum computers. The technology could eventually revolutionize fields ranging from artificial intelligence to materials science.",
    author: "Dr. Sarah Zhang",
    publishedAt: "2025-06-21T19:20:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/m4.jfif",
    readTime: "4 min read",
  },
  {
    id: "more-5",
    title: "Olympic Athlete Breaks World Record in Stunning Performance",
    excerpt:
      "Record-breaking run in the 100-meter dash sets new standard for human athletic achievement.",
    content:
      "In a performance that has stunned the sports world, an Olympic athlete has shattered the world record in the 100-meter dash, completing the race in an astonishing 9.45 seconds. The previous record, which had stood for over a decade, was broken by a margin that experts had previously thought impossible.\n\nThe athlete, who has been training for this moment for years, credited a combination of advanced training techniques, improved nutrition, and mental preparation for the breakthrough performance. Sports scientists are studying the race footage to understand what made this performance so exceptional.\n\nThe record-breaking run has sparked discussions about the limits of human athletic performance and whether this new standard can ever be surpassed. The athlete has become an instant global sensation, with millions of people around the world watching replays of the historic race.",
    author: "Marcus Johnson",
    publishedAt: "2025-06-21T18:10:00Z",
    category: "SPORTS",
    imageUrl: "/m5.avif",
    readTime: "3 min read",
  },
  {
    id: "more-6",
    title: "Award-Winning Film Director Announces Ambitious New Project",
    excerpt:
      "Multi-million dollar production will explore themes of identity and belonging in the digital age.",
    content:
      "An acclaimed film director has announced plans for an ambitious new project that promises to push the boundaries of cinematic storytelling. The multi-million dollar production, which will begin filming next year, will explore themes of identity, belonging, and human connection in an increasingly digital world.\n\nThe film, which has already attracted interest from major studios and streaming platforms, will feature an international cast and be shot in multiple countries. The director has described it as a 'love letter to humanity' that will challenge audiences to think about what it means to be human in the 21st century.\n\nThe project represents a significant departure from the director's previous work and has generated considerable buzz in the entertainment industry. Early concept art and storyboards have been praised for their innovative approach to visual storytelling.",
    author: "Isabella Rodriguez",
    publishedAt: "2025-06-21T17:30:00Z",
    category: "CULTURE",
    imageUrl: "/m6.avif",
    readTime: "4 min read",
  },
];

export const politicsNews: NewsArticle[] = [
  {
    id: "more-1",
    title: "Senate Approves Comprehensive Healthcare Reform Package",
    excerpt:
      "Bipartisan legislation aims to expand coverage and reduce prescription drug costs for millions of Americans.",
    content:
      "The Senate has passed a landmark healthcare reform package that represents the most significant changes to the American healthcare system in over a decade...",
    author: "Elizabeth Washington",
    publishedAt: "2025-06-21T22:15:00Z",
    category: "POLITICS",
    imageUrl: "/p1.jfif",
    readTime: "4 min read",
  },
  {
    id: "politics-1",
    title:
      "New Polling Data Shows Shifting Voter Priorities Ahead of Elections",
    excerpt:
      "Recent surveys indicate a significant shift in what voters care about most, with the economy and climate change now topping the list.",
    content: "...",
    author: "John Doe",
    publishedAt: "2025-06-20T10:00:00Z",
    category: "POLITICS",
    imageUrl: "/p2.avif",
    readTime: "3 min read",
  },
  {
    id: "politics-2",
    title: "Global Leaders Convene for Climate Action Summit",
    excerpt:
      "Leaders from 150 nations are meeting to negotiate new treaties aimed at curbing global warming.",
    content: "...",
    author: "Samantha Bee",
    publishedAt: "2025-06-20T11:00:00Z",
    category: "POLITICS",
    imageUrl: "/p3.avif",
    readTime: "5 min read",
  },
  {
    id: "politics-3",
    title: "Infrastructure Bill Faces Key Vote in Parliament",
    excerpt:
      "A multi-trillion dollar infrastructure bill is up for a crucial vote that could define the government's legacy.",
    content: "...",
    author: "Robert Downy",
    publishedAt: "2025-06-19T15:00:00Z",
    category: "POLITICS",
    imageUrl: "/p4.avif",
    readTime: "4 min read",
  },
  {
    id: "politics-4",
    title: "Campaign Finance Reform Passes with Unanimous Vote",
    excerpt:
      "A new bill aimed at increasing transparency in political donations has passed with surprising bipartisan support.",
    content: "...",
    author: "Chris Evans",
    publishedAt: "2025-06-18T18:00:00Z",
    category: "POLITICS",
    imageUrl: "/p5.avif",
    readTime: "3 min read",
  },
  {
    id: "politics-5",
    title: "Diplomatic Talks Stall Between Rival Nations",
    excerpt:
      "Hopes for a peaceful resolution have dimmed as the latest round of diplomatic negotiations ended without an agreement.",
    content: "...",
    author: "Scarlett Johan",
    publishedAt: "2025-06-17T12:30:00Z",
    category: "POLITICS",
    imageUrl: "/p6.avif",
    readTime: "4 min read",
  },
  {
    id: "politics-6",
    title: "Government Announces New Digital Privacy Protections",
    excerpt:
      "A new set of regulations aims to give citizens more control over their personal data online.",
    content: "...",
    author: "Mark Ruff",
    publishedAt: "2025-06-16T10:00:00Z",
    category: "POLITICS",
    imageUrl: "/p7.avif",
    readTime: "3 min read",
  },
];

export const worldNews: NewsArticle[] = [
  {
    id: "more-2",
    title:
      "International Space Station Celebrates 25 Years of Scientific Discovery",
    excerpt:
      "Milestone anniversary marks decades of groundbreaking research and international cooperation in space exploration.",
    content:
      "The International Space Station (ISS) is celebrating its 25th anniversary...",
    author: "Dr. James Chen",
    publishedAt: "2025-06-21T21:30:00Z",
    category: "WORLD",
    imageUrl: "/w1.jfif",
    readTime: "5 min read",
  },
  {
    id: "world-1",
    title: "Developing Nations Form New Alliance to Combat Deforestation",
    excerpt:
      "A coalition of 15 developing countries has announced a joint initiative to halt deforestation and restore vital ecosystems.",
    content: "...",
    author: "Maria Rodriguez",
    publishedAt: "2025-06-19T14:30:00Z",
    category: "WORLD",
    imageUrl: "/w2.jfif",
    readTime: "4 min read",
  },
  {
    id: "world-2",
    title: "Humanitarian Crisis Worsens in War-Torn Region",
    excerpt:
      "International aid organizations are calling for urgent assistance as a humanitarian crisis deepens.",
    content: "...",
    author: "Angela Bassett",
    publishedAt: "2025-06-20T16:00:00Z",
    category: "WORLD",
    imageUrl: "/w3.avif",
    readTime: "5 min read",
  },
  {
    id: "world-3",
    title: "Historic Peace Treaty Signed Between Two Nations",
    excerpt:
      "After decades of conflict, a historic peace treaty has been signed, bringing hope for lasting stability.",
    content: "...",
    author: "Lupita Nyongo",
    publishedAt: "2025-06-19T18:30:00Z",
    category: "WORLD",
    imageUrl: "/w4.avif",
    readTime: "4 min read",
  },
  {
    id: "world-4",
    title: "New Study Reveals Alarming Rate of Glacier Melt",
    excerpt:
      "Satellite data shows that the world's glaciers are melting at an unprecedented rate, posing a threat to coastal communities.",
    content: "...",
    author: "Danai Gurira",
    publishedAt: "2025-06-18T14:00:00Z",
    category: "WORLD",
    imageUrl: "/w5.avif",
    readTime: "4 min read",
  },
  {
    id: "world-5",
    title: "Global Literacy Rates Reach All-Time High",
    excerpt:
      "A new UNESCO report indicates that global literacy rates have reached their highest point in recorded history.",
    content: "...",
    author: "Letitia Wright",
    publishedAt: "2025-06-17T11:45:00Z",
    category: "WORLD",
    imageUrl: "/w6.jfif",
    readTime: "3 min read",
  },
  {
    id: "world-6",
    title: "Archaeologists Discover Ancient City Lost for Millennia",
    excerpt:
      "An international team of archaeologists has unearthed the ruins of a sprawling ancient city that was lost to history.",
    content: "...",
    author: "Winston Duke",
    publishedAt: "2025-06-16T09:30:00Z",
    category: "WORLD",
    imageUrl: "/w7.webp",
    readTime: "5 min read",
  },
];

export const businessNews: NewsArticle[] = [
  {
    id: "more-3",
    title: "Major Bank Announces Revolutionary Digital Banking Platform",
    excerpt:
      "New AI-powered system promises to transform personal finance management with predictive analytics and automated savings.",
    content:
      "One of the nation's largest banks has unveiled a revolutionary digital banking platform...",
    author: "Rachel Kim",
    publishedAt: "2025-06-21T20:45:00Z",
    category: "BUSINESS",
    imageUrl: "/b1.jfif",
    readTime: "3 min read",
  },
  {
    id: "business-1",
    title: "Global Supply Chain Disruptions Continue to Impact Tech Sector",
    excerpt:
      "Ongoing logistical challenges are causing delays and price increases for consumer electronics and components worldwide.",
    content: "...",
    author: "David Smith",
    publishedAt: "2025-06-18T11:00:00Z",
    category: "BUSINESS",
    imageUrl: "/b2.avif",
    readTime: "5 min read",
  },
  {
    id: "business-2",
    title: "Start-up Ecosystem Thrives with Record Venture Capital Funding",
    excerpt:
      "Venture capital investment in start-ups has reached a new peak this quarter, fueling innovation.",
    content: "...",
    author: "Chadwick Bose",
    publishedAt: "2025-06-20T13:00:00Z",
    category: "BUSINESS",
    imageUrl: "/b3.jfif",
    readTime: "4 min read",
  },
  {
    id: "business-3",
    title: "Remote Work Revolutionizes Commercial Real Estate Market",
    excerpt:
      "The shift to remote work is forcing a major reassessment of commercial real estate valuations.",
    content: "...",
    author: "Michael B Jordan",
    publishedAt: "2025-06-19T16:30:00Z",
    category: "BUSINESS",
    imageUrl: "/b4.jfif",
    readTime: "5 min read",
  },
  {
    id: "business-4",
    title: "Cryptocurrency Regulation Framework Proposed by G7 Nations",
    excerpt:
      "The G7 has proposed a new regulatory framework aimed at stabilizing the volatile cryptocurrency market.",
    content: "...",
    author: "Forest Whitaker",
    publishedAt: "2025-06-18T12:00:00Z",
    category: "BUSINESS",
    imageUrl: "/b5.avif",
    readTime: "4 min read",
  },
  {
    id: "business-5",
    title: "E-commerce Sales Continue to Grow at an Unprecedented Rate",
    excerpt:
      "Online retail sales have once again surpassed projections, indicating a permanent shift in consumer behavior.",
    content: "...",
    author: "Daniel Kaluuya",
    publishedAt: "2025-06-17T15:00:00Z",
    category: "BUSINESS",
    imageUrl: "/b6.jfif",
    readTime: "3 min read",
  },
  {
    id: "business-6",
    title: "Sustainable Investing Goes Mainstream, Attracting Billions",
    excerpt:
      "ESG investing is no longer a niche market, with billions of dollars flowing into sustainable funds.",
    content: "...",
    author: "Sterling K Brown",
    publishedAt: "2025-06-16T11:00:00Z",
    category: "BUSINESS",
    imageUrl: "/b7.jfif",
    readTime: "4 min read",
  },
];

export const technologyNews: NewsArticle[] = [
  {
    id: "more-4",
    title: "Quantum Computing Breakthrough Achieves Quantum Supremacy",
    excerpt:
      "Scientists solve complex mathematical problem in minutes that would take traditional computers thousands of years.",
    content:
      "A team of researchers has achieved a major breakthrough in quantum computing...",
    author: "Dr. Sarah Zhang",
    publishedAt: "2025-06-21T19:20:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t1.jfif",
    readTime: "4 min read",
  },
  {
    id: "tech-1",
    title: "New AI Model Can Generate Realistic Video from Text Descriptions",
    excerpt:
      "A groundbreaking AI has been unveiled that can create high-fidelity video clips from simple text prompts, opening new frontiers in content creation.",
    content: "...",
    author: "Alex Williams",
    publishedAt: "2025-06-17T09:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t2.jfif",
    readTime: "4 min read",
  },
  {
    id: "tech-2",
    title:
      "Breakthrough in Battery Technology Promises 1000-Mile Range for EVs",
    excerpt:
      "A new battery chemistry could eliminate range anxiety for electric vehicle owners.",
    content: "...",
    author: "Gwyneth Paltrow",
    publishedAt: "2025-06-20T14:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t3.avif",
    readTime: "5 min read",
  },
  {
    id: "tech-3",
    title: "5G Adoption Accelerates, Unlocking New Possibilities for IoT",
    excerpt:
      "The rollout of 5G networks is happening faster than anticipated, paving the way for a new era of connected devices.",
    content: "...",
    author: "Don Cheadle",
    publishedAt: "2025-06-19T17:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t4.avif",
    readTime: "4 min read",
  },
  {
    id: "tech-4",
    title: "Ethical AI Framework Proposed by Tech Leaders and Academics",
    excerpt:
      "A new framework aims to ensure that artificial intelligence is developed and used responsibly.",
    content: "...",
    author: "Benedict Cumber",
    publishedAt: "2025-06-18T13:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t5.jfif",
    readTime: "4 min read",
  },
  {
    id: "tech-5",
    title: "The Metaverse: Hype vs. Reality for the Future of the Internet",
    excerpt:
      "Experts debate the long-term viability and societal impact of the much-hyped metaverse.",
    content: "...",
    author: "Zoe Saldana",
    publishedAt: "2025-06-17T16:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t6.avif",
    readTime: "5 min read",
  },
  {
    id: "tech-6",
    title: "Cybersecurity Threats Evolve with AI-Powered Attacks",
    excerpt:
      "Security experts are warning of a new wave of sophisticated cybersecurity threats powered by artificial intelligence.",
    content: "...",
    author: "Tom Holland",
    publishedAt: "2025-06-16T14:00:00Z",
    category: "TECHNOLOGY",
    imageUrl: "/t7.jfif",
    readTime: "4 min read",
  },
];

export const sportsNews: NewsArticle[] = [
  {
    id: "more-5",
    title: "Olympic Athlete Breaks World Record in Stunning Performance",
    excerpt:
      "Record-breaking run in the 100-meter dash sets new standard for human athletic achievement.",
    content:
      "In a performance that has stunned the sports world, an Olympic athlete has shattered the world record...",
    author: "Marcus Johnson",
    publishedAt: "2025-06-21T18:10:00Z",
    category: "SPORTS",
    imageUrl: "/s1.jfif",
    readTime: "3 min read",
  },
  {
    id: "sports-1",
    title: "City FC Wins National Championship in Dramatic Penalty Shootout",
    excerpt:
      "The final match came down to a tense penalty shootout, where City FC emerged victorious to claim their first title in a decade.",
    content: "...",
    author: "Jessica Lee",
    publishedAt: "2025-06-16T20:00:00Z",
    category: "SPORTS",
    imageUrl: "/s2.jfif",
    readTime: "3 min read",
  },
  {
    id: "sports-2",
    title: "Underdog Team Completes Miraculous Season with Championship Win",
    excerpt:
      "A team that was given 500-to-1 odds at the start of the season has won the championship.",
    content: "...",
    author: "Chris Hemsworth",
    publishedAt: "2025-06-20T21:00:00Z",
    category: "SPORTS",
    imageUrl: "/s3.avif",
    readTime: "4 min read",
  },
  {
    id: "sports-3",
    title: "eSports Tournament Shatters Viewership Records",
    excerpt:
      "The world championship for the popular eSports title attracted more viewers than many traditional sporting events.",
    content: "...",
    author: "Tom Hiddleston",
    publishedAt: "2025-06-19T22:00:00Z",
    category: "SPORTS",
    imageUrl: "/s4.jfif",
    readTime: "3 min read",
  },
  {
    id: "sports-4",
    title: "New Analytics Revolutionize How Teams Scout for Talent",
    excerpt:
      "Data analytics and AI are changing the game when it comes to identifying and recruiting athletic talent.",
    content: "...",
    author: "Anthony Mackie",
    publishedAt: "2025-06-18T19:30:00Z",
    category: "SPORTS",
    imageUrl: "/s5.avif",
    readTime: "4 min read",
  },
  {
    id: "sports-5",
    title: "Extreme Sports Athlete Completes Death-Defying Stunt",
    excerpt:
      "A renowned extreme sports athlete has successfully completed a stunt that many believed to be impossible.",
    content: "...",
    author: "Sebastian Stan",
    publishedAt: "2025-06-17T18:00:00Z",
    category: "SPORTS",
    imageUrl: "/s6.avif",
    readTime: "3 min read",
  },
  {
    id: "sports-6",
    title: "The Financial Windfall of Hosting the Olympic Games",
    excerpt:
      "A deep dive into the economic benefits and drawbacks for cities that host the Olympic Games.",
    content: "...",
    author: "Elizabeth Olsen",
    publishedAt: "2025-06-16T16:00:00Z",
    category: "SPORTS",
    imageUrl: "/s7.avif",
    readTime: "5 min read",
  },
];

export const cultureNews: NewsArticle[] = [
  {
    id: "more-6",
    title: "Award-Winning Film Director Announces Ambitious New Project",
    excerpt:
      "Multi-million dollar production will explore themes of identity and belonging in the digital age.",
    content:
      "An acclaimed film director has announced plans for an ambitious new project...",
    author: "Isabella Rodriguez",
    publishedAt: "2025-06-21T17:30:00Z",
    category: "CULTURE",
    imageUrl: "/c1.avif",
    readTime: "4 min read",
  },
  {
    id: "culture-1",
    title: "Lost Painting by Famous Artist Discovered in Attic",
    excerpt:
      "A previously unknown masterpiece, valued at over $10 million, was found hidden away in the attic of a family home.",
    content: "...",
    author: "Emily White",
    publishedAt: "2025-06-15T13:45:00Z",
    category: "CULTURE",
    imageUrl: "/c2.jfif",
    readTime: "3 min read",
  },
  {
    id: "culture-2",
    title: "Revival of Ancient Language Sees New Generation of Speakers",
    excerpt:
      "An endangered language is making a comeback thanks to a dedicated effort from community elders and young learners.",
    content: "...",
    author: "Paul Bettany",
    publishedAt: "2025-06-20T17:00:00Z",
    category: "CULTURE",
    imageUrl: "/c3.webp",
    readTime: "4 min read",
  },
  {
    id: "culture-3",
    title: "New Museum Dedicated to the History of Video Games Opens",
    excerpt:
      "A new museum celebrates the art and history of video games, from Pong to the latest virtual reality experiences.",
    content: "...",
    author: "Jeremy Renner",
    publishedAt: "2025-06-19T19:00:00Z",
    category: "CULTURE",
    imageUrl: "/c4.webp",
    readTime: "3 min read",
  },
  {
    id: "culture-4",
    title: "The Rise of Digital Art and NFTs in the Mainstream",
    excerpt:
      "Digital art, authenticated by NFTs, is fetching record prices and challenging the traditional art world.",
    content: "...",
    author: "Dave Bautista",
    publishedAt: "2025-06-18T16:00:00Z",
    category: "CULTURE",
    imageUrl: "/c5.webp",
    readTime: "5 min read",
  },
  {
    id: "culture-5",
    title: "Culinary World Mourns the Passing of a Legendary Chef",
    excerpt:
      "A chef who revolutionized modern cuisine has passed away, leaving behind a legacy of innovation and inspiration.",
    content: "...",
    author: "Karen Gillan",
    publishedAt: "2025-06-17T14:30:00Z",
    category: "CULTURE",
    imageUrl: "/c6.jfif",
    readTime: "3 min read",
  },
  {
    id: "culture-6",
    title: "Street Art Festival Transforms City into an Outdoor Gallery",
    excerpt:
      "An annual street art festival has brought vibrant murals and installations to the city, celebrating local and international artists.",
    content: "...",
    author: "Pom Klementieff",
    publishedAt: "2025-06-16T12:00:00Z",
    category: "CULTURE",
    imageUrl: "/c7.avif",
    readTime: "4 min read",
  },
];

export const opinionNews: NewsArticle[] = [
  {
    id: "more-4",
    title: "Quantum Computing Breakthrough Achieves Quantum Supremacy",
    excerpt:
      "Scientists solve complex mathematical problem in minutes that would take traditional computers thousands of years.",
    content:
      "A team of researchers has achieved a major breakthrough in quantum computing...",
    author: "Dr. Sarah Zhang",
    publishedAt: "2025-06-21T19:20:00Z",
    category: "OPINION",
    imageUrl: "/t1.jfif",
    readTime: "4 min read",
  },
  {
    id: "tech-1",
    title: "New AI Model Can Generate Realistic Video from Text Descriptions",
    excerpt:
      "A groundbreaking AI has been unveiled that can create high-fidelity video clips from simple text prompts, opening new frontiers in content creation.",
    content: "...",
    author: "Alex Williams",
    publishedAt: "2025-06-17T09:00:00Z",
    category: "OPINION",
    imageUrl: "/t2.jfif",
    readTime: "4 min read",
  },
  {
    id: "tech-2",
    title:
      "Breakthrough in Battery Technology Promises 1000-Mile Range for EVs",
    excerpt:
      "A new battery chemistry could eliminate range anxiety for electric vehicle owners.",
    content: "...",
    author: "Gwyneth Paltrow",
    publishedAt: "2025-06-20T14:00:00Z",
    category: "OPINION",
    imageUrl: "/t3.avif",
    readTime: "5 min read",
  },
  {
    id: "tech-3",
    title: "5G Adoption Accelerates, Unlocking New Possibilities for IoT",
    excerpt:
      "The rollout of 5G networks is happening faster than anticipated, paving the way for a new era of connected devices.",
    content: "...",
    author: "Don Cheadle",
    publishedAt: "2025-06-19T17:00:00Z",
    category: "OPINION",
    imageUrl: "/t4.avif",
    readTime: "4 min read",
  },
  {
    id: "tech-4",
    title: "Ethical AI Framework Proposed by Tech Leaders and Academics",
    excerpt:
      "A new framework aims to ensure that artificial intelligence is developed and used responsibly.",
    content: "...",
    author: "Benedict Cumber",
    publishedAt: "2025-06-18T13:00:00Z",
    category: "OPINION",
    imageUrl: "/t5.jfif",
    readTime: "4 min read",
  },
  {
    id: "tech-5",
    title: "The Metaverse: Hype vs. Reality for the Future of the Internet",
    excerpt:
      "Experts debate the long-term viability and societal impact of the much-hyped metaverse.",
    content: "...",
    author: "Zoe Saldana",
    publishedAt: "2025-06-17T16:00:00Z",
    category: "OPINION",
    imageUrl: "/t6.avif",
    readTime: "5 min read",
  },
  {
    id: "tech-6",
    title: "Cybersecurity Threats Evolve with AI-Powered Attacks",
    excerpt:
      "Security experts are warning of a new wave of sophisticated cybersecurity threats powered by artificial intelligence.",
    content: "...",
    author: "Tom Holland",
    publishedAt: "2025-06-16T14:00:00Z",
    category: "OPINION",
    imageUrl: "/t7.jfif",
    readTime: "4 min read",
  },
];
