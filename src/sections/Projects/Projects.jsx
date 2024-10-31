import styles from './ProjectsStyles.module.css';
import media from '../../assets/viberr.png';
import snake from '../../assets/snake.png';
import weather from '../../assets/weather app.avif';
import vlog from '../../assets/vlog.webp';
import ProjectCard from '../../common/ProjectCard';

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
          src={weather}
          link="https://github.com/praveenaa47/weatherapp"
          h3="Weather App"
          p="checking weather"
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
