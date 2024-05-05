import React from 'react';
import debate from '../../assets/images/faq1.jpg';

const ExpertTalkDetails = () => {
  return (
    <section className='hero__section py-10  sm:py-[75px] '>
     
     <div className="container mx-auto ">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl lg:text-5xl font-bold text-center mb-8">Expert Talk: Insights from Leaders in the Field</h1>
            <div className="prose text-lg font-serif lg:prose-xl">
              <p>
                Expert talks, where leaders and professionals share insights and experiences in their respective fields, offer valuable opportunities for learning, inspiration, and networking. These talks provide a platform for thought leaders to discuss trends, challenges, and best practices, offering invaluable guidance to aspiring individuals and seasoned professionals alike.
              </p>
              <p>
                So, what makes an expert talk impactful? It's the depth of knowledge and experience shared by the speaker, coupled with the relevance and applicability of the insights offered. Whether discussing industry trends, leadership strategies, or personal anecdotes, expert talks provide valuable perspectives that resonate with audiences and spark meaningful conversations.
              </p>
              <p>
                Furthermore, engaging with expert talks goes beyond passive listening; it involves active participation and reflection. Asking thoughtful questions, seeking clarification, and applying key takeaways to one's own endeavors enhance the learning experience and maximize the value gained from the talk.
              </p>
              <p className=' mt-5 font-medium'>
                As participants engage with expert talks, several guiding principles emerge:
              </p>
              <ul className=' font-semibold font-serif mb-4'>
                <li>Active Participation</li>
                <li>Critical Thinking</li>
                <li>Application of Insights</li>
                <li>Lifelong Learning</li>
                <li>Networking and Collaboration</li>
              </ul>
              <p>
                Numerous experts across various fields have shared their wisdom through talks and presentations, leaving a lasting impact on their audiences. From business moguls and industry pioneers to renowned scholars and visionary leaders, expert talks provide a platform for knowledge-sharing and inspiration.
              </p>
              <div className="italic mt-4">
                <p className="mb-2">- "The greatest danger in times of turbulence is not the turbulence itself, but to act with yesterday's logic." - <span className=' font-bold '>Peter Drucker</span></p>
                <p className="mb-2">- "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle." - <span className=' font-bold '>Steve Jobs</span></p>
                <p className="mb-2">- "Innovation distinguishes between a leader and a follower." - <span className=' font-bold '>Steve Jobs</span></p>
                <p>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - <span className=' font-bold '>Albert Schweitzer</span></p>
              </div>
              <p className=' mt-4'>
                In essence, expert talks serve as a catalyst for personal and professional growth, offering insights, inspiration, and connections that propel individuals and organizations forward. By actively engaging with expert talks and applying the wisdom shared, participants can navigate challenges, seize opportunities, and achieve success in their endeavors.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ExpertTalkDetails;
