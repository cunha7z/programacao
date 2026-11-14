import './App.css'
import Footer from './components/footer'
import Header from './components/header'

function App() {


  return (
    <>
    <Header />
    <main className="main-content">
      <section className="intro" aria-labelledby="intro-title">
        <p className="intro__eyebrow">Gestão inteligente</p>
        <h1 id="intro-title">MEU PROJETO</h1>
        <p className="intro__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti et,
          pariatur non natus laborum fugit veritatis commodi vel quas ducimus
          aliquam perferendis, facere sint quis a esse excepturi eaque aperiam!
        </p>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
