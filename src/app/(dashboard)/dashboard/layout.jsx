const layout = ({ children }) => {
  return (
    <div>
      <h1>dashboard header</h1>
      <div className="h-48">{children}</div>
      <footer>dashboard footer</footer>
    </div>
  );
};

export default layout;
