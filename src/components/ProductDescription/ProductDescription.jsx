import "./css/ProductDescription.css";
import { useParams } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

export default function ProductDescription() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const productList = [
    {
      id: 1,
      image: "/card-1.svg",
      alt: "Cadeira Thunder",
      title: "Cadeira Gamer THUNDER X3",
      description: `
      <p><strong>Cadeira Gamer Thunder X3 Verde</strong></p>
      <p>Transforme seu espaço de jogo em um verdadeiro centro de comando com a Cadeira Gamer Thunder X3 na cor verde vibrante. Projetada para oferecer conforto e estilo sem comprometer a funcionalidade, esta cadeira é ideal para gamers que buscam um desempenho excepcional aliado a um design marcante.</p><br />
      <p><strong>Características Principais:</strong></p>
      <ul>
        <li><strong>Design Ergonômico:</strong> Com uma estrutura que se ajusta perfeitamente ao contorno do seu corpo, a Thunder X3 proporciona suporte ideal para longas sessões de jogo. O encosto reclinável e o ajuste de altura garantem uma postura correta e confortável.</li><br />
        <li><strong>Estofamento Premium:</strong> Revestida em material sintético de alta qualidade, a cadeira oferece uma sensação de luxo e durabilidade. O acolchoamento denso no assento e no encosto proporciona uma experiência confortável, mesmo durante maratonas de jogos.</li><br />
        <li><strong>Ajustes Personalizáveis:</strong> A Thunder X3 é equipada com mecanismos de ajuste que permitem personalizar a altura do assento, a inclinação do encosto e a profundidade do assento, garantindo que você encontre a posição perfeita para seu estilo de jogo.</li><br />
        <li><strong>Detalhes em Verde:</strong> O acabamento em verde vibrante dá um toque esportivo e moderno à cadeira, destacando-a em qualquer ambiente. A combinação com detalhes em preto cria um visual arrojado e imersivo.</li><br />
        <li><strong>Rodas e Base Robustas:</strong> Com uma base em aço resistente e rodas giratórias suaves, a cadeira oferece mobilidade fácil e estabilidade em qualquer superfície. A base de cinco pontos proporciona segurança adicional durante o uso.</li><br />
        <li><strong>Apoios de Braço Ajustáveis:</strong> Os apoios de braço acolchoados podem ser ajustados em altura e largura, oferecendo suporte adicional e reduzindo a tensão nos ombros e nos braços.</li><br />
      </ul>
      <p>Experimente o equilíbrio perfeito entre conforto, estilo e funcionalidade com a Cadeira Gamer Thunder X3 verde. Ideal para quem busca uma experiência de jogo aprimorada e um visual impactante no setup.</p>
    `,
    },
    {
      id: 2,
      image: "/card-2.svg",
      alt: "Monitor Samsung",
      title: 'Monitor Samsung Odyssey CRG9 49" Polegadas 120Hz',
      description: `
    <p><strong>Monitor Samsung Odyssey CRG9 49" Polegadas 120Hz</strong></p>
    <p>Eleve sua experiência de visualização com o Monitor Samsung Odyssey CRG9, um monitor ultrawide de 49 polegadas com uma taxa de atualização de 120Hz. Ideal para jogos imersivos e multitarefa com sua tela curva que proporciona um campo de visão amplo e envolvente.</p><br />
    <p><strong>Características Principais:</strong></p>
    <ul>
      <li><strong>Tela Ultra-Wide:</strong> Com uma tela de 49 polegadas e curvatura de 1800R, oferece uma experiência imersiva e ampla para jogos e produtividade.</li><br />
      <li><strong>Alta Taxa de Atualização:</strong> Taxa de atualização de 120Hz para um desempenho suave e resposta rápida em jogos.</li><br />
      <li><strong>Resolução Dual QHD:</strong> Resolução de 5120 x 1440 pixels para imagens nítidas e detalhadas.</li><br />
      <li><strong>Curvatura Imersiva:</strong> Curvatura de 1800R para um campo de visão mais envolvente e menos distorção.</li><br />
      <li><strong>Vários Modos de Visualização:</strong> Inclui modos de visualização ajustáveis para diferentes necessidades e preferências.</li>
    </ul><br />
    <p>Experimente a diferença com o Samsung Odyssey CRG9 e aproveite uma tela ampla e de alta performance para todos os seus jogos e atividades multimídia.</p>
  `,
    },
    {
      id: 3,
      image: "/card-3.svg",
      alt: "Placa de Vídeo GIGABYTE",
      title:
        "Placa de Vídeo GIGABYTE NVIDIA GeForce RTX 2080 Super Gaming OC, 8GB, GDDR6",
      description: `
    <p><strong>Placa de Vídeo GIGABYTE NVIDIA GeForce RTX 2080 Super Gaming OC</strong></p>
    <p>Aumente o desempenho gráfico do seu PC com a Placa de Vídeo GIGABYTE NVIDIA GeForce RTX 2080 Super. Com 8GB de memória GDDR6, é perfeita para jogos em alta resolução e tarefas exigentes de edição gráfica.</p><br />
    <p><strong>Características Principais:</strong></p>
    <ul>
      <li><strong>Memória:</strong> 8GB GDDR6 para desempenho gráfico rápido e eficiente.</li><br />
      <li><strong>Arquitetura Turing:</strong> Tecnologia Turing da NVIDIA para ray tracing e inteligência artificial.</li><br />
      <li><strong>Overclock de Fábrica:</strong> Frequência de clock melhorada para desempenho superior.</li><br />
      <li><strong>Resfriamento Avançado:</strong> Sistema de resfriamento Windforce com três ventoinhas para manter a temperatura ideal.</li><br />
      <li><strong>Compatibilidade com VR:</strong> Suporte para experiências de realidade virtual imersivas.</li>
    </ul><br />
    <p>Com a RTX 2080 Super, você estará pronto para enfrentar os jogos mais exigentes e criar conteúdos de alta qualidade.</p>
  `,
    },
    {
      id: 4,
      image: "/card-4.svg",
      alt: "Mouse Delux",
      title: "Delux-M800PRO PAW3370 19000 DPI",
      description: `
    <p><strong>Mouse Delux-M800PRO PAW3370 19000 DPI</strong></p>
    <p>O Mouse Delux-M800PRO é um mouse de alto desempenho com sensor PAW3370 e DPI ajustável de até 19000. Ideal para gamers que precisam de precisão e velocidade em suas jogadas.</p><br />
    <p><strong>Características Principais:</strong></p>
    <ul>
      <li><strong>Sensor PAW3370:</strong> Sensor óptico de alta precisão com até 19000 DPI.</li><br />
      <li><strong>Botões Programáveis:</strong> Seis botões programáveis para personalização e macros.</li><br />
      <li><strong>Iluminação RGB:</strong> Efeitos de iluminação personalizáveis com várias cores.</li><br />
      <li><strong>Ergonomia:</strong> Design ergonômico para conforto durante longas sessões de jogo.</li><br />
      <li><strong>Durabilidade:</strong> Switches mecânicos com alta durabilidade para uso intenso.</li>
    </ul><br />
    <p>Maximize seu desempenho com o Delux-M800PRO e sinta a diferença em cada movimento e clique.</p>
  `,
    },
    {
      id: 5,
      image: "/card-5.svg",
      alt: "Headset Gamer",
      title: "Headset Gamer Logitech G935",
      description: `
    <p><strong>Headset Gamer Logitech G935</strong></p>
    <p>Desfrute de áudio imersivo e conforto prolongado com o Headset Gamer Logitech G935. Equipado com som surround 7.1 e drivers de áudio de alta qualidade, é perfeito para gamers que buscam uma experiência sonora superior.</p><br />
    <p><strong>Características Principais:</strong></p>
    <ul>
      <li><strong>Soma Surround 7.1:</strong> Áudio envolvente para uma experiência de jogo imersiva.</li><br />
      <li><strong>Drivers de Áudio de 50mm:</strong> Drivers grandes para um som mais profundo e detalhado.</li><br />
      <li><strong>Microfone Ajustável:</strong> Microfone de alta qualidade com cancelamento de ruído.</li><br />
      <li><strong>Iluminação RGB:</strong> Iluminação personalizável com várias cores.</li><br />
      <li><strong>Conforto:</strong> Almofadas de ouvido e faixa de cabeça ajustáveis para conforto durante longas sessões.</li>
    </ul><br />
    <p>Experimente a qualidade de áudio superior com o Logitech G935 e leve seu jogo a um novo nível de imersão.</p>
  `,
    },
    {
      id: 6,
      image: "/card-6.svg",
      alt: "PLAYSTATION 5",
      title: "PLAYSTATION 5 825GB SONY + 1 Controle",
      description: `
    <p><strong>PLAYSTATION 5 825GB SONY + 1 Controle</strong></p>
    <p>O PlayStation 5 da Sony oferece uma experiência de jogo de próxima geração com gráficos incríveis, tempos de carregamento rápidos e uma vasta biblioteca de jogos. Inclui um console com 825GB de armazenamento e um controle.</p><br />
    <p><strong>Características Principais:</strong></p>
    <ul>
      <li><strong>Armazenamento:</strong> 825GB de SSD para armazenamento rápido e eficiente de jogos.</li><br />
      <li><strong>Gráficos de Próxima Geração:</strong> Suporte para resolução 4K e ray tracing para gráficos impressionantes.</li><br />
      <li><strong>Controle DualSense:</strong> Controle com feedback tátil e gatilhos adaptativos para uma experiência mais imersiva.</li><br />
      <li><strong>Compatibilidade com Jogos:</strong> Acesso a uma vasta biblioteca de jogos e títulos exclusivos.</li><br />
      <li><strong>Design Moderno:</strong> Design elegante e inovador que se destaca em qualquer ambiente.</li>
    </ul><br />
    <p>Com o PlayStation 5, você está pronto para aproveitar o melhor dos jogos da próxima geração e muito mais.</p>
  `,
    },
  ];
  const product = productList.find((p) => p.id === productId);

  return (
    <div className="product_description">
      <div className="title_content">
        <h1>{product.title}</h1>
      </div>
      <div className="image_content">
        <img src={product.image} alt={product.alt} />
      </div>
      <div className="buy_content">
        <div className="wrapper">
          <p>R$ 1.300,00</p>
          <div>
            <button>COMPRAR</button>
            <button>
              <MdOutlineLocalGroceryStore className="icon" />
            </button>
          </div>
        </div>
      </div> 
      <div className="description_content">
        <div className="section">
          <p>DESCRIÇÃO</p>
          <FaArrowUp className="icon" />
        </div>
        <div className="description">
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </div>
    </div>
  );
}
