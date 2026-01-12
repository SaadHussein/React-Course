import Accordion from "./components/Accordion/Accordion";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us ?</h2>
        <Accordion className="accordion">
          <Accordion.Item id={"Id-One"} className={"accordion-item"}>
            <Accordion.Title className={"accordion-item-title"}>
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className={"accordion-item-content"}>
              <article>
                <p>you can&apos;t go wrong with us.</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vero, laudantium. Ab nulla nostrum reprehenderit ex mollitia,
                  similique inventore voluptate laborum.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id={"Id-Two"} className={"accordion-item"}>
            <Accordion.Title className={"accordion-item-title"}>
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className={"accordion-item-content"}>
              <article>
                <p>you can&apos;t go wrong with us.</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vero, laudantium. Ab nulla nostrum reprehenderit ex mollitia,
                  similique inventore voluptate laborum.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
