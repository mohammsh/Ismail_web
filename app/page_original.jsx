// app/page.jsx
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
import TestComponent from '@/components/TestComponent';  // Import TestComponent

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <TestComponent />  {/* Add the TestComponent here */}
      {/* <Cta /> */}
    </main>
  );
}
