
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextBlock from "./components/TextBlock";
import Gallery from "./components/Gallery";
import People from "./components/People/people";
import Contact from "./components/Contact";
import Post from "./components/Post";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main class="main">
        <TextBlock title='Tell The World About Yourself' subtitle='WHO WE ARE' description='Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
         dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc
           putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
         Eodem modo typi, qui nunc, fiant sollemnes in futurum.' readmore='Read More About Us' />
        <Gallery title='Show Your Amazing Work' subtitle='WHO WE DO' />
        <People title='The Amazing People Behind This' subtitle='WHO WE ARE' description='Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.' />
        <Post
          title='We Like to Write'
          subtitle='LAST POST'
          image="images/liketowrite.png"
          date="14 SEPTEMBER 2014"
          last_title="Change Your Space"
          last='Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium ab incidunt optio praesentium
              maxime quo asperiores.'
          more='More From Our Blog'
          read='Read' />
        <Contact title='Work With Us' subtitle='CONTACT US' />

      </main>
      <Footer />
    </div>
  );
}

export default App;
