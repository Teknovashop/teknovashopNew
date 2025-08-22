import Carousel from './components/Carousel';
        import Ranking from './components/Ranking';
        import Categories from './components/Categories';
        import Newsletter from './components/Newsletter';

        export default function Home() {
            return (
                <main className="p-6 font-sans">
                    <h1 className="text-4xl font-bold text-center mb-6">Bienvenido a Teknovashop</h1>
                    <Carousel />
                    <Ranking />
                    <Categories />
                    <Newsletter />
                </main>
            );
        }