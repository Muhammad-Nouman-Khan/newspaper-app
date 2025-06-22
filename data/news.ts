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
  imageUrl:
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&auto=format",
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
    publishedAt: "2025-01-22T07:15:00Z",
    category: "TECHNOLOGY",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T06:45:00Z",
    category: "BUSINESS",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T05:30:00Z",
    category: "SPORTS",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T04:20:00Z",
    category: "CULTURE",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T03:10:00Z",
    category: "POLITICS",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T02:00:00Z",
    category: "TECHNOLOGY",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T01:30:00Z",
    category: "BUSINESS",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
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
    publishedAt: "2025-01-22T00:45:00Z",
    category: "CULTURE",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    readTime: "2 min read",
  },
];
