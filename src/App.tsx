import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Users, 
  Cake, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass px-4 py-3 sm:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP08z0TSd1xnlZbjV5g_khXTg1TaYqvc9qJeCXssI0haua5kqAFo-XdN1mU2Rv7kjh9t9lrkBxuOgEwZDyYFbxT6ugukVICsYOTTI28U8MQvxL4UVaCBLYOIqgXgEHIE46Db0hV5d1vxJVY8ho-v4xg54u5-8NB_0cPac_e7fXPrb871vYU2WgntSsMeE/w200-h200/logo.png" 
          alt="Arco Íris Logo" 
          className="h-10 sm:h-12 w-auto"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-display font-medium text-brand-blue">
        <a href="#servicos" className="hover:text-brand-pink transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-brand-pink transition-colors">Sobre</a>
        <a href="#contato" className="hover:text-brand-pink transition-colors">Contato</a>
        <a 
          href="https://wa.me/5514997394356" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-pink text-white px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-lg"
        >
          Reservar Agora
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden font-display font-medium text-brand-blue animate-in fade-in slide-in-from-top-4">
          <a href="#servicos" onClick={() => setIsOpen(false)} className="hover:text-brand-pink py-2 border-b border-slate-100">Serviços</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="hover:text-brand-pink py-2 border-b border-slate-100">Sobre</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-brand-pink py-2 border-b border-slate-100">Contato</a>
          <a 
            href="https://wa.me/5514997394356" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-pink text-white px-6 py-3 rounded-xl text-center shadow-lg mt-2"
          >
            Reservar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf6tg-mDrLENHJ0A-q3_ayEeLtxY8Ggw-KByj-JRKM9Ko1LlWJhljlBnu7noX-PFENHCKrWb84nyOPvXuoAEZ7ESpHDhJuf5LeX9dWiaZf9r_qcfl5qtQRHm6nmPY7fYMhutXFugLhPHksffJxEcv_tMlsUh4i1x8gCQqe8L5jXWMMaUlBqgBI_jWDWF8/s16000/hero.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbRf2uU8aH-jUle7X2T4I3YAthxu4KfGSUvLIOAC1XudcPtJCTkffb1I_ILRHC0s2j3KetVWYRm6dsN9lA9dSs6g9HVlAJVkGDruIHIAcw2lnSgM1KtY_kmpzHOrWcQnvlr9sZGkRH-RzxwYzncYZAskwHiMwcOusMJT5H3kYOXiLdkkeXoBwb1Z9ZRfY/s16000/hero3.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLBMSD2qUh_vfrWR-8Z2EVUWsaxjPnCP0eXjTmSoxdnJj_BsTS8OHd8x9CLne-RpQyzW4DqzDDA7AJlUjnbZOFy2jUh0r9NCafA7BUd2T_sfHpwYG0LQ100mhjzAO0kjhwcKQd0yXHUvJbIvXnEb_hqXHUYXtqwHCuXfx96P9ArYBrx-ThMbibMI3MvSA/s16000/hero2.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            alt={`Festa Infantil Arco Íris ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/90 via-brand-cyan/60 to-transparent md:bg-gradient-to-r md:from-brand-cyan/80 md:via-brand-cyan/40 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 hero-content max-w-5xl">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-brand-blue leading-[1.1] text-balance drop-shadow-sm">
          Onde a <span className="text-brand-pink">Magia</span> das Festas Acontece!
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-white max-w-2xl font-medium leading-relaxed drop-shadow-sm">
          Transformamos o aniversário do seu filho em um dia inesquecível com estrutura completa, buffet delicioso e muita diversão em Avaré/SP.
        </p>
        <div className="mt-12 flex flex-wrap gap-6">
          <a 
            href="https://wa.me/5514997394356" 
            className="bg-brand-pink text-white px-10 py-5 rounded-full font-display font-bold text-xl shadow-2xl hover:bg-brand-orange hover:scale-105 transition-all flex items-center gap-2"
          >
            Solicitar Orçamento <ChevronRight size={24} />
          </a>
          <a 
            href="#servicos" 
            className="glass text-brand-blue px-10 py-5 rounded-full font-display font-bold text-xl hover:bg-white/40 hover:scale-105 transition-all"
          >
            Ver Pacotes
          </a>
        </div>
      </div>
    </section>
  );
};

const Authority = () => {
  const stats = [
    { label: "Anos de Alegria", value: "10+" },
    { label: "Festas Realizadas", value: "1500+" },
    { label: "Clientes Felizes", value: "5000+" },
    { label: "Espaço Amplo", value: "500m²" },
  ];

  return (
    <section className="py-12 bg-brand-yellow">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-brand-pink mb-2">{stat.value}</div>
              <div className="text-brand-blue font-bold uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const packages = [
    {
      name: "Festa Essencial",
      price: "R$ 1.600",
      conditions: "Segunda à Quinta • 3h de festa",
      capacity: "25 crianças + 2 adultos",
      menu: ["Refrigerante", "Suco", "Hot-dog", "Pipoca", "Bolo", "Picolé"],
      color: "bg-brand-orange",
      cardBg: "#deeaff",
      icon: <Clock className="text-brand-orange" />
    },
    {
      name: "Festa Clássica",
      price: "R$ 2.000",
      conditions: "Segunda à Quinta • 3h de festa",
      capacity: "25 crianças + 2 adultos",
      menu: ["Salgadinhos", "Refrigerante", "Suco", "Pipoca", "Bolo", "Picolé"],
      color: "bg-brand-pink",
      cardBg: "#ffd6eb",
      featured: true,
      icon: <Star className="text-brand-pink" />
    },
    {
      name: "Festa Premium",
      price: "Sob Consulta",
      conditions: "Todos os dias • 4h de festa",
      capacity: "A partir de 40 pessoas",
      menu: ["Pastel", "Crepe", "Mini Pizza", "Churros", "Docinhos", "Bebidas Completas"],
      color: "bg-brand-purple",
      cardBg: "#deeaff",
      icon: <Cake className="text-brand-purple" />
    }
  ];

  return (
    <section id="servicos" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-blue mb-4">Nossos Pacotes de Alegria</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Escolha a opção que melhor se adapta ao seu sonho e deixe o resto com a gente.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              style={{ backgroundColor: pkg.cardBg }}
              className={`relative rounded-3xl p-8 border-2 transition-all hover:-translate-y-2 ${pkg.featured ? 'border-brand-pink shadow-2xl scale-105 z-10' : 'border-slate-100'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Mais Popular
                </div>
              )}
              <div className="mb-6 flex justify-between items-start">
                <div className={`p-3 rounded-2xl bg-opacity-10 ${pkg.color.replace('bg-', 'bg-opacity-10 text-')}`}>
                  {pkg.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-brand-blue">{pkg.price}</div>
                  <div className="text-xs text-slate-500 font-medium">{pkg.conditions}</div>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-blue mb-4">{pkg.name}</h3>
              <div className="flex items-center gap-2 text-slate-600 mb-6 text-sm">
                <Users size={16} /> {pkg.capacity}
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.menu.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="text-brand-cyan" /> {item}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/5514997394356?text=Olá! Gostaria de saber mais sobre a ${pkg.name}`}
                className={`w-full py-3 rounded-xl font-display font-bold text-center block transition-colors ${pkg.featured ? 'bg-brand-pink text-white hover:bg-brand-orange' : 'bg-brand-blue text-white hover:bg-brand-pink'}`}
              >
                Escolher Este
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoDifferentials = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-cyan/20">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-blue text-center mb-16">Por que escolher o Arco Íris?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-lg flex flex-col justify-between border-b-4 border-brand-pink">
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-pink mb-4">Estrutura Completa e Segura</h3>
              <p className="text-slate-600 leading-relaxed">
                Nosso espaço foi projetado pensando em cada detalhe da segurança e diversão. Brinquedos modernos, área baby isolada e monitoramento constante para que os pais fiquem tranquilos.
              </p>
            </div>
            <div className="mt-8 flex gap-4 overflow-hidden">
              <div className="h-24 w-1/3 rounded-2xl border-4 border-brand-yellow overflow-hidden">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf6tg-mDrLENHJ0A-q3_ayEeLtxY8Ggw-KByj-JRKM9Ko1LlWJhljlBnu7noX-PFENHCKrWb84nyOPvXuoAEZ7ESpHDhJuf5LeX9dWiaZf9r_qcfl5qtQRHm6nmPY7fYMhutXFugLhPHksffJxEcv_tMlsUh4i1x8gCQqe8L5jXWMMaUlBqgBI_jWDWF8/s16000/hero.png" 
                  alt="Estrutura 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-24 w-1/3 rounded-2xl border-4 border-brand-orange overflow-hidden">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLBMSD2qUh_vfrWR-8Z2EVUWsaxjPnCP0eXjTmSoxdnJj_BsTS8OHd8x9CLne-RpQyzW4DqzDDA7AJlUjnbZOFy2jUh0r9NCafA7BUd2T_sfHpwYG0LQ100mhjzAO0kjhwcKQd0yXHUvJbIvXnEb_hqXHUYXtqwHCuXfx96P9ArYBrx-ThMbibMI3MvSA/s16000/hero2.png" 
                  alt="Estrutura 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-24 w-1/3 rounded-2xl border-4 border-brand-purple overflow-hidden">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjydYGVXeQaUui6pH9eRhfOmLKY-H7s-_HM12mZgvoNnWwb-8Ce5ZVBthzbkYYuaaLEAhTb10aYGDtqjdrN54oZxsUTCgQaPyKZutVpHPmBZmb3skvZZN6JBZCB_9_f8IWCxyEuxKM-NdtP3tTxLWb7OlvG4CX8ClGbv9jaJpHkOAH0JPbIvG9sLorAW3s/w640-h640/hero4.png" 
                  alt="Estrutura 3" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-brand-blue p-8 rounded-3xl shadow-lg text-white flex flex-col justify-center text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Equipe Especializada</h3>
            <p className="text-blue-100 text-sm">
              Monitores treinados e apaixonados pelo que fazem, garantindo que nenhuma criança fique de fora da diversão.
            </p>
          </div>

          <div className="bg-brand-orange p-8 rounded-3xl shadow-lg text-white">
            <h3 className="font-display text-2xl font-bold mb-4">Localização Privilegiada</h3>
            <div className="flex items-start gap-3">
              <MapPin className="shrink-0" />
              <p className="text-orange-50 text-sm">
                Rua Santa Catarina, 866 - Centro, Avaré/SP. Fácil acesso e estacionamento para seus convidados.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-lg border-b-4 border-brand-yellow">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-brand-orange mb-4">Cardápio Irresistível</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Desde os clássicos salgadinhos até crepes e pizzas artesanais. Tudo fresquinho e preparado com ingredientes de primeira qualidade para agradar crianças e adultos.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full md:w-48">
                <div className="aspect-square bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink font-bold">🍕 Pizza</div>
                <div className="aspect-square bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan font-bold">🥞 Crepe</div>
                <div className="aspect-square bg-brand-purple/10 rounded-xl flex items-center justify-center text-brand-purple font-bold">🎂 Bolo</div>
                <div className="aspect-square bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow font-bold">🍬 Doces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjydYGVXeQaUui6pH9eRhfOmLKY-H7s-_HM12mZgvoNnWwb-8Ce5ZVBthzbkYYuaaLEAhTb10aYGDtqjdrN54oZxsUTCgQaPyKZutVpHPmBZmb3skvZZN6JBZCB_9_f8IWCxyEuxKM-NdtP3tTxLWb7OlvG4CX8ClGbv9jaJpHkOAH0JPbIvG9sLorAW3s/w640-h640/hero4.png" 
              alt="Sobre o Arco Íris" 
              className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-blue mb-6">Nossa História, Seu Momento</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              O Arco Íris Buffet Infantil nasceu do sonho de criar um espaço onde a imaginação não tem limites. Localizado no coração de Avaré, somos referência em festas que unem tradição e modernidade.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Nossa missão é simples: cuidar de cada detalhe para que você possa aproveitar a festa ao lado do seu filho. Da decoração temática ao serviço de mesa, nossa equipe trabalha com amor para entregar excelência.
            </p>
            <div className="flex gap-4">
              <div className="bg-brand-cyan/10 p-4 rounded-2xl">
                <div className="font-display font-bold text-brand-blue">Missão</div>
                <div className="text-xs text-slate-500">Criar memórias mágicas</div>
              </div>
              <div className="bg-brand-pink/10 p-4 rounded-2xl">
                <div className="font-display font-bold text-brand-pink">Valores</div>
                <div className="text-xs text-slate-500">Segurança e Alegria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    { name: "Mariana Silva", text: "A melhor festa que meu filho já teve! A equipe é maravilhosa e a comida estava divina.", role: "Mãe do Pedro (5 anos)" },
    { name: "Ricardo Santos", text: "Espaço muito seguro e organizado. Os monitores realmente brincam com as crianças.", role: "Pai da Julia (7 anos)" },
    { name: "Ana Paula", text: "O pacote Premium vale cada centavo. Não precisei me preocupar com nada, foi perfeito!", role: "Mãe do Lucas (4 anos)" },
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-16">O que dizem as famílias</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="italic mb-6 text-blue-50">"{t.text}"</p>
              <div className="font-display font-bold">{t.name}</div>
              <div className="text-xs text-blue-200 uppercase tracking-wider">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section id="contato" className="py-12 md:py-20 bg-brand-pink relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center text-white">
        <h2 className="font-display text-4xl sm:text-6xl font-bold mb-8 text-balance">Vamos planejar a festa dos sonhos?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-pink-50">
          Datas limitadas para 2026! Entre em contato agora e garanta o melhor dia para o seu pequeno.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://wa.me/5514997394356" 
            className="bg-white text-brand-pink px-10 py-5 rounded-full font-display font-bold text-xl shadow-2xl hover:bg-brand-yellow hover:text-brand-blue transition-all flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} /> Conversar no WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/arcoirisbuffet_infantil/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white px-10 py-5 rounded-full font-display font-bold text-xl shadow-2xl hover:bg-white hover:text-brand-blue transition-all flex items-center justify-center gap-3"
          >
            <Instagram size={24} /> Ver nosso Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-8">
          <div className="text-center md:text-left">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP08z0TSd1xnlZbjV5g_khXTg1TaYqvc9qJeCXssI0haua5kqAFo-XdN1mU2Rv7kjh9t9lrkBxuOgEwZDyYFbxT6ugukVICsYOTTI28U8MQvxL4UVaCBLYOIqgXgEHIE46Db0hV5d1vxJVY8ho-v4xg54u5-8NB_0cPac_e7fXPrb871vYU2WgntSsMeE/w200-h200/logo.png" 
              alt="Arco Íris Logo" 
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="max-w-xs text-sm">
              O melhor buffet infantil de Avaré e região. Diversão garantida com segurança e qualidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-display font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicos" className="hover:text-brand-cyan transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-brand-cyan transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-brand-cyan transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-display font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin size={14} /> Avaré/SP</li>
                <li className="flex items-center gap-2"><MessageCircle size={14} /> (14) 99739-4356</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs tracking-widest uppercase">
          &copy; 2026 Arco Íris Buffet Infantil - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for sections
      const sections = gsap.utils.toArray('section');
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Special hover effects for cards
      gsap.utils.toArray('.hover-card').forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="selection:bg-brand-pink selection:text-white">
      <Navbar />
      <Hero />
      <Authority />
      <Services />
      <BentoDifferentials />
      <About />
      <SocialProof />
      <CTAFinal />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5514997394356" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}
