import { ReactNode } from 'react';
import { topics } from '../utils/constants';
import { useRouter } from 'next/router';

interface TopicProp {
  topic: { name: string; icon: ReactNode };
}

function Topic({ topic }: TopicProp) {
  const router = useRouter();
  const activeTopic = router.query.topic;

  const clickTopicHandler = (topicName: string) =>
    router.push(`?topic=${topicName}`);

  return (
    <button
      onClick={() => clickTopicHandler(topic.name)}
      key={topic.name}
      className={`${
        topic.name === activeTopic
          ? 'active-topic'
          : 'border-gray-200 hover:bg-gray-200 hover:border-gray-300'
      } rounded-full flex items-center px-3 py-3 lg:py-2 border
      `}
    >
      {topic.icon} <p className='ml-2 hidden lg:block'>{topic.name}</p>
    </button>
  );
}

export default function PopularTopics() {
  return (
    <div className='mb-4'>
      <h2 className='font-semibold text-lg mb-3 text-gray-500 hidden lg:block'>
        Popular Topic
      </h2>

      <div className='flex flex-wrap gap-2'>
        {topics.map((topic) => (
          <Topic key={topic.name} topic={topic} />
        ))}
      </div>
    </div>
  );
}