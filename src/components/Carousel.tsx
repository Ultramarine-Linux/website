import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment, type FC } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface CarouselItem {
  name: string;
  image: string;
  description: string;
}

const Carousel: FC<{ views: CarouselItem[] }> = (props) => {
  const panels = props?.views?.map(({ name, description, image }) => (
    <TabPanel key={name}>
      <img
        src={image}
        alt={description}
        className="h-96 object-contain object-center"
      />
    </TabPanel>
  ));
  const tabs = props?.views?.map(({ name }) => (
    <Tab as={Fragment} key={name}>
      {({ selected }) => (
        <button
          className={classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
            selected ? "bg-gray-800 shadow" : "hover:bg-white/[0.12]",
          )}
        >
          {name}
        </button>
      )}
    </Tab>
  ));

  return (
    <TabGroup>
      <TabPanels>{panels}</TabPanels>
      <TabList className="flex flex-row gap-6 shadow-md justify-center bg-gray-900 rounded-lg">
        {tabs}
      </TabList>
    </TabGroup>
  );
};

export default Carousel;
