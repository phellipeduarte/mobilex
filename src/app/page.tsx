import Image from 'next/image';
import { Button, ButtonSize, ButtonType } from './components/Button';

export default function Home() {

  const imageURL = "https://i.postimg.cc/zBgKqj5X/iphone-light.jpg"
  const darkImageURL = "https://i.postimg.cc/N0pCxbZ0/iphone15.png"

  return (
    <>
      <section className="min-h-full dark:md:min-h-[60rem] md:pt-12">
        <div className="md:min-h-[27rem] flex flex-col justify-between">
          <p className='text-5xl md:text-7xl font-extrabold'>As mais recentes novidades e tecnologias diretamente no seu bolso.
          </p>
          <p className="text-xl text-gray-400 max-w-screen-md">Explore smartphones de última geração, acessórios modernos e gadgets inovadores. Descubra produtos exclusivos e ofertas especiais para encontrar a tecnologia perfeita para você</p>
          <div className="flex flex-col gap-2 py-4 md:flex-row">
            <Button text="Comprar" to="/marketplace" size={ButtonSize.lg} type={ButtonType.main} />
            <Button text="Saiba Mais" to="/marketplace" size={ButtonSize.lg} type={ButtonType.secondary} />
          </div>
        </div>
        <div className="flex justify-end pt-auto dark:py-12 md:pt-24">
          <Image
            className="dark:hidden"
            src={imageURL}
            width={500}
            height={150}
            alt="iphone"
          />
          <Image
            className="hidden dark:block"
            src={darkImageURL}
            width={900}
            height={150}
            alt="iphone"
          />
        </div>
      </section>
    </>
  );
}
