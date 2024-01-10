import { cn } from "@/lib/utils";
import Accent from "../components/Accent";


export default function HomePage({
  }) {
  
    return (
        <main className="mx-8 lg:mx-20">
          <section className={ 'fade-in-start'}>
            <div className='md:mt-[200px]  text-left mt-[20px]'>
              <article className=''>
                <div className='flex flex-col items-start'>
                  <Accent
                    className='mb-8 md:text-4xl text-[#555] dark:text-[#bbb] text-3xl'
                    data-fade='1'
                  >
                    Shawn&apos;s Blog
                  </Accent>
                  <p
                    className={cn(
                      'text-lg text-[#555] dark:text-[#bbb]',
                      'lg:text-xl'
                    )}
                    data-fade='1'
                  >
                    Hey, this is Shawn&apos;s blog
                  </p>
                  <p
                    className={cn(
                      'mt-8  text-[#555] dark:text-[#bbb]',
                      'lg:text-xl text-left text-lg'
                    )}
                    data-fade='3'
                  >
                    JS, TS, Vue, React, Java, algorithm lovers.
                  </p>
                  <hr
                    className='mx-auto md:my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] my-[1em]'
                    data-fade='2'
                  />
                  <p
                    className={cn(
                      'mt-0 text-[#555] dark:text-[#bbb]',
                      'lg:text-xl text-left text-lg'
                    )}
                    data-fade='3'
                  >
                    Experienced full stack web application software engineer
                    <p></p>
                    -3 years of experience in creating single page web applications using React and Vue
                    <p></p>
                    -Proficient in developing server side APIs using Java and Spring Boot
                    <p></p>
                    -Solid experience on CI/CD, DevOps, Cloud technologies
                    <p></p>
                    -Demonstrated expertise in working within an agile development environment and delivering projects on time
                  </p>
                  <p
                    className={cn(
                      'mt-6  text-[#555] dark:text-[#bbb]',
                      'lg:text-xl text-left text-lg'
                    )}
                    data-fade='3'
                  >
                    This site is built with Contentlayer and NestJS. For in-page components, I&apos;m using React.
                  </p>
                  <hr
                    className='mx-auto md:my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] my-[1em]'
                    data-fade='4'
                  />
                </div>
              </article>
            </div>
          </section>
        </main>
    );
  }