import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'dasfaf',
      label: "Can I use React on a proj",
      content: "You can use React on any proj",
    },

    {
      id: 'fanfn',
      label: "Can I use React on a proj",
      content: "You can use React on any proj",
    },
    {
      id: 'vbgf',
      label: "Can I use React on a proj",
      content: "You can use React on any proj",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;