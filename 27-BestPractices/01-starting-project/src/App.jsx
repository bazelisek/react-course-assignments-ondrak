import Accordion from "./components/Accordion/Accordion";
import { PLACES } from "./PLACES";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

function App() {
  return (
  <main>
    <section>
      <h2>Why work with us</h2>
      <Accordion className="accordion">
        <Accordion.Item 
          id="experience"
          className="accordion-item" 
        >
          <Accordion.Title className="accordion-item-title">We have 20 years of experience</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>You can&apos;t got wrong with us</p>
              <p>We are in the business of planning ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fuga?</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
          id="local-guides"
          className="accordion-item" 
        >
          <Accordion.Title className="accordion-item-title">We're working with local guides</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>We are not doing this all from out office</p>
              <p>Instead we are working with local guides to ensure safe and pleasant experience</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item => item.id)}>
        {(item) => {
          return <Place item={item}/>
        }}
      </SearchableList>
      <SearchableList items={['imem 1', 'imem 2']} itemKeyFn={(item => item)}>
        {item => item}
      </SearchableList>
    </section>
  </main>
  );
}

export default App;
