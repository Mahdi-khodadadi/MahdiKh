import {
  AboutSection,
  BlogUpdatePage,
  EducationSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from '../../pages';

const Sections = () => {
  return (
    <div>
      <section id="home"  >
        <AboutSection />
      </section>

      <section id="services"  >
        <ProjectsSection />
      </section>

{/*       <section  >
        <FeaturedSection />
      </section> */}

      <section id="skills"  >
        <SkillsSection />
      </section>

      <section id="about"  >
        <EducationSection />
      </section>

      <section id="portfolio"  >
        <TestimonialsSection />
      </section>

      <section id="blog"  >
        <BlogUpdatePage />
      </section>
    </div>
  );
};

export default Sections;
