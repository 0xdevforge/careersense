import React from 'react'

export default function Marque() {
    const topics = [
        { name: 'ANXIETY', bgClass: 'bg-anxiety' },
        { name: 'PTSD', bgClass: 'bg-ptsd' },
        { name: 'BIPOLAR DISORDER', bgClass: 'bg-bipolar' },
        { name: 'DEPRESSION', bgClass: 'bg-depression' },
        { name: 'ABUSE RECOVERY', bgClass: 'bg-abuse' },
        { name: 'GRIEF AND LOSS', bgClass: 'bg-grief' },
        { name: 'ANOREXIA', bgClass: 'bg-anorexia' },
        { name: 'BULIMIA', bgClass: 'bg-bulimia' },
        { name: 'TRAUMA', bgClass: 'bg-trauma' },
        { name: 'INSOMNIA', bgClass: 'bg-insomnia' },
      ];
      const allTopics = [...topics, ...topics];
      const renderTopics = (direction: any) => (
        <div className={`marquee-${direction}`}>
          {allTopics.map((topic, index) => (
            <div key={index} className={`topic ${topic.bgClass}`}>
              {topic.name}
            </div>
          ))}
          {/* Repeat the topics for seamless animation */}
          {topics.map((topic, index) => (
            <div key={index} className={`topic ${topic.bgClass}`}>
              {topic.name}
            </div>
          ))}
        </div>
      );

      return (
        <div className="-mx-12 lg:my-32">
          <div className="marquee">
            {renderTopics('left')}
          </div>
          <div className="marquee">
            {renderTopics('right')}
          </div>
        </div>
      );
    }