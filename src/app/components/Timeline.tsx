'use client'
interface TimelineItem {
  date: string
  title: string
  description: string[]
  company?: string
  location?: string
  type: 'work' | 'education'
  isStartup?: boolean
}
const timelineData: TimelineItem[] = [
  {
    date: 'July 2024 - Now',
    title: 'Frontend Developer (Contract)',
    company: 'Government of South Australia',
    description: [
      'Worked with ArcGIS Server and AWS to display multiple dynamic maps with spatial data',
      'Provided a flexsible and diverse content presentation utilized markdown parser with customized components in ReactJS, React Query and MUI',
    ],
    type: 'work'
  },
  {
    date: 'Mar 2024 - June 2024',
    title: 'Front End Developer',
    company: 'RW Lab',
    description: [
      'Contributed to the development of some key features, enhancing the platform\'s functionality.',
      'Worked closely with co-founders and the project manager to improve user experience.'
    ],
    type: 'work',
    isStartup: true
  },
  {
    date: '2021 - 2023',
    title: 'Software Engineer',
    company: 'Trip.com Group Limited',
    description: [
      'Built components using TypeScript and ReactJS to create high-quality and reusable components with customized hooks',
      'Developed backend APIs using spring boot framework and .NET Entity Framework',
      'Built the platform with micro-service architecture using RabbitMQ.',
      'Implemented UI automation e2e tests using Playwright and Python.'
    ],
    type: 'work'
  },
  {
    date: '2020',
    title: 'Master in Robotics & computation (Graduated with Distinction)',
    company: 'University College London',
    location: 'London UK',
    description: [],
    type: 'education'
  },
  {
    date: '2019',
    title: 'Bachelor in Electrical & Electronic Engineering (Graduated with First Class Honours)',
    company: 'University of Liverpool',
    location: 'Liverpool UK',
    description: [],
    type: 'education'
  }
]
const Timeline = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-4 p-4">
          
            <div className="md:w-1/4 flex-shrink-0">
              <div className="text-orange-500 font-semibold text-xl">{item.date}</div>
              <div className="flex justify-between items-start mt-1">
                <div className="text-gray-600 dark:text-gray-400">
                  {item.company}
                  {item.isStartup && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-purple-100 text-purple-800 rounded-full">
                      Startup
                    </span>
                  )}
                </div>
                {item.location && (
                  <div className="text-gray-600 dark:text-gray-400">{item.location}</div>
                )}
              </div>
            </div>
            
            {/* Content section */}
            <div className="flex-grow">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className={`inline-block rounded-full px-3 py-1 text-sm mb-3 ${
                  item.type === 'work' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {item.type === 'work' ? 'Work Experience' : 'Education'}
                </span>
                
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                {item.description.length > 0 && (
                  <div className="space-y-2">
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Timeline 