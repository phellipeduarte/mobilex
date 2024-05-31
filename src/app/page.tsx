import Image from 'next/image';
import { Button } from './components/Button';

export default function Home() {

  return (
    <>
      <section className="min-h-[60rem] pt-12">
        <div className="min-h-[40rem] md:min-h-[27rem] flex flex-col justify-between">
          <p className='text-5xl md:text-7xl font-extrabold'>As mais recentes novidades e tecnologias diretamente no seu bolso.
          </p>
          <p className="text-xl text-gray-400 max-w-screen-md">Explore smartphones de última geração, acessórios modernos e gadgets inovadores. Descubra produtos exclusivos e ofertas especiais para encontrar a tecnologia perfeita para você</p>
          <div className="flex flex-col gap-2 py-4 md:flex-row">
            <Button text="Comprar" to="/marketplace" />
            <Button text="Saiba Mais" to="/marketplace" />
          </div>
        </div>
        <div className="flex justify-end pt-12 md:pt-24">
          <Image
            src="https://i.postimg.cc/RhxC3B5n/iphone.png"
            width={900}
            height={150}
            alt="iphones"
          />
        </div>
      </section>
    </>
  );
}
