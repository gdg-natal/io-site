import { useQuery } from '@apollo/client';

import aboutQuery from '@/graphql/queries/about';

import { getContent } from '@/utils'

import Button from '@/components/Button';

export default function About() {
  const { data, loading, error } = useQuery(aboutQuery);
  const content = getContent(data?.about)

  return (
    <section id="about" className="border-2 border-solid border-lightGrey rounded-lg bg-[url('/images/about-bg.png')] bg-right-bottom bg-no-repeat">
      <aside className="w-1/2 p-10 pb-24">
        <h2 className="mb-4 text-4xl">{content?.title}</h2>
        <h3 className="mb-8 text-xl">{content?.content}</h3>
        <Button outlined href="#">Registre-se</Button>
      </aside>
    </section>
  );
};
