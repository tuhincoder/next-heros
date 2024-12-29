import Link from "next/link";

const NestedNavLink = () => {
  return (
    <div className="mx-5">
      <Link href="/portfolio/mission">Mission</Link>
      <Link href="/portfolio/mission/vision" className="mx-5">
        Vision
      </Link>
      <Link href="news/bangladeshiNews/myGoal">Goal</Link>
    </div>
  );
};

export default NestedNavLink;
