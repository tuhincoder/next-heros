"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  //   console.log(pathName);
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      <nav className="flex justify-between  bg-gray-700 p-5 text-white">
        <h2>Next Hero</h2>
        <ul className="flex gap-4">
          {links?.map((link) => (
            <Link
              className={`${
                pathName === link.path && "bg-green-700 px-0.5 rounded"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button className="bg-green-700 px-2" onClick={handleLogin}>
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
