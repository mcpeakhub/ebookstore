import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      "id": 1,
      "question": "Why should I use CodeBook?",
      "answer": "Bacon ipsum dolor amet magna eu rump, meatball doner ham in sint pork pariatur ball tip biltong ullamco mollit. Lorem salami pork kevin landjaeger enim ipsum bacon pariatur. Consectetur sunt tempor ad esse, occaecat id mollit quis eu. Filet mignon velit commodo rump qui bacon. Minim jerky prosciutto swine corned beef, brisket cupim boudin turkey ribeye sausage mollit t-bone."
    },
    {
      "id": 2,
      "question": "Can I access my eBook on mobile?",
      "answer": "Bacon ipsum dolor amet magna eu rump, meatball doner ham in sint pork pariatur ball tip biltong ullamco mollit. Lorem salami pork kevin landjaeger enim ipsum bacon pariatur. Consectetur sunt tempor ad esse, occaecat id mollit quis eu."
    },
    {
      "id": 3,
      "question": "Do you offer refunds?",
      "answer": "Bacon ipsum dolor amet magna eu rump, meatball doner ham in sint pork pariatur ball tip biltong ullamco mollit. Lorem salami pork kevin landjaeger enim ipsum bacon pariatur."
    },
    {
      "id": 4,
      "question": "Do you support Internation payments?",
      "answer": "Filet mignon velit commodo rump qui bacon. Minim jerky prosciutto swine corned beef, brisket cupim boudin turkey ribeye sausage mollit t-bone."
    }
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>
      <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        {faqs.map((faq) => (
            <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  )
}
