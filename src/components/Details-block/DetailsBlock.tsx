interface DetailsProps {
  title: string;
}

const DetailsBlock = ({ title }: DetailsProps) => {
  const STORIES_IMG = 'https://fastly.picsum.photos/id/353/5000/2806.jpg?hmac=QvrRaGlMinnGfuGM-yhcEwdMbIM3MXXyo0dC7PqqGc0';
  const ADVENTURES_IMG = 'https://fastly.picsum.photos/id/434/4928/3264.jpg?hmac=tS5UBAIGJmQwCLJC0uvmHYHxQi5RDaXXJZy2H1WhZwo';

  return (
    <div className="details-container">
      <div className="content-box">
        <div className="text-box">
          <p className="about">About</p>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam! Sed, eveniet vel reprehenderit tenetur minima ad
            aliquid velit quibusdam earum aspernatur doloremque ipsum!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam!</p>
        </div>
        <div className="image">
          <img src={title === 'Stories of Adventure' ? STORIES_IMG : ADVENTURES_IMG} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
