import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: 'TrendingUp',
      title: 'Вирусные механики',
      description: 'Используем проверенные триггеры и паттерны для максимального охвата'
    },
    {
      icon: 'Music',
      title: 'Трендовые звуки',
      description: 'Подбираем актуальные треки, которые продвигает алгоритм Instagram'
    },
    {
      icon: 'Sparkles',
      title: 'Креативные сценарии',
      description: 'Разрабатываем уникальные концепции под ваш бренд и аудиторию'
    },
    {
      icon: 'Zap',
      title: 'Быстрое производство',
      description: 'Создаём контент в сжатые сроки без потери качества'
    }
  ];

  const process = [
    { step: '01', title: 'Анализ трендов', description: 'Изучаем актуальные механики и форматы' },
    { step: '02', title: 'Разработка концепции', description: 'Создаём сценарий под вашу нишу' },
    { step: '03', title: 'Производство', description: 'Съёмка и монтаж с трендовыми эффектами' },
    { step: '04', title: 'Оптимизация', description: 'Адаптация под алгоритмы Instagram' }
  ];

  const pricing = [
    {
      name: 'Старт',
      price: '15 000',
      features: ['5 рилзов в месяц', 'Трендовые звуки', 'Базовый монтаж', 'Техподдержка']
    },
    {
      name: 'Профи',
      price: '35 000',
      popular: true,
      features: ['15 рилзов в месяц', 'Премиум звуки', 'Продвинутые эффекты', 'Анализ метрик', 'Приоритетная поддержка']
    },
    {
      name: 'Бизнес',
      price: '70 000',
      features: ['30 рилзов в месяц', 'Эксклюзивные треки', 'VFX и анимация', 'Консультация стратега', 'Личный менеджер']
    }
  ];

  const portfolio = [
    { image: 'https://cdn.poehali.dev/projects/b0dd2e5f-66f2-4763-b46b-a08a70e39e55/files/1cfc8aac-5c1e-4a55-8f8e-7ce2710a9383.jpg', views: '2.3M' },
    { image: 'https://cdn.poehali.dev/projects/b0dd2e5f-66f2-4763-b46b-a08a70e39e55/files/ad879a9a-8ebf-4d35-a5c8-9742296c6d99.jpg', views: '1.8M' },
    { image: 'https://cdn.poehali.dev/projects/b0dd2e5f-66f2-4763-b46b-a08a70e39e55/files/65df7a3f-f548-40b4-b7a3-318e45b13595.jpg', views: '3.1M' }
  ];

  const testimonials = [
    { name: 'Анна Петрова', role: 'Основатель бренда косметики', text: 'Охваты выросли в 5 раз за месяц! Команда точно понимает, что заходит аудитории.' },
    { name: 'Игорь Смирнов', role: 'Фитнес-блогер', text: 'Рилзы набирают миллионы просмотров. Профессионалы своего дела!' },
    { name: 'Мария Козлова', role: 'Владелица кафе', text: 'Благодаря вирусным рилзам к нам выстроились очереди. Рекомендую!' }
  ];

  const faq = [
    { q: 'Сколько времени занимает создание одного рилза?', a: 'От 2 до 5 рабочих дней в зависимости от сложности концепции и выбранного тарифа.' },
    { q: 'Предоставляете ли вы исходники?', a: 'Да, все исходные файлы передаются клиенту после завершения работы.' },
    { q: 'Можно ли вносить правки?', a: 'Конечно! В каждом тарифе предусмотрены бесплатные корректировки.' },
    { q: 'Гарантируете ли вы виральность?', a: 'Мы используем проверенные механики, но конечный результат зависит от множества факторов, включая вашу аудиторию и нишу.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-heading font-bold text-2xl text-primary">ReelsFactory</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Начать проект</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Завод вирусных рилзов
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Создаём Instagram Reels с трендовыми механиками и звуками, которые взрывают охваты
          </p>
          <div className="flex gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="text-lg">
              <Icon name="Rocket" className="mr-2" size={20} />
              Запустить рилз
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Комплексное производство контента для Instagram</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">Процесс работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-heading font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="font-heading text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Наши работы с миллионными охватами</p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl cursor-pointer">
                <img src={item.image} alt={`Portfolio ${idx + 1}`} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Eye" size={20} />
                    <span className="font-semibold text-lg">{item.views} просмотров</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите подходящий тариф</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold font-heading mt-4">
                    {plan.price} ₽<span className="text-lg text-muted-foreground font-normal">/мес</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на частые вопросы</p>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами для обсуждения проекта</p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="font-heading font-bold text-2xl mb-4">ReelsFactory</div>
          <p className="text-background/70 mb-6">Завод вирусных Instagram Reels</p>
          <p className="text-sm text-background/60">© 2024 ReelsFactory. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
