import "./App.css";
import SmallCard from "./components/smallCard/SmallCard";
import BlackBar from "./components/blackbar/BlackBar";
import Header from "./components/header/Header";
import Shelf from "./components/shelf/Shelf";
import Brand from "./components/brand/Brand";
import TextSidePic from "./components/textsidepic/TextSidePic";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Footer from "./components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Jumbotron from "./components/jumbotron/Jumbotron";
import MobileHeader from "./components/mobileHeader/MobileHeader";

function App() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <MobileHeader />
      <Jumbotron />
      <div className="container my-4">
        <div className="row my-3">
          <p className="text-center m-0  ">Por que comprar na Maeztra?</p>
        </div>

        <div className="row row-brand d-flex justify-content-between">
          <SmallCard
            icon="globe-americas"
            strong="Produtos importados"
            small="Produtos de alta qualdidade"
          />
          <SmallCard
            icon="warehouse"
            strong="Estoque no Brasil"
            small="Produtos mais perto de você"
          />
          <SmallCard
            icon="sync"
            strong="Trocas garantidas"
            small="Trocas em até 48 horas, veja as regras"
          />
          <SmallCard
            icon="tag"
            strong="Ganhe 5% off"
            small="Pagando a vista no cartão"
          />
          <SmallCard
            icon="truck"
            strong="Frete grátis"
            small="Em compras acima de R$ 499,00"
          />
        </div>
        <div className="row mt-5 mb-3">
          <h4 className="text-center m-0  ">Marcas Parceiras</h4>
        </div>
        <div className="row d-flex row-brand justify-content-between p-0">
          <Brand img="./img/comma.png" />
          <Brand img="./img/melissa.png" />
          <Brand />
          <Brand img="/img/zara.png" />
          <Brand img="/img/anntaylor.png" />
        </div>
        <div className="row mt-5 mb-3 ">
          <h4 className="text-center text-capitalize text-weight-bolder m-0">
            As mais pedidas
          </h4>
        </div>
        <div className="row d-flex justify-content-between">
          <Slider {...settings}>
            <Shelf />
            <Shelf modelo="/img/modelo2.png" />
            <Shelf />
            <Shelf modelo="/img/modelo2.png" />
            <Shelf />
            <Shelf />
            <Shelf modelo="/img/modelo2.png" />
            <Shelf />
            <Shelf modelo="/img/modelo2.png" />
            <Shelf />
          </Slider>
        </div>
        <div className="row my-5">
          <TextSidePic
            title="Lorem Ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat."
            img="img/novaColecao.png"
          />
        </div>
      </div>
      <Footer />
      <BlackBar />
    </>
  );
}

export default App;
