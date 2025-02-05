import styles from './ProjectsStyles.module.css';
import media from '../../assets/viberr.png';
import snake from '../../assets/snake.png';
import vlog from '../../assets/vlog.webp';
import ProjectCard from '../../common/ProjectCard';
import  cart from '../../assets/cart.webp'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={media}
          link="https://github.com/praveenaa47/media-playerr-frontend"
          h3="MEDIA PLAYER APP"
          p="Video-Audio App"
        />
        <ProjectCard
          src={snake}
          link="https://github.com/praveenaa47/snake-game"
          h3="SNAKE GAME"
          p="Exciting Snake-Game"
        />
        <ProjectCard
          src={cart}
          link="https://github.com/praveenaa47/Redux-E-CART"
          h3="E-CART"
          p="product website"
        />
        <ProjectCard
          src={vlog}
          link="https://github.com/praveenaa47/travel-blog"
          h3="TRAVEL BLOG"
          p="Clone"
        />
      </div>
    </section>
  );
}

export default Projects;
