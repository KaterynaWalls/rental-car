import s from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
